# mapValues

The `mapValues` function transforms all values of a map/object while preserving its keys. It is the map/object counterpart to [`map`](map.md), which operates on arrays.

#### Syntax

```
<object>.mapValues(expr)
```

#### Arguments

* **expr** - An expression evaluated against each value. Use `$this` to refer to the current value.

#### Examples

**Double all values**

```
{"a": 1, "b": 2, "c": 3}.mapValues($this * 2)
// {"a": 2, "b": 4, "c": 6}
```

**Boolean expression**

```
{"a": 3, "b": 8}.mapValues($this > 5)
// {"a": false, "b": true}
```

**Transform strings**

```
{"x": "hello", "y": "world"}.mapValues(toUpper())
// {"x": "HELLO", "y": "WORLD"}
```

**CLI usage**

```bash
$ echo '{"a":1,"b":2}' | dasel 'mapValues($this * 2)'
{
    "a": 2,
    "b": 4
}
```

**Chained with property access**

```
{"a": 1, "b": 2}.mapValues($this + 10).a
// 11
```
