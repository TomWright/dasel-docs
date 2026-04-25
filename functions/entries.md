# entries

Converts a map into an array of `{key, value}` objects. This is useful for iterating over map entries or transforming maps.

#### Syntax

```
<map>.entries()
```

#### Arguments

None. This function is chained only and takes no arguments.

#### Examples

```
{"a": 1, "b": 2}.entries()
// [{"key": "a", "value": 1}, {"key": "b", "value": 2}]
```

#### Notes

* Each entry object has a `key` (string) and `value` field.
* Use `fromEntries` to convert back from an array of `{key, value}` objects into a map.
