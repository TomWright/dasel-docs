# Property

## Description

A property selector is the most common selector, and is used to select a specific named property within a map.

## Usage

```shell
.propertyName
```

## Example

```shell
$ echo '{"name": "Tom"}' | dasel -p json '.name'
Tom
```
