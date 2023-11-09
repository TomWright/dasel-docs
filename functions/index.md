# Index

Index expect 1 argument.

It can be used with a list, and returns the value at the given index list.

## Usage

Because the index function is commonly used dasel has a recognised alias of `[x]` that results in a `index(x)` call.

## Example

### Function usage

```
$ echo '["a","b","c"]' | dasel -r json 'index(1)'
"b"
```

### Alias usage

```
$ echo '["a","b","c"]' | dasel -r json '[1]'
"b"
```
