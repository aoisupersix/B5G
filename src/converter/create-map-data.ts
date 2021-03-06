import linq from 'linq'

import { MapStatement } from '../statements/map-statement'
import { MapData } from '../map-data/map-data'

/**
 * マップステートメントからIMapDataを生成して返します。
 * @param statements IMapStatements
 */
export const createMapData = (statements: MapStatement[]): MapData => {
    const elementNames = linq
        .from(statements)
        .select((state) => state.elem)
        .distinct()
        .toArray()
    const subElementNames = linq
        .from(statements)
        .where((state) => state.sub_elem !== undefined)
        .select((state) => state.sub_elem)
        .cast<string>()
        .distinct()
        .toArray()
    const functionNames = linq
        .from(statements)
        .where((state) => state.func !== undefined)
        .select((state) => state.func)
        .cast<string>()
        .distinct()
        .toArray()

    return {
        states: statements,
        elems: elementNames,
        subElems: subElementNames,
        funcs: functionNames,
    }
}
