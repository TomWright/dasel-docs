# each

The `each` function is used to iterate through each item of an array. Comparable to a foreach loop.

The current item is accessible via the `$this` variable.

The response values from an `each` call is ignored. `each` is useful when you want to modify values in-place.

Most commonly used with:

* [search](search.md)
* [recursive descent](../syntax/recursive-descent.md)
* `--root` flag

## Examples

### Modifying data in-place

```bash
$ echo '[1,2,3]' | dasel -i json 'each($this = $this+1)' 
[
    2,
    3,
    4
]

```
