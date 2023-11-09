# Parent

Accepts no arguments.

Returns the parent of the current value.

## Examples

```
$ echo '[
  {
    "name": "Tom",
    "flags": {
      "banned": false
    }
  },
  {
    "name": "Jim",
    "flags": {
      "banned": true
    }
  },
  {
    "name": "Jess",
    "flags": {
      "banned": false
    }
  }
]' | dasel -r json 'all().flags.filter(equal(banned,true)).parent().parent().all().name'
"Tom"
"Jim"
"Jess"
```
