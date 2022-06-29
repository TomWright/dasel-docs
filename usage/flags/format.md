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
| :-------------------------- | :----------------------------------------------------------------------------------------- |
| `select "selector"`         | Returns the node at the given selector.                                                    |
| `selectMultiple "selector"` | Returns a list of nodes found for the given selector.                                      |
| `query`                     | Alias of `select`.                                                                         |
| `queryMultiple`             | Alias of `selectMultiple`.                                                                 |
| `isFirst`                   | Returns `true` if the node being formatted is the first in a list of selected nodes.       |
| `isLast`                    | Returns `true` if the node being formatted is the last in a list of selected nodes.        |
| `format "template"`         | Allows recursive calls to the formatting capability. Useful when using a `selectMultiple`. |
| `newline`                   | Returns a newline character.                                                               |

The templates are parsed using golang's `text/template` package so dasel also supports an array of conditional and loop statements by default.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">If condition</td>
      <td style="text-align:left"><code>{{ if x }} x is true {{ else }} x is false {{ end }}</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">If not condition</td>
      <td style="text-align:left"><code>{{ if not x }} x is </code>false<code> {{ else }} x is true {{ end }}</code>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Range</td>
      <td style="text-align:left">
        <p><code>Numbers:</code>
        </p>
        <p><code>{{ range .numbers -}}<br />- {{ . }}</code>
        </p>
        <p><code>{{ end }}</code>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Text and space manipulation</td>
      <td style="text-align:left"><a href="https://pkg.go.dev/text/template#hdr-Text_and_spaces">https://pkg.go.dev/text/template#hdr-Text_and_spaces</a>
      </td>
    </tr>
  </tbody>
</table>

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
