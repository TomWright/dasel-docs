# Branches

{% hint style="warning" %}
This feature is potentially unstable. Must be used with the `--unstable` flag.
{% endhint %}

Dasel includes the concept of branches. `branch` allows you to perform one or more sub queries, with each query output as a separate document.

---

## Without branching

When we don't branch, the result is an array containing the items.

Given `numbers.json`:

```json
{ "numbers": [{"x": 1}, {"x": 2}, {"x": 3}] }
```

```bash
$ cat numbers.json | dasel -i json 'numbers'
[
    {
        "x": 1
    },
    {
        "x": 2
    },
    {
        "x": 3
    }
]
```

---

## Branching on an array

When we branch, each element is output as a **separate document** instead of a single array.

```bash
$ cat numbers.json | dasel -i json 'branch(numbers...)'
{
    "x": 1
}
{
    "x": 2
}
{
    "x": 3
}
```

---

## Filtering branches with ignore

Since `filter` operates on arrays and a branch isn't technically an array, you can use [`ignore`](../functions/ignore.md) to exclude specific branches from the result.

```bash
$ echo '[1, 2, 3]' | dasel -i json 'branch().if ($this == 2) { ignore() } else { $this }'
1
3
```

Here, the element `2` is matched by the condition and `ignore()` removes it from the output. The remaining elements `1` and `3` are output as separate documents.

---

## Extracting multiple fields as separate documents

```bash
$ echo '{"name": "Tom", "age": 30, "city": "London"}' \
  | dasel -i json 'branch(name, age)'
"Tom"
30
```

---

## Notes

* `branch` converts an array (or multiple values) into separate output documents.
* Use the [spread operator](spread.md) (`...`) to unpack an array into branch arguments.
* Use [`ignore`](../functions/ignore.md) to conditionally exclude branches.
