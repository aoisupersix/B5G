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
                .filter((state) => state.sub_elem !== undefined)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                .map((state) => state.sub_elem!)
        )
    )
    const functionNames = Array.from(
        new Set(
            statements
                .filter((state) => state.func !== undefined)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                .map((state) => state.func!)
        )
    )

    return {
        states: statements,
        elems: elementNames,
        subElems: subElementNames,
        funcs: functionNames,
    }
}
