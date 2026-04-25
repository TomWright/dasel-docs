# search

The `search` function performs a **predicate-based recursive search** of the document tree.\
It allows you to find nodes that match specific conditions, not just by key name.

This makes `search` a more flexible and powerful alternative to the `..` operator, which is shorthand for simple recursive key or index lookups.

***

### Syntax

```
search(PREDICATE)
```

Where `PREDICATE` is a function that tests each node and returns true/false.

***

### Behaviour

* Traverses the entire document tree, starting at the current node.
* Applies the given predicate to every node (objects, arrays, scalars).
* Returns all nodes that satisfy the predicate.
* Unlike `..`, `search` is not limited to key names or indices — it supports arbitrary conditions.

***

### Predicates

Commonly used predicate functions include:

* `has("KEY")` — true if the node has the given key.
* `$this == VALUE` — true if the node equals `VALUE` .

> 📌 Check the functions documentation for a full list.

***

### Examples

#### Example Input

```json
{
  "users": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ],
  "meta": {
    "active": true,
    "score": 42
  }
}
```

***

#### 1. Search for Nodes with a Key

Find all nodes that contain a `name` field:

```bash
echo '{"users":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}],"meta":{"active":true,"score":42}}' | dasel -i json 'search(has("name"))'
```

Output:

```json
[
    {
        "id": 1,
        "name": "Alice"
    },
    {
        "id": 2,
        "name": "Bob"
    }
]
```

***

#### 2. Search for Specific Values

Find all nodes where the value equals `42`:

```bash
echo '{"users":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}],"meta":{"active":true,"score":42}}' | dasel -i json 'search($this == 42)'
```

Output:

```json
[
    42
]
```

***

#### 3. Combining Predicates

Find all nodes that have both `id` and `name` keys:

```bash
echo '{"users":[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}],"meta":{"active":true,"score":42}}' | dasel -i json 'search(has("id") && has("name"))'
```

Output:

```json
[
    {
        "id": 1,
        "name": "Alice"
    },
    {
        "id": 2,
        "name": "Bob"
    }
]
```

***

### Comparison to `..`

* `..` is shorthand for recursive key/index lookups:
  * `..name` ≈ `search(has("name"))`
  * `..[0]` ≈ `search(has(0))`
* `search` allows **arbitrary logic**, making it more powerful but also more verbose.

***

### Notes

* `search` is ideal when you need **fine-grained control** over what you’re looking for.
* Use the recursive descent operator (`..`) for **simple lookups** by key or index.
* Both operators traverse the document tree recursively — the difference is **specificity vs flexibility**.
