# Next Available Index

## Description

The next available index selector allows you to target the next available index of an array.

You can think of this as appending to a list.

## Usage

{% hint style="info" %}
This is only available in [put](../usage/put.md) commands.
{% endhint %}

```shell
.[]
```

## Example

```shell
$ echo '{"x": [1, 2]}' | dasel put int -p json '.x.[]' 3
{
  "x": [
    1,
    2,
    3
  ]
}
```
