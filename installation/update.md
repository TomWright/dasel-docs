# Update

{% hint style="warning" %}
This is a dasel feature and will cause the current executable to be replaced. This may cause side effects when used in conjunction with a package manager, and as such may not be included in some versions of dasel installed using package managers.
{% endhint %}

Dasel can self-update using the latest release on Github.

```bash
dasel update
```

If you have a development version of dasel this will fail with a warning.

To override this warning and update the development version to the latest release you can use:

```bash
dasel update --dev
```

This command can be disabled by building dasel with the `noupdater` build tag.

