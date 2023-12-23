# Count

Count will count the number of values output from the previous function.

## Examples

```
$ echo '{"numbers":[1,2,3,4,5,6,7,8,9]}' | dasel -r json 'count()'
1

$ echo '{"numbers":[1,2,3,4,5,6,7,8,9]}' | dasel -r json 'numbers.count()'
1

$ echo '{"numbers":[1,2,3,4,5,6,7,8,9]}' | dasel -r json 'numbers.all().count()'
9
```
