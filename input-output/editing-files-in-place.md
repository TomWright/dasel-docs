# Editing files in place

With V3 the in-process file editing was removed so I can re-evaluate if it is actually needed and what it should look like.

In the meantime, the following is an example of how you can edit in-place.

```
dasel -i toml --root 'foo = "bar"' < file.toml > file.toml.tmp \
&& mv file.toml.tmp file.toml
```

1. Read a file into dasel `< file.toml`
2. Redirect the output to a tmp file `> file.toml.tmp`
3. Move the tmp file over the original `mv file.toml.tmp file.toml`

It is important to use the `--root` flag - this ensures dasel outputs the entire document.

### Why do we need to go via a tmp file?

When you redirect output to a file bash will truncate that file before running the command.\
This usually doesn't cause an issue but will will in this case as the file is then empty when dasel tries to read it.
