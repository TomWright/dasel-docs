# Escape HTML

## Description

Tells dasel whether or not to escape HTML tags when writing data.

## Usage

Pass the `--escape-html=true` or `--escape-html=false` flag to any dasel command.

Defaults to `false`.

{% hint style="info" %}
Supported in JSON write parser since v1.21.0.
{% endhint %}

## Example

### True

```bash
$ echo '{"user": "tom <asd>"}' | dasel -r json --escape-html=true .
{
  "user": "tom \u003casd\u003e"
}
```

### False

```bash
$ echo '{"user": "tom <asd>"}' | dasel -r json --escape-html=false .
{
  "user": "tom <asd>"
}
```

