# toBool

Converts a value to a boolean.

#### Syntax

```
toBool(value)
```

#### Arguments

* **value** - The value to convert. Supported types and conversions:
  * **bool** - returned as-is
  * **string** - `"true"`, `"1"`, `"yes"` become `true`; `"false"`, `"0"`, `"no"`, `""` become `false`
  * **int** - `0` is `false`, any other value is `true`
  * **float** - `0` is `false`, any other value is `true`
  * **null** - becomes `false`

#### Examples

**String conversions**

```
toBool("true")  // true
toBool("yes")   // true
toBool("1")     // true
toBool("false") // false
toBool("no")    // false
toBool("0")     // false
toBool("")      // false
```

**Numeric conversions**

```
toBool(1)   // true
toBool(0)   // false
toBool(3.14) // true
```

**Null**

```
toBool(null) // false
```

**CLI usage — convert a string flag to boolean**

```bash
$ echo '{"enabled": "yes"}' | dasel -i json 'toBool(enabled)'
true
```
