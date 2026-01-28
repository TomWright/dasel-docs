# Null

## Description

This flag tells dasel to output `null` instead of `ValueNotFound` errors.

## Usage

Pass the `-n`, `--null` flag to [select](../select.md) commands.

## Example

With the flag:

```text
$ echo '[1]' | dasel -p json -n '.[1]'
null
```

Without the flag:

```shell
$ echo '[1]' | dasel -p json '.[1]'
Error: could not query node: could not find value: no value found for selector: .[1]: [1]
```
