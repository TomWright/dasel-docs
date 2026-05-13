# groupBy

The `groupBy` function groups the elements of an array by a derived key expression, producing a map where each key maps to an array of matching elements.

#### Syntax

```
<array>.groupBy(expr)
```

#### Arguments

* **expr** - An expression evaluated against each element to determine its group key. The result must be a string, int, float, or bool. Use `$this` to refer to the current element.

#### Examples

**Group primitives**

```
[1, 2, 3, 1, 2].groupBy($this)
// {"1": [1, 1], "2": [2, 2], "3": [3]}
```

**Group objects by a field**

```
[
    {"name": "Alice", "dept": "eng"},
    {"name": "Bob", "dept": "eng"},
    {"name": "Carol", "dept": "sales"}
].groupBy(dept)
// {"eng": [{"name": "Alice", "dept": "eng"}, {"name": "Bob", "dept": "eng"}], "sales": [{"name": "Carol", "dept": "sales"}]}
```

**Group by a boolean expression**

```
[3, 7, 1, 8, 5].groupBy($this > 5)
// {"false": [3, 1, 5], "true": [7, 8]}
```

**CLI usage**

```bash
$ cat users.json | dasel 'groupBy(role)'
```

**Chained with other functions**

```
[
    {"name": "Alice", "dept": "eng"},
    {"name": "Bob", "dept": "eng"},
    {"name": "Carol", "dept": "sales"}
].groupBy(dept).eng
// [{"name": "Alice", "dept": "eng"}, {"name": "Bob", "dept": "eng"}]
```
