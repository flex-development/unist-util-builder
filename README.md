# unist-util-builder

[![github release](https://img.shields.io/github/v/release/flex-development/unist-util-builder.svg?include_prereleases&sort=semver)](https://github.com/flex-development/unist-util-builder/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/unist-util-builder.svg)](https://npmjs.com/package/@flex-development/unist-util-builder)
[![codecov](https://codecov.io/gh/flex-development/unist-util-builder/graph/badge.svg?token=qZFDFVZtym)](https://codecov.io/gh/flex-development/unist-util-builder)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/unist-util-builder.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits&logoColor=ffffff)](https://conventionalcommits.org/)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript&logoColor=ffffff)](https://typescriptlang.org/)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat&logo=vitest&logoColor=ffffff)](https://vitest.dev/)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat&logo=yarn&logoColor=ffffff)](https://yarnpkg.com/)

[unist][unist] utility to build trees

## Contents

- [What is this?](#what-is-this)
- [When should I use this?](#when-should-i-use-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`u(type[, builder])`](#utype-builder)
    - [`u(type, children`](#utype-children)
    - [`u(type, properties)`](#utype-properties)
    - [`u(type, value`](#utype-value)
  - [`AnyBuilder`](#anybuilder)
  - [`Builder<T>`](#buildert)
  - [`BuilderChildren<[T]>`](#builderchildrent)
  - [`BuilderProps`](#builderprops)
  - [`BuilderValue`](#buildervalue)
- [Types](#types)
- [Related](#related)
- [Contribute](#contribute)

## What is this?

This is a tiny but useful utility for building [*trees*][tree].

## When should I use this?

Use this package when you need to create nodes.

## Install

This package is [ESM only][esm].

In Node.js (version 18+) with [yarn][yarn]:

```sh
yarn add @flex-development/unist-util-builder
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { u } from 'https://esm.sh/@flex-development/unist-util-builder'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { u } from 'https://esm.sh/@flex-development/unist-util-builder'
</script>
```

## Use

```ts
import { u } from '@flex-development/unist-util-builder'
import type { Parent } from 'unist'

const tree: Parent = u('root', [
  u('subtree', {
    children: [
      u('node', [u('leaf', 'leaf 1'), u('leaf', 'leaf 2')]),
      u('leaf', { value: 'leaf 3' }),
      u('void')
    ],
    data: { id: 1 }
  })
])

console.dir(tree, { depth: null })
```

...yields:

```sh
{
  type: 'root',
  children: [
    {
      type: 'subtree',
      children: [
        {
          type: 'node',
          children: [
            { type: 'leaf', value: 'leaf 1' },
            { type: 'leaf', value: 'leaf 2' }
          ]
        },
        { type: 'leaf', value: 'leaf 3' },
        { type: 'void' }
      ],
      data: { id: 1 }
    }
  ]
}
```

## API

This package exports the identifier [`u`](#utype-builder). There is no default export.

### `u(type[, builder])`

Build a node using a [child node array](#utype-children), [properties object](#utype-properties), or
[value](#utype-value).

If `builder` is omitted, a void node (a node with only a `type` field) will be created.

#### Type Parameters

- `T` ([`Node`][node]) - node to build

##### Parameters

- `type` ([`Type<T>`][type]) - node type
- `builder` ([`Builder<T>`](#buildert), optional) - node children, properties, or value

##### Returns

`T` new node.

#### `u(type, children)`

Create a [*parent*][parent].

##### Type Parameters

- `T` ([`Type`][type]) - node type
- `Children` ([`BuilderChildren`](#builderchildrent)) - node children

##### Parameters

- `type` (`T`) - node type
- `children` (`Children`) - node children

##### Returns

`{ children: Children; type: T }` new parent node.

#### `u(type, properties)`

Build a node using a properties object.

> 👉 Properties of a node are all fields except `type`. If a `type` field is on the builder object, it will be ignored.

##### Type Parameters

- `T` ([`Type`][type]) - node type
- `Properties` ([`BuilderProps`](#builderprops)) - node properties

##### Parameters

- `type` (`T`) - node type
- `properties` (`Properties`) - node properties

##### Returns

`Properties & { type: T }` new node.

#### `u(type, value)`

Create a [*literal*][literal].

- `RegExp`
- `bigint`
- `boolean`
- `number`
- `string`
- `null`

> 👉 Undefined literals must be created using a properties object, rather than a value. Passing `undefined` will create
> a void node (a node with only a `type` field).

##### Type Parameters

- `T` ([`Type`][type]) - node type
- `Value` ([`BuilderValue`](#buildervalue)) - node value

##### Parameters

- `type` (`T`) - node type
- `value` (`Value`) - node value

##### Returns

`{ type: T; value: Value }` new literal node.

### `AnyBuilder`

Union of types that can be used to build any node (TypeScript type).

```ts
type AnyBuilder = BuilderChildren | BuilderProps | BuilderValue
```

### `Builder<T>`

Union of node children, properties, and value (TypeScript type).

**See also**: [`MatchChildren`][matchchildren], [`MatchProperties`][matchproperties]

```ts
type Builder<N extends Node = Node> =
  | Extract<MatchValue<N, Type<N>>, BuilderValue>
  | MatchChildren<N, Type<N>>
  | MatchProperties<N, Type<N>>
```

### `BuilderChildren<[T]>`

List of [*child*][child] nodes used to build a [parent] (TypeScript type).

```ts
type BuilderChildren<T extends Node = Node> = T[]
```

### `BuilderProps`

Node properties object (TypeScript type).

> 👉 Properties of a node are all fields except `type`. If a `type` field is present on a builder object, it will be
> ignored.

```ts
type BuilderProps = { [x: string]: unknown }
```

### `BuilderValue`

Union of values that can be used to build a [literal][literal] (TypeScript type).

> 👉 Undefined literals must be created using a properties object, rather than a value. Passing `undefined` will create
> a void node (a node with only a `type` field).

```ts
type BuilderValue = RegExp | bigint | boolean | number | string | null
```

## Types

This package is fully typed with [TypeScript][typescript].

## Related

- [`esast-util-builder`][esast-util-builder] &mdash; build [esast][esast] nodes

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[child]: https://github.com/syntax-tree/unist#child
[esast-util-builder]: https://github.com/flex-development/esast-util-builder
[esast]: https://github.com/flex-development/esast
[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[esmsh]: https://esm.sh/
[literal]: https://github.com/syntax-tree/unist#literal
[matchchildren]: https://github.com/flex-development/unist-util-types#matchchildrenn-check
[matchproperties]: https://github.com/flex-development/unist-util-types#matchpropertiesn-check
[node]: https://github.com/syntax-tree/unist#node
[parent]: https://github.com/syntax-tree/unist#parent
[tree]: https://github.com/syntax-tree/unist#tree
[type]: https://github.com/flex-development/unist-util-types#typet
[typescript]: https://www.typescriptlang.org
[unist]: https://github.com/syntax-tree/unist
[yarn]: https://yarnpkg.com
