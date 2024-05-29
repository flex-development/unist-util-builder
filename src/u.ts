/**
 * @file u
 * @module unist-util-builder/u
 */

import type { Type } from '@flex-development/unist-util-types'
import type { Literal, Node, Parent } from 'unist'
import type {
  AnyBuilder,
  Builder,
  BuilderChildren,
  BuilderProps,
  BuilderValue
} from './types'

/**
 * Build a [*leaf*][leaf] without a value.
 *
 * [leaf]: https://github.com/syntax-tree/unist#leaf
 *
 * @see {@linkcode Type}
 *
 * @template {Type} [T=Type] - Node type
 *
 * @param {T} type - Node type
 * @return {{ type: T }} New node
 */
function u<T extends Type>(type: T): { type: T }

/**
 * Build a [*parent*][parent].
 *
 * [parent]: https://github.com/syntax-tree/unist#parent
 *
 * @see {@linkcode BuilderChildren}
 * @see {@linkcode Type}
 *
 * @template {Type} [T=Type] - Node type
 * @template {BuilderChildren} [Children=Node[]] - Node children
 *
 * @param {T} type - Node type
 * @param {Children} children - Node children
 * @return {{ children: Children, type: T }} New parent node
 */
function u<T extends Type, Children extends BuilderChildren = BuilderChildren>(
  type: T,
  children: Children
): { children: Children; type: T }

/**
 * Build a node using a properties object.
 *
 * > 👉 Properties of a node are all fields except `type`. If a `type` field is
 * > on the builder object, it will be ignored.
 *
 * @see {@linkcode BuilderProps}
 * @see {@linkcode Type}
 *
 * @template {Type} [T=Type] - Node type
 * @template {BuilderProps} [Properties=BuilderProps] - Node properties
 *
 * @param {T} type - Node type
 * @param {Properties} properties - Node properties
 * @return {Properties & { type: T }} New node
 */
function u<T extends Type, Properties extends BuilderProps = BuilderProps>(
  type: T,
  properties: Properties
): Properties & { type: T }

/**
 * Build a [*literal*].
 *
 * The following types can be used as builder values:
 *
 * - `RegExp`
 * - `bigint`
 * - `boolean`
 * - `number`
 * - `string`
 * - `null`
 *
 * > 👉 Undefined literals must be created using a properties object, rather
 * > than a value. Passing `undefined` will create a void node (a node with only
 * > a `type` field).
 *
 * [literal]: https://github.com/syntax-tree/unist#literal
 *
 * @see {@linkcode BuilderValue}
 * @see {@linkcode Type}
 *
 * @template {Type} [T=Type] - Node type
 * @template {BuilderValue} [Value=BuilderValue] - Node value
 *
 * @param {T} type - Node type
 * @param {Value} value - Node value
 * @return {{ type: T, value: Value }} New literal node
 */
function u<T extends Type, Value extends BuilderValue = BuilderValue>(
  type: T,
  value: Value
): { type: T; value: Value }

/**
 * Build a node using a child node array, properties object, or value.
 *
 * If `builder` is omitted, a void node (a node with only a type field) will be
 * created.
 *
 * The following types can be used as builder values:
 *
 * - `RegExp`
 * - `bigint`
 * - `boolean`
 * - `number`
 * - `string`
 * - `null`
 *
 * > 👉 Undefined literals must be created using a properties object, rather
 * > than a value. Passing `undefined` will create a void node.
 *
 * @see {@linkcode Builder}
 * @see {@linkcode Node}
 * @see {@linkcode Type}
 *
 * @template {Node} [T=Node] - Node to build
 *
 * @param {Type<T>} type - Node type
 * @param {Builder<T>?} [builder] - Node children, properties, or value
 * @return {T} New node
 */
function u<T extends Node = Node>(type: Type<T>, builder?: Builder<T>): T

/**
 * Build a node using a child node array, properties object, or value.
 *
 * If `builder` is omitted, a void node (a node with only a type field) will be
 * created.
 *
 * The following types can be used as builder values:
 *
 * - `RegExp`
 * - `bigint`
 * - `boolean`
 * - `number`
 * - `string`
 * - `null`
 *
 * > 👉 Undefined literals must be created using a properties object, rather
 * > than a value. Passing `undefined` will create a void node.
 *
 * @see {@linkcode AnyBuilder}
 * @see {@linkcode Literal}
 * @see {@linkcode Node}
 * @see {@linkcode Parent}
 *
 * @param {string} type - Node type
 * @param {AnyBuilder?} [builder] - Node children, properties, or value
 * @return {Node | Parent | Literal} New node
 */
function u(type: string, builder?: AnyBuilder): Literal | Node | Parent {
  /**
   * New node.
   *
   * @const {Node} node
   */
  const node: Node = { type: String(type) }

  // build node
  if (builder !== undefined) {
    if (Array.isArray(builder)) {
      ;(<Parent>node).children = builder
    } else if (
      !(builder instanceof RegExp) &&
      typeof builder === 'object' &&
      builder !== null
    ) {
      /**
       * Node properties.
       *
       * @const {BuilderProps} properties
       */
      const properties: BuilderProps = { ...builder }

      Reflect.deleteProperty(properties, 'type')
      Object.assign(node, properties)
    } else {
      ;(<Literal>node).value = builder
    }
  }

  return node
}

export default u
