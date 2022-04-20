#! /usr/bin/env node

import { program } from 'commander'
import * as fse from 'fs-extra'
import { load } from 'js-yaml'

import { MapData } from './map-data/map-data'
import { MapDefinition } from './definition/map-definition'
import { convert } from './convert'
import { getDefaultMapData } from './default-map-data'
import { render } from './render'

/**
 * 引数に指定されたパスから構文定義を取得します。
 * @param defPath 構文定義ファイルへのパス
 * @returns 構文定義ファイルから取得したMapData
 */
const loadMapData = async (defPath: string): Promise<MapData> => {
    const defExists = await fse.pathExists(defPath)
    if (!defExists) {
        throw new Error(`File not found: .${defPath}`)
    }
    const def = await fse.readFile(defPath, 'utf8')
    const yaml = load(def) as MapDefinition[]
    if (!yaml) {
        throw new Error('Failed to load map grammar definition')
    }
    return convert(yaml)
}

/**
 * テンプレートにMapDataを埋め込んでファイルに書き出します。
 * @param source テンプレートファイルのパス
 * @param destination 生成した成果ドキュメントの出力パス
 * @param options オプション引数
 */
const renderFromCli = async (
    source: string,
    destination: string | undefined,
    options: { definition?: string }
) => {
    let mapData: MapData | null = null
    if (options.definition !== undefined) {
        mapData = await loadMapData(options.definition)
    }

    if (mapData === null) {
        mapData = await getDefaultMapData()
    }

    const sourceExists = await fse.pathExists(source)
    if (!sourceExists) {
        throw new Error(`File not found: .${source}`)
    }
    const template = await fse.readFile(source, 'utf-8')
    const rendered = render(template, mapData)

    return fse.writeFile(destination ?? 'rendered', rendered)
}

/**
 * MapDataを生成してファイルに書き出します。
 * @param destination 生成したMapDataの出力パス
 * @param options オプション引数
 */
const generateMapData = async (
    destination: string | undefined,
    options: { definition?: string }
) => {
    let mapData: MapData | null = null
    if (options.definition !== undefined) {
        mapData = await loadMapData(options.definition)
    }

    if (mapData === null) {
        mapData = await getDefaultMapData()
    }

    return fse.writeFile(
        destination ?? 'map-grammar.json',
        JSON.stringify(mapData, null, '  ')
    )
}

program
    .name('b5g')
    .description(
        'generate artifact documents with embedded BveTranSim syntax definitions from template file.'
    )

if (process.env.npm_package_version !== undefined) {
    program.version(process.env.npm_package_version)
}

program
    .command('render <source> [destination]')
    .description('render to the template file.')
    .option(
        '-d, --definition <definition>',
        'custom BveTrainSim syntax definition file'
    )
    .action(renderFromCli)

program
    .command('generate [destination]')
    .description('generate MapData.')
    .option(
        '-d, --definition <definition>',
        'custom BveTrainSim syntax definition file'
    )
    .action(generateMapData)

program.parse(process.argv)
