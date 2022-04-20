import { MapStatement } from '../statements/map-statement'
import { MapData } from '../map-data/map-data'

/**
 * マップステートメントからIMapDataを生成して返します。
 * @param statements IMapStatements
 */
export const createMapData = (statements: MapStatement[]): MapData => {
    const elementNames = Array.from(
        new Set(statements.map((state) => state.elem))
    )
    const subElementNames = Array.from(
        new Set(
            statements
                .map((state) => state.sub_elem)
                .filter((subElem): subElem is string => subElem !== undefined)
        )
    )
    const functionNames = Array.from(
        new Set(
            statements
                .map((state) => state.func)
                .filter((func): func is string => func !== undefined)
        )
    )

    return {
        states: statements,
        elems: elementNames,
        subElems: subElementNames,
        funcs: functionNames,
    }
}
