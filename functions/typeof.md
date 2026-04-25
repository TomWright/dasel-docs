# typeOf

Returns the type of the given argument as a string.

#### Syntax

```
typeOf(value)
```

#### Arguments

* **value** - Any value.

#### Examples

**Basic types**

```
typeOf("") // "string"
typeOf(1) // "int"
typeOf(1.1) // "float"
typeOf(1f) // "float"
typeOf(true) // "bool"
typeOf(null) // "null"
typeOf([]) // "array"
typeOf({}) // "map"
```

**CLI usage — inspect a field's type**

```bash
$ echo '{"value": 42}' | dasel -i json 'typeOf(value)'
int
```

**Useful in conditionals**

```
if (typeOf($this) == "string") { toLower($this) } else { $this }
```
