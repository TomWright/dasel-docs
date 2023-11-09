# LessThan

Expects 2 arguments.

The first argument is a dasel selector to be executed from the current value.

The second argument is a comparison value.

Returns true if the value found by the selector is less than the comparison value.

## Examples

### LessThan

```
$ echo '[1,2,3,4,5]' | dasel -r json 'all().lessThan(.,3)'
true
true
false
false
false
```

### LessThanEqual

```
$ echo '[1,2,3,4,5]' | dasel -r json 'all().or(equal(.,3),lessThan(.,3))'
true
true
true
false
false
```
