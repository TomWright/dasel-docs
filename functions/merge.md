# merge

Merges two or more maps together into a single map. If multiple maps contain the same key, the value from the later argument takes precedence.

#### Syntax

```
merge(map1, map2, ...)
```

#### Arguments

* **maps** (`map`) - Two or more maps to merge. All arguments must be maps.

#### Examples

**Merge two maps**

```
merge({"a": 1}, {"b": 2})
// {"a": 1, "b": 2}
```

**Later values override earlier ones**

```
merge({"a": 1, "b": 2}, {"b": 3, "c": 4})
// {"a": 1, "b": 3, "c": 4}
```

**Merge multiple maps**

```
merge({"a": 1}, {"b": 2}, {"c": 3})
// {"a": 1, "b": 2, "c": 3}
```

**CLI usage — merge defaults with overrides**

```bash
$ echo '{"defaults": {"color": "red", "size": 10}, "overrides": {"size": 20}}' \
  | dasel -i json 'merge(defaults, overrides)'
{
    "color": "red",
    "size": 20
}
```

#### Notes

* Merge is shallow — nested maps are replaced, not recursively merged.
* All arguments must be maps. Merging arrays or scalars is not supported.
