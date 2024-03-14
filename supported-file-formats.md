# Supported file formats

Dasel supports the following file formats:

* `json`
* `yaml`
* `csv`
* `toml` [v1.0.0](https://toml.io/en/v1.0.0)
* `xml`
* `-` (plain, write-only)

Note that

* Some format specific features such as comments may not be present in dasel output.
* Array ordering is not guaranteed. The JSON spec for example doesn't guarantee ordering. As a result dasel cannot either.
* The plain (`-`) parser can only be used when writing.

