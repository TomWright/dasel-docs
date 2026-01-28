# Dasel Documentation

This repository contains the documentation for [Dasel](https://github.com/TomWright/dasel), built using [mdBook](https://rust-lang.github.io/mdBook/).

## Prerequisites

Install mdBook:

```bash
cargo install mdbook
```

Or using other methods from the [official installation guide](https://rust-lang.github.io/mdBook/guide/installation.html).

## Building the Documentation

To build the documentation:

```bash
mdbook build
```

The generated HTML files will be in the `book/v3` directory.

## Contributing

When adding or modifying documentation:

1. Edit the Markdown files in the `src/` directory.
2. Update `src/SUMMARY.md` if adding new pages.
3. Test your changes with `mdbook build` command.
4. Submit a pull request.
