import * as mapDef from '../definition/map-definition'
import { MapStatement } from '../statements/map-statement'
import { convertArguments } from './convert-argument'
import { ArgumentPattern } from '../arguments/argument-pattern'
import { Argument } from '../arguments/argument'
import { isMapVersion1, isMapVersion2 } from '../headers/map-version-detector'

/**
 * このパターンのマップ構文を示すテスト用の文字列を生成します。
 * @param def マップ構文定義
 * @param args 構文がとり得る引数
 * @returns マップ構文を示す文字列。構文がとり得る引数のテスト用の値も出力される
 */
const generateSyntax = (
    def: mapDef.MapDefinition,
    args: Argument[]
): string => {
    const argSyntaxForTest = args.map((arg) => arg.syntax_for_test).join(',')
    if (def.func === undefined) {
        return `${def.elem} ${argSyntaxForTest};`
    }
    let elemAndFunc = `${def.elem}`
    if (def.key !== undefined) {
        elemAndFunc += `['${def.key}']`
    }
    if (def.sub_elem !== undefined) {
        elemAndFunc += `.${def.sub_elem}`
    }
    elemAndFunc += `.${def.func}`

    return `${elemAndFunc}(${argSyntaxForTest});`
}

/**
 * ArgumentPatternを生成します。
 * @param mapDefinition マップ構文定義
 * @param patternString 引数名のカンマ区切り
 * @param version 使用するマップファイルバージョン
 * @param targetArguments 構文がとり得る引数
 */
const createArgPattern = (
    mapDefinition: mapDef.MapDefinition,
    patternString: string,
    version: string,
    targetArguments: Argument[]
): ArgumentPattern => {
    const args = patternString
        .trim()
        .split(',')
        .filter((argName) => argName !== '')
        .map((argName) => {
            const targets = targetArguments.filter(
                (arg) =>
                    arg.name.trim().toLowerCase() ===
                    argName.trim().toLowerCase()
            )
            //#region 例外処理
            // TODO: Errorクラスの作成
            if (targets.length < 1) {
                console.error(
                    `No matching argument was found. Argument name: ${argName}`
                )
            }
            if (targets.length > 1) {
                const matchingArgNames = targets.reduce(
                    (prev, current) => `${prev}, ${current.name}`,
                    ''
                )
                console.error(
                    `Argument name: ${argName} can not be uniquely identified. Maching arguments: ${matchingArgNames}`
                )
            }
            //#endregion 例外処理
            const arg = Object.assign({}, targets[0])
            arg.last = false
            return arg
        })

    if (args.length > 0) {
        args.slice(-1)[0].last = true
    }

    return {
        args: args,
        version: version,
        useV1Parser: isMapVersion1(version),
        useV2Parser: isMapVersion2(version),
        syntax_for_test: generateSyntax(mapDefinition, args),
    }
}

/**
 * 引数に与えられたマップ構文のバージョン、argPatternsごとのArgumentPatternを生成します。
 * @param mapDefinition マップ構文定義
 * @param targetArguments 構文がとり得る引数
 */
const createArgPatterns = (
    mapDefinition: mapDef.MapDefinition,
    targetArguments: Argument[]
): ArgumentPattern[] => {
    const patterns = mapDefinition.versions.flatMap((version) => {
        if (mapDefinition.argPatterns.length === 0) {
            return [
                createArgPattern(mapDefinition, '', version, targetArguments),
            ]
        }

        return mapDefinition.argPatterns.map((argPattern) =>
            createArgPattern(
                mapDefinition,
                argPattern,
                version,
                targetArguments
            )
        )
    })

    return patterns
}

/**
 * マップ構文定義から必要な情報を付加したIMapStatementを返します。
 * @param mapDefinition マップ構文定義(yaml)
 */
export const convertMapStatement = (
    mapDefinition: mapDef.MapDefinition
): MapStatement => {
    const args = convertArguments(mapDefinition.args)

    const statement: MapStatement = {
        ...mapDefinition,
        elem_lower: mapDefinition.elem.toLowerCase(),
        sub_elem_lower: mapDefinition.sub_elem?.toLowerCase(),
        func_lower: mapDefinition.func?.toLowerCase(),
        syntax1: mapDef.isSyntax1(mapDefinition),
        syntax2: mapDef.isSyntax2(mapDefinition),
        syntax3: mapDef.isSyntax3(mapDefinition),
        nofunc: !mapDef.hasFunc(mapDefinition),
        noarg: !mapDef.hasArg(mapDefinition),
        args: args,
        argPattern: createArgPatterns(mapDefinition, args),
    }

    return statement
}
