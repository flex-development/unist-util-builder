/**
 * @file Type Aliases - BuilderValue
 * @module unist-util-BuilderValue/types/BuilderValue
 */

/**
 * Union of values that can be used to build a [literal][literal].
 *
 * > 👉 Undefined literals must be created using a properties object, rather
 * > than a value. Passing `undefined` will create a void node (a node with only
 * > a `type` field).
 *
 * [literal]: https://github.com/syntax-tree/unist#literal
 */
type BuilderValue = bigint | boolean | number | string | null

export type { BuilderValue as default }
