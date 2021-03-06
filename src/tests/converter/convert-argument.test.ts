import { convertArguments } from '../../converter/convert-argument'
import { ArgumentDefinition } from '../../definition/arguments/argument-definition'
import { doubleArgumentType } from '../../argument-types/double-argument-type'
import { stringArgumentType } from '../../argument-types/string-argument-type'
import { assertSetIArgumentTestValue } from '../helper/assert-set-iargument-testvalue'

describe('convertArguments', () => {
    let argDefinition: ArgumentDefinition

    beforeEach(
        () =>
            (argDefinition = {
                name: 'test',
                type: 'string',
                desc: 'test argument',
                opt: false,
            })
    )

    it('no argument', () => {
        const arg = convertArguments([])
        expect(arg.length).toBe(0)
    })

    it('single argument', () => {
        const arg = convertArguments([argDefinition])
        expect(arg.length).toBe(1)
        expect(arg[0]).toMatchObject(argDefinition)
        expect(arg[0].last).toBeTruthy()
        assertSetIArgumentTestValue(arg[0], stringArgumentType)
    })

    it('multiple argument', () => {
        const argDefs = [
            Object.assign({}, argDefinition),
            Object.assign({}, argDefinition),
            Object.assign({}, argDefinition),
        ]
        argDefs[0].name = 'test1'
        argDefs[1].name = 'test2'
        argDefs[2].name = 'test3'
        argDefs[0].type = 'double?'

        const args = convertArguments(argDefs)
        expect(args.length).toBe(argDefs.length)
        expect(args[0]).toMatchObject(argDefs[0])
        expect(args[0].last).toBeFalsy()
        assertSetIArgumentTestValue(args[0], doubleArgumentType)
        expect(args[1]).toMatchObject(argDefs[1])
        expect(args[1].last).toBeFalsy()
        assertSetIArgumentTestValue(args[1], stringArgumentType)
        expect(args[2]).toMatchObject(argDefs[2])
        expect(args[2].last).toBeTruthy()
        assertSetIArgumentTestValue(args[2], stringArgumentType)
    })
})
