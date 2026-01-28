# Modifying data

{% hint style="success" %}
Use `--root` whenever you are **modifying data and intend to save it back to a file**.\
This ensures you get the complete updated document rather than just the changed value.
{% endhint %}

### Output Behaviour

By default, **dasel outputs the result of the final selector** in your query.\
This is convenient when you’re simply retrieving a value, but can be less helpful when you’re modifying data, since you often want to see the full document instead.

***

#### Retrieving a Value

```bash
$ echo '{
  "foo": {
    "bar": "baz"
  }
}' | dasel -i json 'foo.bar'
"baz"
```

Here, the final selector is `foo.bar`, so dasel outputs its value: `"baz"`.

***

#### Modifying a Value

```bash
$ echo '{
  "foo": {
    "bar": "baz"
  }
}' | dasel -i json 'foo.bar = "bong"'
"bong"
```

When updating a value, dasel still outputs the result of the final selector — in this case, the new value `"bong"`.

***

#### Outputting the Entire Document

To print the entire modified document, use the `--root` flag.\
This changes the output to always return the full root node, regardless of the final selector.

```bash
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

***

#### Comparison

| Mode     | Example Command                           | Output                                 |
| -------- | ----------------------------------------- | -------------------------------------- |
| Default  | `dasel -i json 'foo.bar = "bong"'`        | `"bong"` (final selector value)        |
| `--root` | `dasel -i json --root 'foo.bar = "bong"'` | Full document with updated `"foo.bar"` |
