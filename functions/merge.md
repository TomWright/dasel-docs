# merge

Deep-merges two or more maps together into a single map. Nested maps are recursively merged key-by-key. For non-map values (scalars, slices) or when keys exist in multiple arguments, the value from the later argument takes precedence.

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

**Deep merge nested maps**

```
merge({"a": {"x": 1, "y": 2}}, {"a": {"y": 3, "z": 4}})
// {"a": {"x": 1, "y": 3, "z": 4}}
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

* Merge is deep — nested maps are recursively merged key-by-key.
* Slices and scalar values are replaced, not concatenated or merged.
* If one argument has a map at a key and another has a non-map value at the same key, the later value wins.
* All arguments must be maps. Merging arrays or scalars at the top level is not supported.
* For shallow merge semantics, use the spread operator: `{$a..., $b...}`.
