# values

Returns the values of a map as an array. Order matches the key order of the map.

#### Syntax

```
<map>.values()
```

#### Arguments

None. This function is chained only and takes no arguments.

#### Examples

**Basic usage**

```
{"a": 1, "b": 2, "c": 3}.values()
// [1, 2, 3]
```

**CLI usage**

```bash
$ echo '{"name": "Tom", "age": 30}' | dasel -i json 'values()'
[
    "Tom",
    30
]
```

**Chained with other functions**

```
{"x": 10, "y": 20, "z": 30}.values().sum($this...)
// 60
```
