# Train Travel API

This API does not exist, but exists to help people learn OpenAPI by describing a realistic API in a realistic way.

## Background

The world of OpenAPI has been plagued by "The Pet Store", an old API description used as a demo in every project ever. It describes a RPC-esque API that's mascerading as REST, and describes it poorly, using old OpenAPI 2.0 which has been upgraded to OpenAPI v3.0 without taking advantage of any of the new features.

This example API has been written by somebody who uses OpenAPI every day, and has described 100s of APIs. 

## Goals

Instead of shying away of tough decisions, this OpenAPI gets stuck into advanced topics like:

- How to split files up with $ref to avoid repeating ourselves.
- How to reuse the same model for read and write operations.
- How to wrap data with a wrapper like `{ data: [], links: {} }`.

This might not be the easiest API description to read in a text editor, but it looks wonderful when put through [Bump.sh](https://bump.sh/).

**[Preview this OpenAPI on Bump.sh](https://bump.sh/bump-examples/doc/train-travel-api/)**

Or [download it yourself](https://github.com/bump-sh-examples/train-travel-api/archive/refs/heads/main.zip) and have a poke around.

## License

The contents of this repository are licensed under [CC BY-NC-SA
  4.0](./LICENSE_CC-BY-NC-SA-4.0).