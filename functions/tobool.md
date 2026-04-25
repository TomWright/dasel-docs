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

```
toBool("true")   // true
toBool("yes")    // true
toBool("false")  // false
toBool(1)        // true
toBool(0)        // false
toBool(null)     // false
```
