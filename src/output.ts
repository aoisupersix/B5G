import fs from 'fs'
import { getDefaultMapData } from './default-map-data'
import { render } from './index'

// mapDataのテスト出力用
getDefaultMapData()
    .then((mapData) => {
        const template = fs.readFileSync('template.mst', {
            encoding: 'utf-8',
        })
        // fs.writeFileSync('map.json', JSON.stringify(mapData))
        const rendered = render(template, mapData)
        fs.writeFileSync('rendered.ts', rendered)
    })
    .catch((error) => console.error(error))
