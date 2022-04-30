# Installation

## Homebrew

The easiest way to get your hands on the latest version of dasel is to use homebrew:

```bash
brew install dasel
```

## Docker

Run dasel in docker using the image `ghcr.io/tomwright/dasel`.

### Usage

Run the docker image, passing in a dasel command with the executable excluded.

```bash
echo '{"name": "Tom"}' | docker run -i --rm ghcr.io/tomwright/dasel:latest -p json '.name'
"Tom"
```

### Versioning

New image versions are built and pushed automatically as part of the CI/CD pipeline in Github actions.

| Tag           | Description                                  |
| ------------- | -------------------------------------------- |
| `latest`      | The latest release version.                  |
| `development` | The latest build from `master` branch.       |
| `v*.*.*`      | The specified dasel release. E.g. `v1.13.6`. |

## ASDF

Using [asdf-vm](https://asdf-vm.com) and the [asdf-dasel plugin](https://github.com/asdf-community/asdf-dasel?ts=4).

```bash
asdf plugin add dasel https://github.com/asdf-community/asdf-dasel.git
asdf list all dasel
asdf install dasel <version>
asdf global dasel <version>
```

## Nix

To install using the [Nix Package Manager](https://nixos.org) (for non-NixOS)

```bash
nix-env -iA nixpkgs.dasel
```

Or NixOS:

```bash
nix-env -iA nixos.dasel
```

## Manual

You can download a compiled executable from the [latest release](https://github.com/TomWright/dasel/releases/latest).

{% hint style="info" %}
Don't forget to put the binary somewhere in your `PATH`.
{% endhint %}

{% tabs %}
{% tab title="Linux (64 bit)" %}
```
curl -sSLf "$(curl -sSLf https://api.github.com/repos/tomwright/dasel/releases/latest | grep browser_download_url | grep linux_amd64 | grep -v .gz | cut -d\" -f 4)" -L -o dasel && chmod +x dasel
mv ./dasel /usr/local/bin/dasel
```
{% endtab %}

{% tab title="Mac OS (64 bit)" %}
```
curl -sSLf "$(curl -sSLf https://api.github.com/repos/tomwright/dasel/releases/latest | grep browser_download_url | grep -v .gz | grep darwin_amd64 | cut -d\" -f 4)" -L -o dasel && chmod +x dasel
mv ./dasel /usr/local/bin/dasel
```
{% endtab %}

{% tab title="Windows" %}
Manually download a compiled executable from the [latest release](https://github.com/TomWright/dasel/releases/latest).
{% endtab %}
{% endtabs %}

## Scoop

Use the scoop command-line installer to install dasel on windows 10.

```bash
scoop bucket add extras
scoop install dasel
```

## Development Version

You can `go install` the `cmd/dasel` package to build and install dasel for you.

{% hint style="info" %}
You may need to prefix the command with `GO111MODULE=on` in order for this to work.
{% endhint %}

```
go install github.com/tomwright/dasel/cmd/dasel@master
```
