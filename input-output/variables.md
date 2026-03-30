# Variables

Dasel allows you to define variables for use in your other selectors.

Variables are referenced using a `$` prefix.

Note that these variables are essentially globals, and once defined, they are accessible at any point in the execution.

Variables can be used alongside `stdin`.

## Inline

Inline variables are those defined within a dasel query itself and should be terminated with a semicolon.

```bash
$ dasel -i json '$x = 1; $y = 2; $x + $y'
3
```

## From the environment

You can access environment variables using `$ENV_VAR_NAME`.&#x20;

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

```
$ echo 'message: Hello world' > test.yaml
$ dasel -o json testVar=yaml:file:test.yaml '$testVar.message'
"Hello world"
```

Note that at this time variables from the CLI are currently required to be documents read from the file system. There are plans to change this in the future.

## Standard variables

Some variables are provided by dasel and will always exist:

* `$this` - The current element
* `$root` - The root document passed through `stdin`.
