# Validate

## Description

This command allows you validate files.

It will not modify the source data in any way.

{% hint style="info" %}
Available since `v1.25.0.`
{% endhint %}

## Usage

```bash
dasel validate a.json b.yaml files/*.json
```

### Flags

| `--include-error` | <p>Tells dasel to output to include/exclude the error when a file fails validation.<br><br>Default to <code>true</code>.</p> |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- |

## Example

### Validate an entire directory

```
$ dasel validate tests/assets/*
fail tests/assets/broken.json could not load input: could not unmarshal data: invalid character '}' after array element
fail tests/assets/broken.xml could not load input: could not unmarshal data: xml.Decoder.Token() - XML syntax error on line 1: element <a> closed by </b>
pass tests/assets/deployment.yaml
pass tests/assets/example.json
pass tests/assets/example.xml
pass tests/assets/example.yaml
Error: 2 files failed validation
```

### Validate a subset of files

```
$ dasel validate tests/assets/example.*
pass tests/assets/example.json
pass tests/assets/example.xml
pass tests/assets/example.yaml
```

### Validate specific files

```
$ dasel validate tests/assets/example.json tests/assets/example.yaml
pass tests/assets/example.json
pass tests/assets/example.yaml
```
