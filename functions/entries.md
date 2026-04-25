# entries

Converts a map into an array of `{key, value}` objects. This is useful for iterating over map entries or transforming maps.

#### Syntax

```
<map>.entries()
```

#### Arguments

None. This function is chained only and takes no arguments.

#### Examples

**Basic usage**

```
{"a": 1, "b": 2}.entries()
// [{"key": "a", "value": 1}, {"key": "b", "value": 2}]
```

**CLI usage — list all keys and values**

```bash
$ echo '{"host": "localhost", "port": 8080}' | dasel -i json 'entries()'
[
    {
        "key": "host",
        "value": "localhost"
    },
    {
        "key": "port",
        "value": 8080
    }
]
```

**Transform map keys — uppercase all keys via roundtrip**

```
{"name": "Tom", "age": 30}
  .entries()
  .map({"key": toUpper(key), "value": value})
  .fromEntries()
// {"NAME": "Tom", "AGE": 30}
```

#### Notes

* Each entry object has a `key` (string) and `value` field.
* Use `fromEntries` to convert back from entries into a map.
