# Append

Append accepts no arguments.

It appends a new index to the input slice/array.

## Usage

Because the append function is commonly used dasel has a recognised alias of `[]` that results in a `append()` call.

## Examples

### Append an int to a list

```
$ echo '[10, 11]' | dasel put -r json -t int -v 12 'append()'
[
  10,
  11,
  12
]
```

### Append an int to a list with alias

```
$ echo '[10, 11]' | dasel put -r json -t int -v 12 '[]'
[
  10,
  11,
  12
]
```
