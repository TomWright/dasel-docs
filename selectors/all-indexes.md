# All indexes

## Description

The all indexes selector allows you to target all items of a list or map.

## Usage

{% hint style="info" %}
This must be used in conjunction with the `-m`, `--multiple` flag.
{% endhint %}

```shell
.[*]
```

## Example

### Array

```shell
$ echo '{"x": [1, 2, 3]}' | dasel select -m -p json '.x.[*]'
1
2
3
```

### Object/Map

```shell
$ echo '{"x": {"x": 1, "y": 2, "z": 3}}' | dasel select -m -p json '.x.[*]'
1
2
3
```
