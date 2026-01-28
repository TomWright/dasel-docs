# Whitespace

Whitespace is no longer a factor when parsing selectors. The following examples will all do the same thing.

This is really expected, however since this wasn't the case in previous versions I am specifically calling it out.

## With whitespace

```
[
  1,
  2,
  3
].map(
  if ( $this >= 1 ) {
    $this / 1
  } else {
    $this
  }
)
```



## Without whitespace

```
[1,2,3].map(if($this>=1){$this/1}else{$this})
```

