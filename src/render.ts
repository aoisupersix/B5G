import * as handlebars from 'handlebars'
import * as helpers from 'handlebars-helpers'

import { MapData } from './map-data/map-data'

/**
 * ステートメントをテンプレートに書き出します。
 * @param template Mustacheのレンダー先
 * @param mapData 出力対象のデータ
 */
export const render = (template: string, mapData: MapData): string => {
    helpers.default({ handlebars: handlebars })
    const compiledTemplate = handlebars.compile(template)
    return compiledTemplate(mapData)
}
