# Merge Input Documents

## Description

This flag tells dasel to merge input documents into an array.

Note that when `--merge-input-documents` is passed, even a single document will be converted to an array.

## Usage

Pass the `--merge-input-documents` to [select](../select.md) or [put](../put.md) commands.

## Example

With the flag:

```text
$ echo 'foo: bar
---
baz: biz' | dasel -r yaml -w json --merge-input-documents .
[
  {
    "foo": "bar"
  },
  {
    "baz": "biz"
  }
]

```

Without the flag:

```text
$ echo 'foo: bar
---
baz: biz' | dasel -r yaml -w json .
{
  "foo": "bar"
}
{
  "baz": "biz"
}
```

