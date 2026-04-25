# Shell Completion

Dasel can generate shell completion scripts for **Bash**, **Zsh**, **Fish**, and **PowerShell**. These scripts provide tab-completion for subcommands, flags, and supported data formats.

## Bash

```shell
# Add to ~/.bashrc
source <(dasel completion bash)
```

Or save to a file:

```shell
dasel completion bash > /etc/bash_completion.d/dasel
```

## Zsh

```shell
# Add to ~/.zshrc
source <(dasel completion zsh)
```

Or save to a file:

```shell
dasel completion zsh > "${fpath[1]}/_dasel"
```

{% hint style="info" %}
You may need to run `compinit` after adding the completion script for the first time.
{% endhint %}

## Fish

```shell
dasel completion fish | source
```

Or save to a file:

```shell
dasel completion fish > ~/.config/fish/completions/dasel.fish
```

## PowerShell

```powershell
# Add to your PowerShell profile
dasel completion powershell | Out-String | Invoke-Expression
```

Or save to a file:

```powershell
dasel completion powershell > dasel.ps1
# Then source it in your profile
. ./dasel.ps1
```

## What Gets Completed

The completion scripts provide tab-completion for:

* Subcommands (`query`, `version`, `completion`, `man`, etc.)
* Flags (`--in`, `--out`, `--compact`, `--root`, etc.)
* Data formats when using `--in` or `--out` (e.g. `json`, `yaml`, `toml`, `csv`, `xml`)
* Shell names when using `dasel completion`
