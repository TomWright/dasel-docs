# Objects/maps

An object/map is a set of key value properties.

## Defining a new map

```
{"greeting": "hello"}
```

## Creating a map using existing values

```
{"foo": "bar", "name": "Tom"}. // Just so you can see the input
{
    "baz": foo,
    name // Shorthand for "name": name
}
```

## Adding new fields to a map

We can utilise the spread `...` operator here.

Set `"name" = "Tom"` regardless of what is in the map already:

```
{
  $this...,
  "name": "Tom"
}
```

Set `"name" = "Tom"` only if it doesn't already exist in the map:

```
{
    "name": "Tom",
    $this...
}
```
