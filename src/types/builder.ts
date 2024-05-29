/**
 * @file Type Aliases - Builder
 * @module unist-util-builder/types/Builder
 */

import type {
  MatchChildren,
  MatchProperties,
  MatchValue,
  Type
} from '@flex-development/unist-util-types'
import type { Node } from 'unist'
import type BuilderValue from './builder-value'

/**
 * Union of node children, properties, and value.
 *
 * @see {@linkcode BuilderValue}
 * @see {@linkcode MatchChildren}
 * @see {@linkcode MatchProperties}
 * @see {@linkcode MatchValue}
 * @see {@linkcode Type}
 *
 * @template {Node} [N=Node] - Node to build
 */
type Builder<N extends Node = Node> =
  | Extract<MatchValue<N, Type<N>>, BuilderValue>
  | MatchChildren<N, Type<N>>
  | MatchProperties<N, Type<N>>

export type { Builder as default }
