import { MapDefinition } from '../definition/map-definition'
import { ArgumentPattern } from '../arguments/argument-pattern'

/**
 * IMapDefinitionから付加情報を追加したマップ構文定義
 */
export interface MapStatement extends MapDefinition {
    /**
     * 引数のとり得るパターン（結果用）
     */
    argPattern: ArgumentPattern[]

    /**
     * 小文字のマップ要素名
     */
    elem_lower: string

    /**
     * 小文字のマップ副要素名
     */
    sub_elem_lower?: string

    /**
     * 小文字の関数名
     */
    func_lower?: string

    /**
     * 構文タイプ1か？
     */
    syntax1: boolean

    /**
     * 構文タイプ2か？
     */
    syntax2: boolean

    /**
     * 構文タイプ3か？
     */
    syntax3: boolean

    /**
     * 関数名を持たないステートメントか？
     */
    nofunc: boolean

    /**
     * 引数を持たないステートメントか？
     */
    noarg: boolean
}
