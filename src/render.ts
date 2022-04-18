import * as handlebars from 'handlebars'
import { MapData } from './map-data/map-data'

/**
 * ステートメントをテンプレートに書き出します。
 * @param template Mustacheのレンダー先
 * @param mapData 出力対象のデータ
 */
export const render = (template: string, mapData: MapData): string => {
    handlebars.registerHelper('toLowerCase', function (str: string) {
        return str.toLowerCase()
    })
    handlebars.registerHelper('eq', (a, b) => a == b)
    handlebars.registerHelper('sumlength', function () {
        // eslint-disable-next-line prefer-rest-params
        const args = Array.from(arguments)
        args.pop()
        return args.reduce<number>((acc, arg) => {
            if (typeof arg === 'string') {
                return acc + arg.length
            } else {
                return (
                    acc +
                    Array.from(arg).reduce<number>(
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (acc2, a) => {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            const s = a as any
                            if (s.is_list) {
                                return -999
                            }

                            return acc2 + s.test_value_map_grammar.length
                        },
                        0
                    )
                )
            }
        }, 0)
    })
    handlebars.registerHelper(
        'math',
        function (lvalue: string, operator: string, rvalue: string) {
            const lvalueNum = parseFloat(lvalue)
            const rvalueNum = parseFloat(rvalue)

            return {
                '+': lvalueNum + rvalueNum,
                '-': lvalueNum - rvalueNum,
                '*': lvalueNum * rvalueNum,
                '/': lvalueNum / rvalueNum,
                '%': lvalueNum % rvalueNum,
            }[operator]
        }
    )

    const compiledTemplate = handlebars.compile(template)
    return compiledTemplate(mapData)
}
