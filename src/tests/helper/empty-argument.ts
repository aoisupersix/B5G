import { Argument } from '../../arguments/argument'

/**
 * 空の引数を生成して返します。
 */
export const createEmptyArgument = (): Argument => {
    return {
        name: '',
        type: '',
        desc: '',
        opt: false,
        last: null,
        test_value_map_grammar: '',
        test_value_map_grammar_non_quote: '',
        test_value_csharp: '',
        isList: false,
        inner_arguments: null,
    } as Argument
}
