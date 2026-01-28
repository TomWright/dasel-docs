# FilterOr

Expects 1 or more arguments.

Each argument should be a selector.

FilterOr runs the given selectors against each value from the previous function, and if any selectors return a truthy value, the element is allowed through.

## Examples

```
$ echo '[
  {"label":"x","allow":true},
  {"label":"y","allow":false},
  {"label":"z","allow":false}
  ]' | dasel -r json 'all().filterOr(allow,equal(label,y))'
{
  "allow": true,
  "label": "x"
}
{
  "allow": false,
  "label": "y"
}
```
