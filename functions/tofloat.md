# toFloat

Converts the given argument to a float.

Does not support maps or arrays at this time.

#### Syntax

```
toFloat(value)
```

#### Arguments

* **value** - The value to convert. Supported types: string, int, float, bool.

#### Examples

**Basic conversions**

```
toFloat("1") // 1.0
toFloat("1.2") // 1.2
toFloat(123) // 123.0
toFloat(123.4) // 123.4
toFloat(false) // 0.0
toFloat(true) // 1.0
```

**CLI usage**

```bash
$ echo '{"ratio": "3.14"}' | dasel -i json 'toFloat(ratio)'
3.14
```
