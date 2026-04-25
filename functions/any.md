# any

Returns `true` if any element in an array matches the given predicate. This is an expression — the predicate is evaluated against each element using `$this` to refer to the current element.

#### Syntax

```
<array>.any(predicate)
```

#### Arguments

* **predicate** - A boolean expression evaluated against each element. Use `$this` to refer to the current element.

#### Examples

**Check if any number exceeds a threshold**

```
[1, 2, 3].any($this > 2)
// true
```

```
[1, 2, 3].any($this > 5)
// false
```

**Check a field on objects**

```
[{"age": 20}, {"age": 30}].any($this.age >= 30)
// true
```

**CLI usage — check if any user is an admin**

```bash
$ echo '{"users": [{"role": "user"}, {"role": "admin"}]}' \
  | dasel -i json 'users.any($this.role == "admin")'
true
```
