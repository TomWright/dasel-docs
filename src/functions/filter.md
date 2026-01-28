# Filter

Expects 1 or more arguments.

Each argument should be a selector.

Filter runs the given selectors against each value from the previous function, and if all selectors return a truthy value, the element is allowed through.

## Examples

```
$ echo '[
  {"label":"x","allow":true},
  {"label":"y","allow":false},
  {"label":"z","allow":true}
  ]' | dasel -r json 'all().filter(allow)'
{
  "allow": true,
  "label": "x"
}
{
  "allow": true,
  "label": "z"
}

```
