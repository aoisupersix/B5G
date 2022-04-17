[![CI](https://github.com/aoisupersix/B5G/actions/workflows/ci.yml/badge.svg)](https://github.com/aoisupersix/B5G/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/aoisupersix/B5G/badge.svg?branch=master)](https://coveralls.io/github/aoisupersix/B5G?branch=master)
[![npm version](https://badge.fury.io/js/b5g.svg)](https://badge.fury.io/js/b5g)

B5G
===

Bve5の構文定義ファイルをMustacheのテンプレートファイルに食わせてドキュメントを生成するオレオレnpmパッケージです。
OpenAPIみたいにYAML定義から様々な定義を自動生成したかったので。

# Installation

```sh
npm install b5g
```

# Usage

```js
import { render, getDefaultMapData } from 'b5g';
import fs from 'fs';

getDefaultMapData().then(map => {
    fs.readFileSync('./templatefile.mst', 'utf-8');
    const rendered = render(template, mapData);
    fs.writeFile('./renderedfile.txt', rendered);
}).catch(err => console.error(err));
```

# Grammar Definition

[src/mapgrammar.yaml](https://github.com/aoisupersix/B5G/blob/master/src/mapgrammar.yaml)