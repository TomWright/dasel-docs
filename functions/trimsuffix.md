# trimSuffix

Removes a suffix from the end of a string. If the string does not end with the suffix, it is returned unchanged.

#### Syntax

```
trimSuffix(input, suffix)
```

or chained:

```
<string>.trimSuffix(suffix)
```

#### Arguments

* **input** (`string`, optional when chained) - The string to trim.
* **suffix** (`string`) - The suffix to remove.

#### Examples

**Function call**

```
trimSuffix("hello world", " world")
// "hello"
```

**Chained usage**

```
"foobar".trimSuffix("bar")
// "foo"
```

**No match — string unchanged**

```
"foobar".trimSuffix("xyz")
// "foobar"
```

**CLI usage — strip a file extension**

```bash
$ echo '{"file": "config.json"}' | dasel -i json 'file.trimSuffix(".json")'
config
```
