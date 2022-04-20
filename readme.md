[![CI](https://github.com/aoisupersix/B5G/actions/workflows/ci.yml/badge.svg)](https://github.com/aoisupersix/B5G/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/aoisupersix/B5G/badge.svg?branch=master)](https://coveralls.io/github/aoisupersix/B5G?branch=master)
[![npm version](https://badge.fury.io/js/b5g.svg)](https://badge.fury.io/js/b5g)

# B5G

Bve5 の構文定義ファイルを Mustache のテンプレートファイルに食わせてドキュメントを生成するオレオレ npm パッケージです。
OpenAPI みたいに YAML 定義から様々な定義を自動生成したかったので。

# Installation

```sh
npm install -g b5g
```

# Usage

## CLI

```
b5g --help

Usage: b5g [options] [command]

generate artifact documents with embedded BveTranSim syntax definitions from template file.

Options:
  -h, --help                               display help for command

Commands:
  render [options] <source> [destination]  render to the template file.
  generate [options] [destination]         generate MapData.
  help [command]                           display help for command
```

### Rendering a template file

```sh
b5g render ./template.mst ./rendered.txt
```

### Generate custom syntax definition

```sh
b5g generate -d ./definition.yml ./syntaxdefinition.json
```

## Program

```js
import { render, getDefaultMapData } from 'b5g'
import fs from 'fs'

getDefaultMapData()
    .then((map) => {
        fs.readFileSync('./templatefile.mst', 'utf-8')
        const rendered = render(template, mapData)
        fs.writeFile('./renderedfile.txt', rendered)
    })
    .catch((err) => console.error(err))
```

# Grammar Documentation & Sample

-   Documentation: https://aoisupersix.github.io/B5G
-   JSON Schema: https://aoisupersix.github.io/B5G/json-schema.json
-   Generated JSON file: https://aoisupersix.github.io/B5G/generated.json
