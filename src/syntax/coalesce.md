# Coalesce

The coalesce `??` operator can be used to provide default values when the given path does not exist, or causes some error.

The operator will pass through to the secondary value if:

* A given map key doesn't exist
* A given array index doesn't exist
* The given expressions returns `null`
* An operation is performed on an invalid type

## Examples

### Check if a property or index exists

```
if ($someArray[10] ?? false) {
    // exists
} else {
    // does not exist
}

if ($someMap.foo ?? false) {
    // exists
} else {
    // does not exist
}
```

### Default values when something doesn't exist

```
foo.bar.baz ?? "my sensible default"
```

### Chaining

The coalesce operator can be chained, with items towards the left taking prescedence.

```
foo ?? bar ?? baz ?? false
```
