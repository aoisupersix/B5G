import { execParseSingleStatement, assertMapAstNode } from './util'
import * as ast from '@bvetree/ast/src/map-v2'

describe('MapV2Parser', () => {
  describe('#parse_map_function', () => {
    it('parse Curve.Setgauge(Value)', () => {
      const statement = execParseSingleStatement(
        `Curve.Setgauge(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        20,
        `Curve.Setgauge(1.0);`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('Setgauge')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Gauge.Set(Value)', () => {
      const statement = execParseSingleStatement(
        `Gauge.Set(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        15,
        `Gauge.Set(1.0);`
      )
      expect(statement.element).toBe('Gauge')
      expect(statement.function).toBe('Set')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Curve.Gauge(Value)', () => {
      const statement = execParseSingleStatement(
        `Curve.Gauge(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        17,
        `Curve.Gauge(1.0);`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('Gauge')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Curve.Setcenter(X)', () => {
      const statement = execParseSingleStatement(
        `Curve.Setcenter(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        21,
        `Curve.Setcenter(1.0);`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('Setcenter')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Curve.Setfunction(Id)', () => {
      const statement = execParseSingleStatement(
        `Curve.Setfunction(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        23,
        `Curve.Setfunction(1.0);`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('Setfunction')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Curve.Begintransition()', () => {
      const statement = execParseSingleStatement(
        `Curve.Begintransition();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        24,
        `Curve.Begintransition();`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('Begintransition')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Curve.Begin(Radius)', () => {
      const statement = execParseSingleStatement(
        `Curve.Begin(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        20,
        `Curve.Begin(1.0);`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('Begin')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Curve.Begin(Radius,Cant)', () => {
      const statement = execParseSingleStatement(
        `Curve.Begin(1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        20,
        `Curve.Begin(1.0,1.0);`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('Begin')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Curve.Begincircular(Radius,Cant)', () => {
      const statement = execParseSingleStatement(
        `Curve.Begincircular(1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        28,
        `Curve.Begincircular(1.0,1.0);`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('Begincircular')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Curve.End()', () => {
      const statement = execParseSingleStatement(
        `Curve.End();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        12,
        `Curve.End();`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('End')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Curve.Interpolate()', () => {
      const statement = execParseSingleStatement(
        `Curve.Interpolate();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        26,
        `Curve.Interpolate();`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Curve.Interpolate(Radius)', () => {
      const statement = execParseSingleStatement(
        `Curve.Interpolate(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        26,
        `Curve.Interpolate(1.0);`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Curve.Interpolate(Radius,Cant)', () => {
      const statement = execParseSingleStatement(
        `Curve.Interpolate(1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        26,
        `Curve.Interpolate(1.0,1.0);`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Curve.Change(Radius)', () => {
      const statement = execParseSingleStatement(
        `Curve.Change(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        18,
        `Curve.Change(1.0);`
      )
      expect(statement.element).toBe('Curve')
      expect(statement.function).toBe('Change')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Gradient.Begintransition()', () => {
      const statement = execParseSingleStatement(
        `Gradient.Begintransition();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        27,
        `Gradient.Begintransition();`
      )
      expect(statement.element).toBe('Gradient')
      expect(statement.function).toBe('Begintransition')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Gradient.Begin(Gradient)', () => {
      const statement = execParseSingleStatement(
        `Gradient.Begin(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        20,
        `Gradient.Begin(1.0);`
      )
      expect(statement.element).toBe('Gradient')
      expect(statement.function).toBe('Begin')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Gradient.Beginconst(Gradient)', () => {
      const statement = execParseSingleStatement(
        `Gradient.Beginconst(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        25,
        `Gradient.Beginconst(1.0);`
      )
      expect(statement.element).toBe('Gradient')
      expect(statement.function).toBe('Beginconst')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Gradient.End()', () => {
      const statement = execParseSingleStatement(
        `Gradient.End();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        15,
        `Gradient.End();`
      )
      expect(statement.element).toBe('Gradient')
      expect(statement.function).toBe('End')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Gradient.Interpolate()', () => {
      const statement = execParseSingleStatement(
        `Gradient.Interpolate();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        26,
        `Gradient.Interpolate();`
      )
      expect(statement.element).toBe('Gradient')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Gradient.Interpolate(Gradient)', () => {
      const statement = execParseSingleStatement(
        `Gradient.Interpolate(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        26,
        `Gradient.Interpolate(1.0);`
      )
      expect(statement.element).toBe('Gradient')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].X.Interpolate()', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].X.Interpolate();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        39,
        `Track['TrackKey'].X.Interpolate();`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].X.Interpolate(X)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].X.Interpolate(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        39,
        `Track['TrackKey'].X.Interpolate(1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].X.Interpolate(X,Radius)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].X.Interpolate(1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        39,
        `Track['TrackKey'].X.Interpolate(1.0,1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Y.Interpolate()', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Y.Interpolate();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        39,
        `Track['TrackKey'].Y.Interpolate();`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Y.Interpolate(Y)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Y.Interpolate(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        39,
        `Track['TrackKey'].Y.Interpolate(1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Y.Interpolate(Y,Radius)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Y.Interpolate(1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        39,
        `Track['TrackKey'].Y.Interpolate(1.0,1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Position(X,Y)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Position(1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        40,
        `Track['TrackKey'].Position(1.0,1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Position')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Position(X,Y,RadiusH)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Position(1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        40,
        `Track['TrackKey'].Position(1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Position')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Position(Y,Y,RadiusV)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Position(1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        40,
        `Track['TrackKey'].Position(1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Position')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Cant.Setgauge(Gauge)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Cant.Setgauge(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        36,
        `Track['TrackKey'].Cant.Setgauge(1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Setgauge')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Gauge(Gauge)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Gauge(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        28,
        `Track['TrackKey'].Gauge(1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Gauge')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Cant.Setcenter(X)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Cant.Setcenter(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        37,
        `Track['TrackKey'].Cant.Setcenter(1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Setcenter')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Cant.Setfunction(Id)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Cant.Setfunction(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        39,
        `Track['TrackKey'].Cant.Setfunction(1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Setfunction')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Cant.Begintransition()', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Cant.Begintransition();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        40,
        `Track['TrackKey'].Cant.Begintransition();`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Begintransition')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Cant.Begin(Cant)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Cant.Begin(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        33,
        `Track['TrackKey'].Cant.Begin(1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Begin')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Cant.End()', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Cant.End();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        28,
        `Track['TrackKey'].Cant.End();`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('End')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Cant.Interpolate()', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Cant.Interpolate();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        39,
        `Track['TrackKey'].Cant.Interpolate();`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Cant.Interpolate(Cant)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Cant.Interpolate(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKeyAndSubelement,
        1,
        0,
        1,
        39,
        `Track['TrackKey'].Cant.Interpolate(1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Track[TrackKey].Cant(Cant)', () => {
      const statement = execParseSingleStatement(
        `Track['TrackKey'].Cant(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        27,
        `Track['TrackKey'].Cant(1.0);`
      )
      expect(statement.element).toBe('Track')
      expect(statement.function).toBe('Cant')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Structure.Load(FilePath)', () => {
      const statement = execParseSingleStatement(
        `Structure.Load(&#x27;string_test_value&#x27;);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        36,
        `Structure.Load(&#x27;string_test_value&#x27;);`
      )
      expect(statement.element).toBe('Structure')
      expect(statement.function).toBe('Load')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Structure[StructureKey].Put(TrackKey,X,Y,Z,RX,RY,RZ,Tilt,Span)', () => {
      const statement = execParseSingleStatement(
        `Structure['StructureKey'].Put(&#x27;string_test_value&#x27;,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        74,
        `Structure['StructureKey'].Put(&#x27;string_test_value&#x27;,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Structure')
      expect(statement.function).toBe('Put')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Structure[StructureKey].Put0(TrackKey,Tilt,Span)', () => {
      const statement = execParseSingleStatement(
        `Structure['StructureKey'].Put0(&#x27;string_test_value&#x27;,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        57,
        `Structure['StructureKey'].Put0(&#x27;string_test_value&#x27;,1.0,1.0);`
      )
      expect(statement.element).toBe('Structure')
      expect(statement.function).toBe('Put0')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Structure[StructureKey].Putbetween(TrackKey1,TrackKey2)', () => {
      const statement = execParseSingleStatement(
        `Structure['StructureKey'].Putbetween(&#x27;string_test_value&#x27;,&#x27;string_test_value&#x27;);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        79,
        `Structure['StructureKey'].Putbetween(&#x27;string_test_value&#x27;,&#x27;string_test_value&#x27;);`
      )
      expect(statement.element).toBe('Structure')
      expect(statement.function).toBe('Putbetween')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Structure[StructureKey].Putbetween(TrackKey1,TrackKey2,Flag)', () => {
      const statement = execParseSingleStatement(
        `Structure['StructureKey'].Putbetween(&#x27;string_test_value&#x27;,&#x27;string_test_value&#x27;,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        79,
        `Structure['StructureKey'].Putbetween(&#x27;string_test_value&#x27;,&#x27;string_test_value&#x27;,1.0);`
      )
      expect(statement.element).toBe('Structure')
      expect(statement.function).toBe('Putbetween')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Repeater[RepeaterKey].Begin(TrackKey,X,Y,Z,RX,RY,RZ,Tilt,Span,Interval,StructureKey)', () => {
      const statement = execParseSingleStatement(
        `Repeater['RepeaterKey'].Begin(&#x27;string_test_value&#x27;,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        -968,
        `Repeater['RepeaterKey'].Begin(&#x27;string_test_value&#x27;,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,);`
      )
      expect(statement.element).toBe('Repeater')
      expect(statement.function).toBe('Begin')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Repeater[RepeaterKey].Begin0(TrackKey,Tilt,Span,Interval,StructureKey)', () => {
      const statement = execParseSingleStatement(
        `Repeater['RepeaterKey'].Begin0(&#x27;string_test_value&#x27;,1.0,1.0,1.0,);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        -967,
        `Repeater['RepeaterKey'].Begin0(&#x27;string_test_value&#x27;,1.0,1.0,1.0,);`
      )
      expect(statement.element).toBe('Repeater')
      expect(statement.function).toBe('Begin0')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Repeater[RepeaterKey].End()', () => {
      const statement = execParseSingleStatement(
        `Repeater['RepeaterKey'].End();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        29,
        `Repeater['RepeaterKey'].End();`
      )
      expect(statement.element).toBe('Repeater')
      expect(statement.function).toBe('End')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Background.Change(StructureKey)', () => {
      const statement = execParseSingleStatement(
        `Background.Change(&#x27;string_test_value&#x27;);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        39,
        `Background.Change(&#x27;string_test_value&#x27;);`
      )
      expect(statement.element).toBe('Background')
      expect(statement.function).toBe('Change')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Station.Load(FilePath)', () => {
      const statement = execParseSingleStatement(
        `Station.Load(&#x27;string_test_value&#x27;);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        34,
        `Station.Load(&#x27;string_test_value&#x27;);`
      )
      expect(statement.element).toBe('Station')
      expect(statement.function).toBe('Load')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Station[StationKey].Put(Door,Margin1,Margin2)', () => {
      const statement = execParseSingleStatement(
        `Station['StationKey'].Put(1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        36,
        `Station['StationKey'].Put(1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Station')
      expect(statement.function).toBe('Put')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Section.Begin(Signal)', () => {
      const statement = execParseSingleStatement(
        `Section.Begin();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        -983,
        `Section.Begin();`
      )
      expect(statement.element).toBe('Section')
      expect(statement.function).toBe('Begin')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Section.Beginnew(Signal)', () => {
      const statement = execParseSingleStatement(
        `Section.Beginnew();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        -980,
        `Section.Beginnew();`
      )
      expect(statement.element).toBe('Section')
      expect(statement.function).toBe('Beginnew')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Section.Setspeedlimit(V)', () => {
      const statement = execParseSingleStatement(
        `Section.Setspeedlimit();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        -975,
        `Section.Setspeedlimit();`
      )
      expect(statement.element).toBe('Section')
      expect(statement.function).toBe('Setspeedlimit')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Signal.Speedlimit(V)', () => {
      const statement = execParseSingleStatement(
        `Signal.Speedlimit();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        -979,
        `Signal.Speedlimit();`
      )
      expect(statement.element).toBe('Signal')
      expect(statement.function).toBe('Speedlimit')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Speedlimit.Setsignal(V)', () => {
      const statement = execParseSingleStatement(
        `Speedlimit.Setsignal();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        -976,
        `Speedlimit.Setsignal();`
      )
      expect(statement.element).toBe('Speedlimit')
      expect(statement.function).toBe('Setsignal')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Signal.Load(FilePath)', () => {
      const statement = execParseSingleStatement(
        `Signal.Load(&#x27;string_test_value&#x27;);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        33,
        `Signal.Load(&#x27;string_test_value&#x27;);`
      )
      expect(statement.element).toBe('Signal')
      expect(statement.function).toBe('Load')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Signal[SignalAspectKey].Put(Section,TrackKey,X,Y)', () => {
      const statement = execParseSingleStatement(
        `Signal['SignalAspectKey'].Put(1.0,&#x27;string_test_value&#x27;,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        77,
        `Signal['SignalAspectKey'].Put(1.0,&#x27;string_test_value&#x27;,1.0,1.0);`
      )
      expect(statement.element).toBe('Signal')
      expect(statement.function).toBe('Put')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Signal[SignalAspectKey].Put(Section,TrackKey,X,Y,Z,RX,RY,RZ,Tilt,Span)', () => {
      const statement = execParseSingleStatement(
        `Signal['SignalAspectKey'].Put(1.0,&#x27;string_test_value&#x27;,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        77,
        `Signal['SignalAspectKey'].Put(1.0,&#x27;string_test_value&#x27;,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Signal')
      expect(statement.function).toBe('Put')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Beacon.Put(Type,Section,Senddata)', () => {
      const statement = execParseSingleStatement(
        `Beacon.Put(1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        22,
        `Beacon.Put(1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Beacon')
      expect(statement.function).toBe('Put')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Speedlimit.Begin(V)', () => {
      const statement = execParseSingleStatement(
        `Speedlimit.Begin(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        22,
        `Speedlimit.Begin(1.0);`
      )
      expect(statement.element).toBe('Speedlimit')
      expect(statement.function).toBe('Begin')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Speedlimit.End()', () => {
      const statement = execParseSingleStatement(
        `Speedlimit.End();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        17,
        `Speedlimit.End();`
      )
      expect(statement.element).toBe('Speedlimit')
      expect(statement.function).toBe('End')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Pretrain.Pass(Time)', () => {
      const statement = execParseSingleStatement(
        `Pretrain.Pass(&#x27;string_test_value&#x27;);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        38,
        `Pretrain.Pass(&#x27;string_test_value&#x27;);`
      )
      expect(statement.element).toBe('Pretrain')
      expect(statement.function).toBe('Pass')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Pretrain.Pass(Second)', () => {
      const statement = execParseSingleStatement(
        `Pretrain.Pass(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        38,
        `Pretrain.Pass(1.0);`
      )
      expect(statement.element).toBe('Pretrain')
      expect(statement.function).toBe('Pass')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Light.Ambient(Red,Green,Blue)', () => {
      const statement = execParseSingleStatement(
        `Light.Ambient(1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        25,
        `Light.Ambient(1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Light')
      expect(statement.function).toBe('Ambient')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Light.Diffuse(Red,Green,Blue)', () => {
      const statement = execParseSingleStatement(
        `Light.Diffuse(1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        25,
        `Light.Diffuse(1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Light')
      expect(statement.function).toBe('Diffuse')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Light.Direction(Pitch,Yaw)', () => {
      const statement = execParseSingleStatement(
        `Light.Direction(1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        24,
        `Light.Direction(1.0,1.0);`
      )
      expect(statement.element).toBe('Light')
      expect(statement.function).toBe('Direction')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Fog.Interpolate()', () => {
      const statement = execParseSingleStatement(
        `Fog.Interpolate();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        30,
        `Fog.Interpolate();`
      )
      expect(statement.element).toBe('Fog')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Fog.Interpolate(Density)', () => {
      const statement = execParseSingleStatement(
        `Fog.Interpolate(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        30,
        `Fog.Interpolate(1.0);`
      )
      expect(statement.element).toBe('Fog')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Fog.Interpolate(Density,Red,Green,Blue)', () => {
      const statement = execParseSingleStatement(
        `Fog.Interpolate(1.0,1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        30,
        `Fog.Interpolate(1.0,1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Fog')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Fog.Set(Density,Red,Green,Blue)', () => {
      const statement = execParseSingleStatement(
        `Fog.Set(1.0,1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        22,
        `Fog.Set(1.0,1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Fog')
      expect(statement.function).toBe('Set')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Drawdistance.Change(Value)', () => {
      const statement = execParseSingleStatement(
        `Drawdistance.Change(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        25,
        `Drawdistance.Change(1.0);`
      )
      expect(statement.element).toBe('Drawdistance')
      expect(statement.function).toBe('Change')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Cabilluminance.Interpolate()', () => {
      const statement = execParseSingleStatement(
        `Cabilluminance.Interpolate();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        32,
        `Cabilluminance.Interpolate();`
      )
      expect(statement.element).toBe('Cabilluminance')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Cabilluminance.Interpolate(Value)', () => {
      const statement = execParseSingleStatement(
        `Cabilluminance.Interpolate(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        32,
        `Cabilluminance.Interpolate(1.0);`
      )
      expect(statement.element).toBe('Cabilluminance')
      expect(statement.function).toBe('Interpolate')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Cabilluminance.Set(Value)', () => {
      const statement = execParseSingleStatement(
        `Cabilluminance.Set(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        24,
        `Cabilluminance.Set(1.0);`
      )
      expect(statement.element).toBe('Cabilluminance')
      expect(statement.function).toBe('Set')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Irregularity.Change(X,Y,R,LX,LY,LR)', () => {
      const statement = execParseSingleStatement(
        `Irregularity.Change(1.0,1.0,1.0,1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        40,
        `Irregularity.Change(1.0,1.0,1.0,1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Irregularity')
      expect(statement.function).toBe('Change')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Adhesion.Change(A)', () => {
      const statement = execParseSingleStatement(
        `Adhesion.Change(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        27,
        `Adhesion.Change(1.0);`
      )
      expect(statement.element).toBe('Adhesion')
      expect(statement.function).toBe('Change')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Adhesion.Change(A,B,C)', () => {
      const statement = execParseSingleStatement(
        `Adhesion.Change(1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        27,
        `Adhesion.Change(1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Adhesion')
      expect(statement.function).toBe('Change')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Sound.Load(FilePath)', () => {
      const statement = execParseSingleStatement(
        `Sound.Load(&#x27;string_test_value&#x27;);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        32,
        `Sound.Load(&#x27;string_test_value&#x27;);`
      )
      expect(statement.element).toBe('Sound')
      expect(statement.function).toBe('Load')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Sound[SoundKey].Play()', () => {
      const statement = execParseSingleStatement(
        `Sound['SoundKey'].Play();`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        24,
        `Sound['SoundKey'].Play();`
      )
      expect(statement.element).toBe('Sound')
      expect(statement.function).toBe('Play')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Sound3d.Load(FilePath)', () => {
      const statement = execParseSingleStatement(
        `Sound3d.Load(&#x27;string_test_value&#x27;);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        34,
        `Sound3d.Load(&#x27;string_test_value&#x27;);`
      )
      expect(statement.element).toBe('Sound3d')
      expect(statement.function).toBe('Load')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Sound3d[SoundKey].Put(X,Y)', () => {
      const statement = execParseSingleStatement(
        `Sound3d['SoundKey'].Put(1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        31,
        `Sound3d['SoundKey'].Put(1.0,1.0);`
      )
      expect(statement.element).toBe('Sound3d')
      expect(statement.function).toBe('Put')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Rollingnoise.Change(Index)', () => {
      const statement = execParseSingleStatement(
        `Rollingnoise.Change(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        25,
        `Rollingnoise.Change(1.0);`
      )
      expect(statement.element).toBe('Rollingnoise')
      expect(statement.function).toBe('Change')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Flangenoise.Change(Index)', () => {
      const statement = execParseSingleStatement(
        `Flangenoise.Change(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        24,
        `Flangenoise.Change(1.0);`
      )
      expect(statement.element).toBe('Flangenoise')
      expect(statement.function).toBe('Change')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Jointnoise.Play(Index)', () => {
      const statement = execParseSingleStatement(
        `Jointnoise.Play(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        21,
        `Jointnoise.Play(1.0);`
      )
      expect(statement.element).toBe('Jointnoise')
      expect(statement.function).toBe('Play')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Train.Add(TrainKey,FilePath)', () => {
      const statement = execParseSingleStatement(
        `Train.Add(&#x27;string_test_value&#x27;,&#x27;string_test_value&#x27;);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        72,
        `Train.Add(&#x27;string_test_value&#x27;,&#x27;string_test_value&#x27;);`
      )
      expect(statement.element).toBe('Train')
      expect(statement.function).toBe('Add')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Train.Add(TrainKey,FilePath,TrackKey,Direction)', () => {
      const statement = execParseSingleStatement(
        `Train.Add(&#x27;string_test_value&#x27;,&#x27;string_test_value&#x27;,&#x27;string_test_value&#x27;,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        72,
        `Train.Add(&#x27;string_test_value&#x27;,&#x27;string_test_value&#x27;,&#x27;string_test_value&#x27;,1.0);`
      )
      expect(statement.element).toBe('Train')
      expect(statement.function).toBe('Add')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Train[TrainKey].Load(FilePath,TrackKey,Direction)', () => {
      const statement = execParseSingleStatement(
        `Train['TrainKey'].Load(&#x27;string_test_value&#x27;,&#x27;string_test_value&#x27;,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        65,
        `Train['TrainKey'].Load(&#x27;string_test_value&#x27;,&#x27;string_test_value&#x27;,1.0);`
      )
      expect(statement.element).toBe('Train')
      expect(statement.function).toBe('Load')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Train[TrainKey].Enable(Time)', () => {
      const statement = execParseSingleStatement(
        `Train['TrainKey'].Enable(&#x27;string_test_value&#x27;);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        48,
        `Train['TrainKey'].Enable(&#x27;string_test_value&#x27;);`
      )
      expect(statement.element).toBe('Train')
      expect(statement.function).toBe('Enable')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Train[TrainKey].Enable(Second)', () => {
      const statement = execParseSingleStatement(
        `Train['TrainKey'].Enable(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        48,
        `Train['TrainKey'].Enable(1.0);`
      )
      expect(statement.element).toBe('Train')
      expect(statement.function).toBe('Enable')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Train[TrainKey].Stop(Decelerate,StopTime,Accelerate,Speed)', () => {
      const statement = execParseSingleStatement(
        `Train['TrainKey'].Stop(1.0,1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        36,
        `Train['TrainKey'].Stop(1.0,1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Train')
      expect(statement.function).toBe('Stop')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Train[TrainKey].Settrack(TrackKey,Direction)', () => {
      const statement = execParseSingleStatement(
        `Train['TrainKey'].Settrack(&#x27;string_test_value&#x27;,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunctionWithKey,
        1,
        0,
        1,
        50,
        `Train['TrainKey'].Settrack(&#x27;string_test_value&#x27;,1.0);`
      )
      expect(statement.element).toBe('Train')
      expect(statement.function).toBe('Settrack')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Legacy.Fog(Fogstart,Fogend,red,green,blue)', () => {
      const statement = execParseSingleStatement(
        `Legacy.Fog(1.0,1.0,1.0,1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        28,
        `Legacy.Fog(1.0,1.0,1.0,1.0,1.0);`
      )
      expect(statement.element).toBe('Legacy')
      expect(statement.function).toBe('Fog')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Legacy.Curve(radius,cant)', () => {
      const statement = execParseSingleStatement(
        `Legacy.Curve(1.0,1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        21,
        `Legacy.Curve(1.0,1.0);`
      )
      expect(statement.element).toBe('Legacy')
      expect(statement.function).toBe('Curve')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Legacy.Pitch(rate)', () => {
      const statement = execParseSingleStatement(
        `Legacy.Pitch(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        18,
        `Legacy.Pitch(1.0);`
      )
      expect(statement.element).toBe('Legacy')
      expect(statement.function).toBe('Pitch')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
    it('parse Legacy.Turn(slope)', () => {
      const statement = execParseSingleStatement(
        `Legacy.Turn(1.0);`
      ) as ast.MapFunctionWithKeyNode
      assertMapAstNode(
        statement,
        ast.NodeType.MapFunction,
        1,
        0,
        1,
        17,
        `Legacy.Turn(1.0);`
      )
      expect(statement.element).toBe('Legacy')
      expect(statement.function).toBe('Turn')
      expect(statement.arguments.length).toBe(2)

      const key = statement.key as ast.ValueNode
      assertMapAstNode(key, ast.NodeType.String, 1, 6, 1, 11, `'key'`)
      expect(key.value).toBe('key')

      const x = statement.arguments[0] as ast.ValueNode
      assertMapAstNode(x, ast.NodeType.Number, 1, 22, 1, 23, '0')
      expect(x.value).toBe('0')

      const y = statement.arguments[1] as ast.ValueNode
      assertMapAstNode(y, ast.NodeType.Number, 1, 25, 1, 26, '1')
      expect(y.value).toBe('1')
    })
  })
})
