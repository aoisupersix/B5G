import fs from 'fs'
import { getDefaultMapData } from './default-map-data'

// mapDataのテスト出力用
getDefaultMapData()
    .then((mapData) => {
        console.log('default map definition load successful.')
        console.log(JSON.stringify(mapData, null, '\t'))
        // 引数にパスが指定されている場合はそのパスに生成結果を出力
        if (process.argv[2]) {
            fs.writeFileSync(
                process.argv[2],
                JSON.stringify(mapData, undefined, '  ')
            )
            console.log(`Map data was output to ${process.argv[2]}`)
        }
    })
    .catch((error) => console.error(error))
