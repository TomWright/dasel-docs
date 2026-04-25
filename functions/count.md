# count

Counts the number of elements in an array that match the given predicate. This is an expression — the predicate is evaluated against each element using `$this` to refer to the current element.

#### Syntax

```
<array>.count(predicate)
```

#### Arguments

* **predicate** - A boolean expression evaluated against each element. Use `$this` to refer to the current element.

#### Examples

**Count numbers above a threshold**

```
[1, 2, 3, 4, 5].count($this > 3)
// 2
```

**Count matching objects**

```
[
    {"status": "active"},
    {"status": "inactive"},
    {"status": "active"}
].count($this.status == "active")
// 2
```

**CLI usage — count errors in a log array**

```bash
$ echo '{"logs": [{"level": "info"}, {"level": "error"}, {"level": "error"}]}' \
  | dasel -i json 'logs.count($this.level == "error")'
2
```
