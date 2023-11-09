# MoreThan

Expects 2 arguments.

The first argument is a dasel selector to be executed from the current value.

The second argument is a comparison value.

Returns true if the value found by the selector is more than the comparison value.

## Examples

### MoreThan

```
$ echo '[1,2,3,4,5]' | dasel -r json 'all().moreThan(.,3)'
false
false
false
true
true
```

### MoreThanEqual

```
$ echo '[1,2,3,4,5]' | dasel -r json 'all().or(equal(.,3),moreThan(.,3))'
false
false
true
true
true
```
