# Type

Accepts no arguments.

Returns the type of the current value.

Possible return values are:

* `string`
* `number`
* `bool`
* `array`
* `object`
* `unknown`

## Examples

### This

```
$ echo '[
  "x",
  false,
  true,
  1,
  1.1,
  {"x":1},
  [1]
]' | dasel -r json 'all().type()'
"string"
"bool"
"bool"
"number"
"number"
"object"
"array"
```
