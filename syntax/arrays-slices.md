# Arrays/slices

A slice/array is a sequence of elements. They are zero indexed, not a fixed size and can be modified on the fly.

## Defining a new array

```
[1, 2, 3]
```

## Appending elements to an array

```
[$someArray, 4]
```

## Removing elements from an array

```
[1, 2, 3].filter($this % 2 == 0)
```

## Accessing by index

```
$someArray[1]
```

Accessing last array index

```
$someArray[len($someArray)-1]
```

## Accessing a range of items

The range index syntax can be a powerful tool: `[start:end]`

The result will be a new array containing the given range of indexes from start to end.

### Take the first 5 items of an array

```
$someArray[0:4]
```

### Take the last 5 items of an array

```
$someArray[ len($someArray)-6 : len($someArray)-1 ]
```

