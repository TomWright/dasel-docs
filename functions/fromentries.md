# fromEntries

Converts an array of `{key, value}` objects into a map. This is the inverse of `entries`.

#### Syntax

```
fromEntries(array)
```

or chained:

```
<array>.fromEntries()
```

#### Arguments

* **array** (`array`, optional when chained) - An array of objects, each with a `key` (string) and `value` field.

#### Examples

```
fromEntries([{"key": "a", "value": 1}, {"key": "b", "value": 2}])
// {"a": 1, "b": 2}
```

```
[{"key": "name", "value": "Tom"}].fromEntries()
// {"name": "Tom"}
```
