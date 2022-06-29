# Validate

## Description

This command allows you validate files.

It will not modify the source data in any way.

{% hint style="info" %}
Available since `v1.25.0.`
{% endhint %}

## Usage

```shell
dasel validate a.json b.yaml files/*.json
```

### Flags

| `--include-error` | <p>Tells dasel to output to include/exclude the error when a file fails validation.<br><br>Default to <code>true</code>.</p> |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- |

## Example

### Validate an entire directory

```shell
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

```shell
$ dasel validate tests/assets/example.*
pass tests/assets/example.json
pass tests/assets/example.xml
pass tests/assets/example.yaml
```

### Validate specific files

```shell
$ dasel validate tests/assets/example.json tests/assets/example.yaml
pass tests/assets/example.json
pass tests/assets/example.yaml
```

## Pre-Commit

Add `dasel` hooks to `.pre-commit-config.yaml` file

```yaml
- repo: https://github.com/TomWright/dasel
  rev: v1.25.1
  hooks:
    - id: dasel-validate
```

for a native execution of dasel, or use:

* `dasel-validate-docker` pre-commit hook for executing dasel using the official [Docker images](https://daseldocs.tomwright.me/installation#docker)
* `dasel-validate-bin` pre-commit hook for executing dasel using the official [binary](installation/)
