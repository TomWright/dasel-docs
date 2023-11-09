# Not

Expects 1 argument.

Expects the argument to be a selector that will be performed against the current value.

Returns false if the selector returns a truthy value.

Returns true if the selector returns a falsey value.

## Examples

### NotMoreThan

```
$ echo '[1,2,3,4,5]' | dasel -r json 'all().not(moreThan(.,3))'
true
true
true
false
false
```
