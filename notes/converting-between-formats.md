# Converting between formats

Dasel allows you to specify different input/output formats using the `-r`,`--read` and `-w`,`--write` flags.

E.g.

```bash
echo '{"name": "Tom"}{"name": "Jim"}' | dasel -r json -w yaml .
name: Tom
---
name: Jim
```

This works well in general but you may run into issues when converting between data formats that don't typically play well together.

If you have any questions or concerns around this please raise a [discussion](https://github.com/TomWright/dasel/discussions).

