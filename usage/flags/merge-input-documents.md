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

## Notes

Take note that merge in this context means taking all of the input documents and adding them to a single array of those documents.

Input: `a`, `b`, `c`  
Output: `[a, b, c]`

Where:  
a: `{"number": 1}`  
b: `{"number": 2}`  
c: `{"number": 3}`

Becomes:

```text
[
    {"number": 1},
    {"number": 2},
    {"number": 3}
]
```

The use of "merge" here could be mistaken in that you may expect the following output:

```text
{
    "number": 3
}
```

If you are looking for the 2nd output above, see the [merge feature request](https://github.com/TomWright/dasel/issues/133).

