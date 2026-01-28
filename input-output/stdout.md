# Stdout

Dasel writes to stdout.

You can modify the output with the `-o`, `--out` flag passing the required format, e.g. `json`, `yaml` etc.

```
$ echo '{"message": "Hello world"}' | dasel -i json -o yaml
message: Hello world
```

## Getting the output you want

Dasel will output the result of the final expression by default, however in some cases it can be useful to output the input document, e.g.

### Default behaviour

```
$ echo '{"user": {"name": "John"}}' |
    dasel -i json 'user.name = {"first": user.name, "last": "Doe"}'

// outputs
{"first": "John", "last": "Doe"}
```

### With --root

<pre><code>$ echo '{"user": {"name": "John"}}' |
    dasel -i json --root 'user.name = {"first": user.name, "last": "Doe"}'

// outputs
<strong>{"user": {"name": {"first": "John", "last": "Doe"}}}
</strong></code></pre>
