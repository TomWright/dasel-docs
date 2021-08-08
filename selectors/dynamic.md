# Dynamic

## Description

Dynamic selectors allow you to select items from lists or maps when you don't know the key or index. You can think of this as searching the current node.

## Usage

{% hint style="info" %}
You can use a selector as the key to create more complex conditions.
{% endhint %}

```bash
.(<key>=<value>)
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
| :--- | :--- |
| `=` | `v0.0.4` |
| `>=` | `v1.14.0` |
| `>` | `v1.14.0` |
| `<` | `v1.14.0` |
| `<=` | `v1.14.0` |
| `!=` | `v1.17.0` |

### Multiple conditions

You can use multiple dynamic selectors within the same part to perform `AND` logic.

```bash
.(<key>=<value>)(<key2>=<value2>)
```

### Non-object values

You can evaluate and check against non-object values by defining the `key` as either `value` or `.`. Doing so will tell dasel extract the value of the current node and compare that against `<value>`.

### Selectors as a key

When performing dynamic checks dasel internally creates a new root node at the current position and queries data from there.

This means that you can use fully formed selectors as a key to create more advanced logic.

```bash
.users.(.addresses.(.primary=true).number=123).name.first
```

The above selector in plain English may read as...

> Give me the first name of the user who's primary address is at number 123.

The resolution of that query looks something like this:

```text
.users.(.addresses.(.primary=true).number=123).name.first
.users.(.addresses.[0].number=123).name.first
.users.[0].name.first
```

## Example

{% code title="simple\_input.yaml" %}
```yaml
colourCodes:
- name: red
  rgb: ff0000
- name: green
  rgb: 00ff00
- name: blue
  rgb: 0000ff
```
{% endcode %}

{% code title="advanced\_input.json" %}
```javascript
{
  "users": [
    {
      "name": {
        "first": "Tom",
        "last": "Wright"
      },
      "addresses": [
        {
          "primary": true,
          "number": 123
        },
        {
          "primary": false,
          "number": 456
        }
      ]
   }
  ]
}
```
{% endcode %}

### Single condition

```bash
dasel select -f simple_input.yaml '.colourCodes.(name=red).rgb'

ff0000
```

### Multiple conditions

```bash
dasel select -f simple_input.yaml '.colourCodes.(name=red)(rgb=ff0000).rgb'

ff0000
```

### Selector as a key

```bash
dasel -f advanced_input.json '.users.(.addresses.(.primary=true).number=123).name.first'

"Tom"
```

