# split

Splits a string by a separator into an array of strings.

#### Syntax

```
split(separator, input)
```

or chained:

```
<string>.split(separator)
```

#### Arguments

* **separator** (`string`) - The delimiter to split on.
* **input** (`string`, optional when chained) - The string to split.

#### Examples

**Chained usage**

```
"a,b,c".split(",")
// ["a", "b", "c"]
```

**Function call**

```
split("-", "one-two-three")
// ["one", "two", "three"]
```

**CLI usage — split a CSV-like field**

```bash
$ echo '{"tags": "go,cli,json"}' | dasel -i json 'tags.split(",")'
[
    "go",
    "cli",
    "json"
]
```

**Chained with other functions**

```
"hello world".split(" ").first()
// "hello"
```
