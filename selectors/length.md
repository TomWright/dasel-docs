# Length

## Description

The length selector can be used to return the length of the current node.

## Usage

```bash
.[#]
```

### Supported types

The length selector can be used on the following data types:

* Array/slice
* Map/object
* String

## Example

```bash
echo '{"numbers": [5, 2, 3, 1, 4]}' | dasel -p json '.numbers.[#]'
5
```

