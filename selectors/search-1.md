# Search Optional

## Description

Search optional selectors recursively search all the data below the current node and return all of the results.

This differs from search in that the query does not fail when the field you filter on does not exist.

{% hint style="info" %}
Available since `v1.26.0.`
{% endhint %}

## Usage

{% hint style="info" %}
This must be used in conjunction with the `-m`, `--multiple` flag.
{% endhint %}

```shell
.(#:<key>=<value>)
```

### Key

The key defines which property/selector we should use to extract a value.

If `<key>` is:

* `.` or `value` - dasel checks if the current nodes value is `<value>`.
* `-` or `keyValue` - dasel checks if the key/name/index of the current node is `<value>`.
* Else dasel uses the key as a selector itself and compares the result against `<value>`.

### Value

The value is the expected value for the check to pass.

Note that dasel will stringy values prior to checking if they match.

### Comparisons

Dasel supports the following comparison operators:

| Operator | Supported since |
| -------- | --------------- |
| `=`      | `v1.6.0`        |
| `!=`     | `v1.17.0`       |

## Example

{% code title="input.json" %}
```json
{
  "users": [
    {
      "primary": true,
      "name": {
        "first": "Tom",
        "last": "Wright"
      }
    },
    {
      "primary": false,
      "name": {
        "first": "Jim",
        "last": "Wright"
      }
    },
    {
      "name": {
        "first": "Frank",
        "last": "Wright"
      }
    }
  ]
}
```
{% endcode %}

### Search by optional property

```shell
$ dasel select -f input.json -m '.users.(#:primary=true).name.first'
"Tom"
```

