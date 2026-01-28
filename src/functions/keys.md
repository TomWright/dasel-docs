# Keys

Keys expect no arguments.

Returns an array of keys for the current value, where the keys are either:

* Object field names
* Array indexes

## Example

```
$ echo '[1,2,3,4,5]' | dasel -r json 'keys()'
[
  0,
  1,
  2,
  3,
  4
]
```
