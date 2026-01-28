# String

String is a basic function that allows you to return a plain string value.

Expects 1 argument.

If you wish to use a comma in your string you must escape it with a backslash `\,`.



## Examples

### Basic

```
$ echo '{}' | dasel -r json 'string(my string)' 
"my string"
```

### Add fixed values to maps

```
$ echo '{
  "name": "Tom Wright"
}' | dasel -r json 'mapOf(name,name,title,string(Mr))' 
{
  "name": "Tom Wright",
  "title": "Mr"
}
```
