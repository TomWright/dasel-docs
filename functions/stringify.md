# stringify

Serializes a structured value into a format string. This is the inverse of `parse`.

#### Syntax

```
stringify(format, value)
```

or chained:

```
<value>.stringify(format)
```

#### Arguments

* **format** (`string`) - The output format (`"json"`, `"yaml"`, `"toml"`, etc).
* **value** (optional when chained) - The structured value to serialize.

#### Notes

`stringify` always produces compact output (no indentation or extra whitespace). This is the expected behavior when embedding a serialized value in a query.

#### Examples

**Serialize to JSON**

```
stringify("json", {"a": 1, "b": 2})
```

Output:

```json
{"a":1,"b":2}
```

**Chained usage**

```
{"name": "Tom"}.stringify("yaml")
```

**CLI usage — convert a sub-object to a JSON string**

```bash
$ echo '{"config": {"host": "localhost", "port": 8080}}' \
  | dasel -i json 'config.stringify("json")'
```

**Roundtrip with parse**

```
parse("json", stringify("json", {"a": 1})).a
// 1
```
