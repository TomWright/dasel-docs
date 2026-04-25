# toString

Converts the given argument to a string.

Does not support maps or arrays at this time.

#### Syntax

```
toString(value)
```

#### Arguments

* **value** - The value to convert. Supported types: string, int, float, bool.

#### Examples

**Basic conversions**

```
toString("hello") // "hello"
toString(123) // "123"
toString(123.4) // "123.4"
toString(false) // "false"
toString(true) // "true"
```

**CLI usage — convert a number to a string**

```bash
$ echo '{"port": 8080}' | dasel -i json 'toString(port)'
8080
```

**Useful for string concatenation**

```
"port:" + toString(8080)
// "port:8080"
```
