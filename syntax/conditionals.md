# Conditionals

Conditionals allow you to select different values depending on an expression.\
Dasel v3 supports both a **long form** `if/else` block and a compact **ternary operator**.

***

### Long Form (`if/else`)

The long form is more explicit and easier to read for complex conditions.

```
if (<condition>) { <then-expression> } else { <else-expression> }
```

* `<condition>` must evaluate to a boolean.
* `<then-expression>` is evaluated if the condition is true.
* `<else-expression>` is evaluated if the condition is false.

#### Example

**Input JSON**

```json
{
  "foo": {
    "bar": "baz",
    "bong": "selected",
    "qux": "not-selected"
  }
}
```

**Query**

```sh
$ dasel -i json -f input.json '.foo.if(bar == "baz") { bong } else { qux }'
```

**Output**

```
selected
```

***

### Ternary Operator (`? :`)

{% hint style="danger" %}
Not yet implemented.
{% endhint %}

The ternary form is shorter and useful for inline conditions.

```
<condition> ? <then-expression> : <else-expression>
```

#### Example

**Input JSON**

```json
{
  "foo": {
    "bar": "qux",
    "bong": "selected",
    "qux": "not-selected"
  }
}
```

**Query**

```sh
$ dasel -i json -f input.json '.foo.(bar == "baz" ? bong : qux)'
```

**Output**

```
not-selected
```

***

### Literals and Nesting

Both forms support literals and nested expressions.

#### Example 1: Literal results

**Input JSON**

```json
{ "count": 7 }
```

**Query**

```sh
$ dasel -i json -f input.json 'if(count > 5) { "many" } else { "few" }'
```

**Output**

```
many
```

***

#### Example 2: Nested ternaries

**Input JSON**

```json
{ "foo": { "bar": "zap", "bong": "BONG", "qux": "QUX", "zap": "ZAP", "default": "DEF" } }
```

**Query**

```sh
$ dasel -i json -f input.json '.foo.(bar == "baz" ? bong : (bar == "qux" ? qux : default))'
```

**Output**

```
DEF
```

***

### Notes

* **An `else` branch is required.**\
  Both the `if/else` and ternary forms must specify an `else` result.
* **Both branches must return a value.**\
  A conditional always evaluates to a result — you cannot have an empty branch.
* Parentheses are recommended when nesting conditionals.
* Both branches must be valid dasel expressions (selectors, literals, or functions).
