# trim

Trims whitespace from both ends of a string.

#### Syntax

```
trim(input)
```

or chained:

```
<string>.trim()
```

#### Arguments

* **input** (`string`, optional when chained) - The string to trim.

#### Examples

**Function call**

```
trim("  hello  ")
// "hello"
```

**Chained usage**

```
"  hello world  ".trim()
// "hello world"
```

**CLI usage**

```bash
$ echo '{"value": "  spaced  "}' | dasel -i json 'value.trim()'
spaced
```
