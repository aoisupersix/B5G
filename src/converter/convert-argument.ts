import { ArgumentDefinition } from '../definition/arguments/argument-definition'
import { Argument } from '../arguments/argument'
import { allTypes } from '../argument-types/all-types'

/**
 * IArgumentDefinitionに情報を付与したIArguementを生成して返します。
 * @param argDefs 引数定義（IArgumentDefinition）の配列
 */
export const convertArguments = (argDefs: ArgumentDefinition[]): Argument[] => {
    const args = argDefs.map((argDef) =>
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        allTypes
            .find((t) => t.isType(argDef.type))!
            .convertDefinitionToArgument(argDef)
    )

    if (args.length < 1) {
        return args
    }

    args.slice(-1)[0].last = true
    return args
}
