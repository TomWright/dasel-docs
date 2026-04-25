# toUpper

Converts a string to uppercase.

#### Syntax

```
toUpper(input)
```

or chained:

```
<string>.toUpper()
```

#### Arguments

* **input** (`string`, optional when chained) - The string to convert.

#### Examples

**Function call**

```
toUpper("hello")
// "HELLO"
```

**Chained usage**

```
"hello world".toUpper()
// "HELLO WORLD"
```

**CLI usage**

```bash
$ echo '{"status": "active"}' | dasel -i json 'status.toUpper()'
ACTIVE
```

**Transform all values in an array**

```
["alice", "bob"].map(toUpper($this))
// ["ALICE", "BOB"]
```
