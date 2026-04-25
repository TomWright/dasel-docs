# toLower

Converts a string to lowercase.

#### Syntax

```
toLower(input)
```

or chained:

```
<string>.toLower()
```

#### Arguments

* **input** (`string`, optional when chained) - The string to convert.

#### Examples

**Function call**

```
toLower("HELLO")
// "hello"
```

**Chained usage**

```
"HELLO WORLD".toLower()
// "hello world"
```

**CLI usage**

```bash
$ echo '{"name": "TOM"}' | dasel -i json 'name.toLower()'
tom
```

**Transform all values in an array**

```
["Alice", "BOB", "Charlie"].map(toLower($this))
// ["alice", "bob", "charlie"]
```
