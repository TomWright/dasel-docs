# Change file format

Dasel allows you to quickly and easily change the format of a file.

## JSON to YAML

```
$ echo '{
  "users": [
    {
      "name": "Tom"
    },
    {
      "name": "Jim"
    }
  ]
}' | dasel -r json -w yaml
users:
- name: Tom
- name: Jim
```

## YAML to CSV

```
$ echo 'users:
- name: Tom
- name: Jim' | dasel -r yaml -w csv 'users'  
name
Tom
Jim

```

## CSV to JSON

```
$ echo 'name
Tom
Jim
' | dasel -r csv -w json
[
  {
    "name": "Tom"
  },
  {
    "name": "Jim"
  }
]

```
