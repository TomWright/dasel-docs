# get

Returns data by key/index lookup.

Useful when looking up map keys containing a dot `.` , or when you want craft a dynamic key.

Expects a single argument of type `string` or `int`.

* If `string`, performs a map lookup.
* If `int`, performs an array index lookup.

## Examples

```bash
$ echo "['0.2.8']
  key = 'value'" | dasel -i toml 'get("0.2.8")'
key = 'value'
```
