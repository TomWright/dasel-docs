# Branches

{% hint style="warning" %}
This feature is potentially unstable. Must be used with the `--unstable` flag.
{% endhint %}

Dasel includes the concept of branches. `branch` allows you to perform one or more sub queries, with each query output as a separate document.

This documentation is a little light, but will be improved with time.

## Examples

#### Without branching

When we don't branch, notice how the result is an array containing numbers.

```sh
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

#### Branching on numbers

When we branch on the numbers, we actually get separate JSON documents out at the end.

```sh
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

#### Filtering on a branch

Since `filter` must be used on arrays and a branch isn't technically an array, we can instead use `ignore`. This marks a specific branch as irrelevant and it will be stripped from the result.

<pre class="language-sh"><code class="lang-sh"><strong>[1,2,3].branch().if ( $this==2 ) { ignore() } else { $this }
</strong>2
3
</code></pre>

