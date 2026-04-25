# Conditionals

Conditionals allow you to select different values depending on an expression.
Dasel v3 supports an `if/elseif/else` block syntax.

---

### Syntax

```
if (<condition>) { <then> } else { <else> }
```

* `<condition>` must evaluate to a boolean.
* `<then>` is evaluated if the condition is true.
* `<else>` is evaluated if the condition is false.
* An `else` branch is always required.

---

### Basic Example

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

```bash
$ dasel -i json -f input.json 'foo.if (bar == "baz") { bong } else { qux }'
```

**Output**

```
selected
```

---

### Elseif Chains

Use `elseif` to chain multiple conditions. You can use as many `elseif` branches as needed.

```
if (<condition1>) { <result1> } elseif (<condition2>) { <result2> } else { <default> }
```

#### Example

**Input JSON**

```json
{ "score": 75 }
```

**Query**

```bash
$ dasel -i json -f input.json '
  if (score >= 90) { "A" }
  elseif (score >= 80) { "B" }
  elseif (score >= 70) { "C" }
  else { "F" }
'
```

**Output**

```
C
```

#### Fizzbuzz with elseif

Given `numbers.json`:

```json
{ "numbers": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] }
```

```bash
$ cat numbers.json | dasel -i json 'numbers.map(
    if ($this % 3 == 0 && $this % 5 == 0) {
        "fizzbuzz"
    } elseif ($this % 5 == 0) {
        "buzz"
    } elseif ($this % 3 == 0) {
        "fizz"
    } else {
        $this
    }
)'
```

---

### Literal Results

Both branches can return literal values, not just field lookups.

**Input JSON**

```json
{ "count": 7 }
```

**Query**

```bash
$ dasel -i json -f input.json 'if (count > 5) { "many" } else { "few" }'
```

**Output**

```
many
```

---

### Nested Conditionals

Conditionals can be nested in the `else` branch.

```bash
$ dasel -i json -f input.json '
  if (status == "active") { "go" }
  else { if (status == "pending") { "wait" } else { "stop" } }
'
```

For multi-branch cases, `elseif` is cleaner than nesting.

---

### Notes

* An `else` branch is always required — both `if/else` and `if/elseif/else` must have a final `else`.
* Both branches must return a value — you cannot have an empty branch.
* Use `elseif` (one word, no space) for chained conditions.
* Parentheses around the condition are required.
