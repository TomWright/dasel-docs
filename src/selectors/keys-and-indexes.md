# Keys and indexes

## Description

The key/index selector is used to return a list of all keys/indexes in the current node.

## Usage

> [!NOTE]
> This must be used in conjunction with the `-m`, `--multiple` flag.

```shell
.-
```

## Example

```shell
$ echo '{"a":{"c": [1, 2, 3]},"b":{}}' | dasel -p json -m '.a.c.-'
"0"
"1"
"2"
```
