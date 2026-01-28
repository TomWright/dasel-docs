# Equal

Expects 2 arguments.

The first argument is a dasel selector to be executed from the current value.

The second argument is a comparison value.

Returns true if the value found by the selector matches the comparison value.

## Examples

```
$ echo '{"numbers":[1,2,3,4,5,6,7,8,9]}' | dasel -r json 'equal(numbers.[0],1)'          
true
```
