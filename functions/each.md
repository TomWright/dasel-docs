# each

The `each` function iterates through each item of an array, similar to a foreach loop.

The current item is accessible via the `$this` variable.

The return values from `each` are ignored — it is useful when you want to modify values in-place.

Most commonly used with:

* [search](search.md)
* [recursive descent](../syntax/recursive-descent.md)
* `--root` flag

#### Syntax

```
<array>.each(expression)
```

#### Examples

**Modifying data in-place**

```bash
$ echo '[1, 2, 3]' | dasel -i json 'each($this = $this + 1)'
[
    2,
    3,
    4
]
```

**Uppercase all names in a file**

```bash
$ echo '["alice", "bob"]' | dasel -i json --root 'each($this = toUpper($this))'
[
    "ALICE",
    "BOB"
]
```

**Combined with search — update deeply nested values**

```bash
$ cat data.json | dasel -i json --root 'search(has("status")).each(status = "active")'
```

This finds all objects with a `status` field anywhere in the document and sets them to `"active"`.
