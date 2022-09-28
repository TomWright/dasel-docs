# Format

## Description

Allows you to format dasel output according to the given template.

## Usage

Pass the `--format` flag to [select](../select.md) commands.

{% hint style="info" %}
Available in `select` commands since `v1.18.0`.
{% endhint %}

## Functions and accessors

The root context `.` is equal to the node found at the given selector.

It is recommended that you use the `select` function with a selector to access values, but you can access properties in the path with `.field.subField` if preferred.

| Function                    | Description                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| `select "selector"`         | Returns the node at the given selector.                                                    |
| `selectMultiple "selector"` | Returns a list of nodes found for the given selector.                                      |
| `query`                     | Alias of `select`.                                                                         |
| `queryMultiple`             | Alias of `selectMultiple`.                                                                 |
| `isFirst`                   | Returns `true` if the node being formatted is the first in a list of selected nodes.       |
| `isLast`                    | Returns `true` if the node being formatted is the last in a list of selected nodes.        |
| `format "template"`         | Allows recursive calls to the formatting capability. Useful when using a `selectMultiple`. |
| `newline`                   | Returns a newline character.                                                               |

{% hint style="info" %}
Dasel also provides access to [sprig](http://masterminds.github.io/sprig/) functions within templates to allow more functionality.
{% endhint %}

The templates are parsed using golang's `text/template` package so dasel also supports an array of conditional and loop statements by default.

| Description                 | Example                                                                                                                      |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| If condition                | `{{ if x }} x is true {{ else }} x is false {{ end }}`                                                                       |
| If not condition            | `{{ if not x }} x is` false `{{ else }} x is true {{ end }}`                                                                 |
| Range                       | <p><code>Numbers:</code></p><p><code>{{ range .numbers -}}</code><br><code>- {{ . }}</code></p><p><code>{{ end }}</code></p> |
| Text and space manipulation | [https://pkg.go.dev/text/template#hdr-Text\_and\_spaces](https://pkg.go.dev/text/template#hdr-Text\_and\_spaces)             |

For more information refer to the [related documentation](https://pkg.go.dev/text/template#hdr-Functions).

## Example

### Select

```shell
$ echo '[
  {"name": "Tom", "email": "contact@tomwright.me"},
  {"name": "Jim", "email": "jim@gmail.com"}
]' | dasel -p json -m \
  --format '{{ select ".name" }},{{ select ".email" }}' \
  '.[*]'
Tom,contact@tomwright.me
Jim,jim@gmail.com
```

### SelectMultiple

```shell
$ echo '[
  {"name": "Tom", "emails": [
    {"email": "contact@tomwright.me", "primary": true},
    {"email": "tom@gmail.com", "primary": false}
  ]},
  {"name": "Jim", "emails": [
    {"email": "old@gmail.com", "primary": false},
    {"email": "jim@gmail.com", "primary": true}
  ]}
]' | dasel -p json -m \
  --format '{{ select ".name" }}:{{ newline }}{{ selectMultiple ".emails.[*]" | format "- {{ select \".email\" }}, {{ select \".primary\" }}{{ if not isLast }}{{ newline }}{{ end }}" }}' \
  '.[*]'
Tom:
- contact@tomwright.me, true
- tom@gmail.com, false
Jim:
- old@gmail.com, false
- jim@gmail.com, true
```
