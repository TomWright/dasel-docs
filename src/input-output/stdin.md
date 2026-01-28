# Stdin

It's common that you will want to pass some input into dasel to work with.

The simplest way of doing so is sending it to `stdin`, e.g.

`echo '{"message": "Hello world"}' | dasel -i json`&#x20;

This data could be in many formats (`json`, `yaml`, etc), so it's important that you use `-i`, `--input` to specify the input file format.

Note that if you provide an input format, you must write to stdin other dasel will hang waiting for input.

## Outputting the root document with --root

By default, dasel outputs the result of the final selector. This is useful when searching for data, but not so useful when performing modifications.

```
$ echo '{
  "foo": {
    "bar": "baz"
  }
}' | dasel -i json 'foo.bar'
"baz"

$ echo '{
  "foo": {
    "bar": "baz"
  }
}' | dasel -i json 'foo.bar = "bong"'
"bong"

$ echo '{
  "foo": {
    "bar": "baz"
  }
}' | dasel -i json --root 'foo.bar = "bong"'
{
    "foo": {
        "bar": "bong"
    }
}

```
