# Variables

Dasel allows you to define variables for use in your queries.

Variables are referenced using a `$` prefix.

Note that these variables are essentially globals, and once defined, they are accessible at any point in the execution.

Variables can be used alongside `stdin`.

## Inline

Inline variables are those defined within a dasel query itself and should be terminated with a semicolon.

```bash
$ dasel -i json '$x = 1; $y = 2; $x + $y'
3
```

**Multi-step data transformation**

```bash
$ echo '{"users": [{"name": "Alice"}, {"name": "Bob"}]}' \
  | dasel -i json '
    $names = users.map(name);
    $count = len($names);
    "Found " + toString($count) + " users"
  '
"Found 2 users"
```

## From the environment

You can access environment variables using `$ENV_VAR_NAME`.

Note that changes to environment variables within dasel **are not supported**.

```bash
$ GREETING=hello NAME=tom dasel '$GREETING + " " + $NAME'
"hello tom"
```

## From the CLI

You can set variables from the CLI by passing additional arguments in the form of:

`--var name=format:content`

If you wish to pass a file as a variable you can use:

`--var name=format:file:filepath`

```bash
$ echo 'message: Hello world' > test.yaml
$ dasel -o json testVar=yaml:file:test.yaml '$testVar.message'
"Hello world"
```

Note that at this time variables from the CLI are currently required to be documents read from the file system. There are plans to change this in the future.

## Standard variables

Some variables are provided by dasel and will always exist:

* `$root` - The root document passed through `stdin` or `-f`.

### `$this`

`$this` refers to the **current element** being processed. It is available inside expressions that iterate over arrays:

* [`map`](../functions/map.md) — `$this` is the current element being transformed.
* [`filter`](../functions/filter.md) — `$this` is the current element being tested.
* [`each`](../functions/each.md) — `$this` is the current element being visited.
* [`sortBy`](../functions/sortby.md) — `$this` is the current element being compared.
* [`any`](../functions/any.md) / [`all`](../functions/all.md) / [`count`](../functions/count.md) — `$this` is the current element being evaluated.

It is also available in [spread](../syntax/spread.md) contexts and when accessing the current node in conditionals.

#### Examples

```
[1, 2, 3].map($this * 2)
// [2, 4, 6]

[1, 2, 3].filter($this > 1)
// [2, 3]

["hello", "WORLD"].map(toLower($this))
// ["hello", "world"]
```
