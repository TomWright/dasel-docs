# Recursive Descent

The **recursive descent operator** (`..`) allows you to search deeply through the entire document tree, starting at the current node, and return all matching keys, indices, or values.

This operator is most commonly used to extract values from **nested objects** and **arrays** without knowing their exact path.

***

### Syntax

```
..KEY
```

Return an array of all values of the given `KEY`, recursively.

```
..[INDEX]
```

Returns an array of the element at `INDEX` for every array found, recursively.

```
..*
```

Returns an array of **all values** (map values, array elements, scalars) at any depth.

***

### Behaviour

* `..` performs a depth-first traversal of the current node.
* For objects/maps:
  * `..KEY` finds all values where the key is `KEY`.
  * `..*` finds all values (for all keys).
* For arrays:
  * `..[INDEX]` selects the element at `INDEX` from every array found.
  * `..*` selects every element from every array found.
* Scalars (strings, numbers, booleans, nulls) are included when using `..*`.

***

### Examples

#### Example Input

```json
{
  "user": {
    "name": "Alice",
    "roles": ["admin", "editor"],
    "meta": {
      "active": true,
      "score": 42
    }
  },
  "tags": ["x", "y"],
  "count": 10
}
```

***

#### 1. Recursive Key Search

Get all values with the key `name`:

```bash
'..name'
```

Output:

```json
["Alice"]
```

***

#### 2. Recursive Array Index Search

Get the **first element** (`[0]`) of every array:

```bash
'..[0]'
```

Output:

```json
["admin", "x"]
```

***

#### 3. Recursive Wildcard (`..*`)

Get **all values at any depth**:

```bash
'..*'
```

Output:

```json
[
  "Alice",
  "admin",
  "editor",
  true,
  42,
  "x",
  "y",
  10
]
```

***

### Notes

* `..` is shorthand for recursive search by key or index.
* For more complex filtering (e.g. values where a key exists, or by type), use the [`search` ](../functions/search.md)operator.
* The `..` operator is widely known as the **recursive descent operator**, and is similar to:
  * `//` in XPath
  * `..` in JSONPath and yq
  * `..` in jq
