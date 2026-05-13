# filter

The `filter` function filters the contents of an array, returning only elements that match the predicate. It works in a similar way to [JavaScript's Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

#### Syntax

```
<array>.filter(predicate)
```

#### Arguments

* **predicate** - A boolean expression evaluated against each element. Use `$this` to refer to the current element and `$key` to refer to the current index.

#### Examples

**Filter numbers**

```
[1, 2, 3, 4, 5].filter($this > 3)
// [4, 5]
```

**Filter objects by a field**

```
[
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 17},
    {"name": "Charlie", "age": 30}
].filter(age >= 18)
// [{"name": "Alice", "age": 25}, {"name": "Charlie", "age": 30}]
```

**CLI usage — find active users**

```bash
$ cat users.json | dasel -i json 'users.filter(active == true).map(name)'
```

**Filter by index using `$key`**

```
[10, 20, 30, 40, 50].filter($key >= 2)
// [30, 40, 50]
```

**Chained with other functions**

```
[1, 2, 3, 4, 5].filter($this > 2).first()
// 3
```
