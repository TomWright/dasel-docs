# Index

## Description

The index selector allows you to access a specific element of an array.

## Usage

```shell
.[0]
```

## Example

```shell
$ echo '{"a":{"b": [1, 2, 3]}}' | dasel -p json '.a.b.[1]'
"2"
```
