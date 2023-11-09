# Join

Join allows you to join multiple values into a single string. This is dasels version of concatenation.

Expects 1 or more arguments.

## Arguments

The first argument is required, and is the separator used when joining the strings.

Any further arguments are optional.

If no additional arguments are given, join uses the output of the previous function as it's input and will join those values.

If additional arguments are given, join uses those values as selectors and joins the result of those selectors.

If you wish to join data with plain strings you may use the [`string`](string.md) function.

{% hint style="info" %}
Be aware that the separator must always be a plain string and cannot contain any selector functions.
{% endhint %}



## Examples

### Join with no additional arguments

```
$ echo '{
  "name": {
    "first":"Tom",
    "last":"Wright"
  }
}' | dasel -r json 'name.all().join( )' 
"Tom Wright"
```

### Join with arguments

```
$ echo '{
  "name": {
    "first":"Tom",
    "last":"Wright"
  }
}' | dasel -r json 'name.join( ,string(Hello\\, my name is ),first,last)' 
"Hello, my name is  Tom Wright"
```
