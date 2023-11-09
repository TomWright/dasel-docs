# Len

Len expects no arguments and can be used on lists or objects. It returns the number of elements contained within the list/map.

## Examples

```
$ echo '{"numbers":[1,2,3,4,5,6,7,8,9]}' | dasel -r json 'len()'
1

$ echo '{"numbers":[1,2,3,4,5,6,7,8,9]}' | dasel -r json 'numbers.len()'
9
```
