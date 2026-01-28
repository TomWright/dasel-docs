# Comments

You can add comments to your queries with the double forward slash `//`.

Everything from the start of a comment until the end of the line will be ignored by dasel.

## Example

```
dasel -o json '
{ // Start of input object creation
  "foo": "bar", // The base "foo" value.
  "name": "Tom" // The original name
} // End of the input object
.
{ // Start of object re-creation
    "baz": foo, // Rename foo to bar
    name // Shorthand for "name": name
} // End of object re-creation'
{
    "baz": "bar",
    "name": "Tom"
}
```
