# Key

Key expect no arguments.

It returns the key of the current value, where the key is the object property or array index used to access it.

## Example

```
$ echo '{
  "list": ["x", "y", "z"],
  "object": {
    "a": "x",
    "b": "y",
    "c": "z"
  }
}' | dasel -r json 'all().all().key()'
0
1
2
"a"
"b"
"c"
```
