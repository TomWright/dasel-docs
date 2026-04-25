# toInt

Converts the given argument to an integer.

Does not support maps or arrays at this time.

#### Syntax

```
toInt(value)
```

#### Arguments

* **value** - The value to convert. Supported types: string, int, float, bool.

#### Examples

**Basic conversions**

```
toInt("1") // 1
toInt("1.2") // 1
toInt(123) // 123
toInt(123.4) // 123
toInt(false) // 0
toInt(true) // 1
```

**CLI usage — convert a string port to an integer**

```bash
$ echo '{"port": "8080"}' | dasel -i json 'toInt(port)'
8080
```

**Useful for arithmetic on string values**

```
toInt("10") + toInt("20")
// 30
```
