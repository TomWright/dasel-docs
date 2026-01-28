# MapOf

Expects 2 or more arguments.

Expects arguments to be given in pairs, where the first argument is the property name, and the second argument is a selector that will be used to resolve the property value.

## Examples

### Filtering values into lists

```
$ echo '[1,2,3,4,5]' | 
  dasel -r json 'mapOf(lessThan,all().filter(lessThan(.,3)).merge(),moreThan,all().filter(moreThan(.,3)).merge())'
{
  "lessThan": [
    1,
    2
  ],
  "moreThan": [
    4,
    5
  ]
}

```

### Restructuring/picking specific fields

```
$ echo '[
  {
    "name": {
      "first": "Tom",
      "last": "Wright"
    },
    "title": "Mr",
    "phone": "07"
  },
  {
    "name": {
      "first": "Joe",
      "last": "Bloggs"
    },
    "title": "Mr",
    "phone": "07"
  }
]' | dasel -r json 'all().mapOf(firstName,name.first,lastName,name.last,title,title,phone,phone).merge()'
[
  {
    "firstName": "Tom",
    "lastName": "Wright",
    "phone": "07",
    "title": "Mr"
  },
  {
    "firstName": "Joe",
    "lastName": "Bloggs",
    "phone": "07",
    "title": "Mr"
  }
]
```

### Exporting specific fields to csv

```
$ echo '[
  {
    "name": {
      "first": "Tom",
      "last": "Wright"
    },
    "title": "Mr",
    "phone": "07"
  },
  {
    "name": {
      "first": "Joe",
      "last": "Bloggs"
    },
    "title": "Mr",
    "phone": "07"
  }
]' | dasel -r json -w csv 'all().mapOf(phone,phone,firstName,name.first).merge()'
firstName,phone
Tom,07
Joe,07
```
