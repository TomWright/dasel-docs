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

#### Examples

```
stringify("json", {"a": 1})
```

**Output:**

```
{
    "a": 1
}
```

**Chained usage:**

```
{"name": "Tom"}.stringify("json")
```

**Roundtrip with parse:**

```
parse("json", stringify("json", {"a": 1})).a
// 1
```
