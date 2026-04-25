# endsWith

Checks if a string ends with a given suffix. Returns a boolean.

#### Syntax

```
endsWith(input, suffix)
```

or chained:

```
<string>.endsWith(suffix)
```

#### Arguments

* **input** (`string`, optional when chained) - The string to check.
* **suffix** (`string`) - The suffix to look for.

#### Examples

**Basic checks**

```
endsWith("hello world", "world")
// true
```

```
"foobar".endsWith("foo")
// false
```

**CLI usage**

```bash
$ echo '{"file": "photo.png"}' | dasel -i json 'file.endsWith(".png")'
true
```

**Use inside a filter**

```
["file.go", "file.md", "main.go"].filter(endsWith($this, ".go"))
// ["file.go", "main.go"]
```
