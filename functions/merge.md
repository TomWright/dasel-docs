# merge

Merges two or more maps together into a single map. If multiple maps contain the same key, the value from the later argument takes precedence.

#### Syntax

```
merge(map1, map2, ...)
```

#### Arguments

* **maps** (`map`) - Two or more maps to merge. All arguments must be maps.

#### Examples

```
merge({"a": 1}, {"b": 2})
// {"a": 1, "b": 2}
```

```
merge({"a": 1, "b": 2}, {"b": 3, "c": 4})
// {"a": 1, "b": 3, "c": 4}
```
