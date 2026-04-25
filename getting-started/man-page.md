# Man Page

Dasel can generate its own man page, which can be viewed directly or installed on your system.

## Viewing

To view the man page directly:

```shell
dasel man | man -l -
```

## Installing

To install the man page so it can be accessed with `man dasel`:

```shell
dasel man > /usr/local/share/man/man1/dasel.1
man dasel
```

{% hint style="info" %}
You may need to run the install command with `sudo` depending on your system.
{% endhint %}

## Contents

The generated man page includes:

* A synopsis of the command-line usage
* Descriptions of all subcommands
* All available flags and options for each command
* Usage examples
