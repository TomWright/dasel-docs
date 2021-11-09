# Type

## Description

The type selector can be used to return the type of the current node.

## Usage

```
.[@]
```

### Return types

The type selector can return the following types:

* `array`
* `map`
* `string`
* `int`
* `float`
* `bool`

## Example

```bash
echo '{"numbers": [5, 2, 3, 1, 4]}' | dasel -r json '.[@]'
"map"
```

```bash
echo '{"numbers": [5, 2, 3, 1, 4]}' | dasel -r json '.numbers.[@]'
"array"
```

```bash
echo '{"numbers": [5, 2, 3, 1, 4]}' | dasel -r json '.numbers.[0].[@]'
"float"
```
