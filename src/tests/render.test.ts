import { MapData } from '../map-data/map-data'
import { render } from '../render'

describe('render', () => {
    let mapData: MapData

    beforeEach(() => {
        mapData = {
            states: [],
            elems: ['ElementA', 'ElementBBB'],
            subElems: [],
            funcs: [],
        }
    })

    it('use handlebars expression', () => {
        const template = `
{{#each elems}}
ElementName:{{this}}
{{/each}}`
        const rendered = render(template, mapData)
        expect(rendered).toBe(`
ElementName:ElementA
ElementName:ElementBBB
`)
    })

    it('use handlebars helper expression', () => {
        const template = `
{{#each elems}}
ElementLength:{{length this}}
{{/each}}`
        const rendered = render(template, mapData)
        expect(rendered).toBe(`
ElementLength:8
ElementLength:10
`)
    })
})
