# Introduction

{% hint style="warning" %}
You are viewing dasel v2 documentation.
{% endhint %}



## Introduction

Dasel (short for data-selector) allows you to query and modify data structures using selector strings.

### One tool to rule them all <a href="#one-tool-to-rule-them-all" id="one-tool-to-rule-them-all"></a>

Say good bye to learning new tools just to work with a different data format.Dasel uses a standard selector syntax no matter the data format. This means that once you learn how to use dasel you immediately have the ability to query/modify any of the supported data types without any additional tools or effort.

## V1 to V2 breaking changes

This release does introduce a major version upgrade, and as such there are breaking changes.

### Select command

The select command remains largely the same, but the selector format has changed a lot. See selector changes below.

* Removal of `-p`,`--parser`. Please use `-r`,`--read` and `-w`,`--write`.
  * Note that if no `-w` is given, the value of `-r` is used.
  * `dasel -p json ...` becomes `dasel -r json ...`
* Removal of `--format` flag.
  * I plan on implementing this as a custom write parser instead.
* Removal of `-m`,`--multi` flag. All selectors now act in this manner.
* Removal of `-c`, `--compact` flag. Use `--pretty=false` instead.

### Put command

* Removal of sub commands (e.g. `dasel put string`).
  * Dasel now expects a `dasel put` command to have a `-t`,`--type` flag that specified the type.
  * If the given type doesn't match a pre-defined type (`string`, `int`, etc) it is checked against the read parsers (e.g. `json`, `yaml`). This is how you can achieve the previous `put document` functionality.
* Complete removal of `dasel put object`. Please use `dasel put -t json` or similar to achieve the same outcome.
* Removal of `-p`,`--parser`. Please use `-r`,`--read` and `-w`,`--write`.
  * Note that if no `-w` is given, the value of `-r` is used.
  * `dasel -p json ...` becomes `dasel -r json ...`
* Removal of `-m`,`--multi` flag. All selectors now act in this manner.
* Removal of `-c`, `--compact` flag. Use `--pretty=false` instead.

### Delete command

The delete command remains largely the same, but the selector format has changed a lot. See selector changes below.

* Removal of `-p`,`--parser`. Please use `-r`,`--read` and `-w`,`--write`.
  * Note that if no `-w` is given, the value of `-r` is used.
  * `dasel -p json ...` becomes `dasel -r json ...`
* Removal of `-m`,`--multi` flag. All selectors now act in this manner.
* Removal of `-c`, `--compact` flag. Use `--pretty=false` instead.

### Update command

The self-update functionality within dasel has been completely removed. Please use package managers to achieve this functionality.

### Selector changes

Dasel selectors have been completely reworked.

The purpose of this is to allow users to build their own complex logic and filtering without needing specific code being written to handle their use-case.

Please see the [function overview](broken-reference) for function documentation and examples.
