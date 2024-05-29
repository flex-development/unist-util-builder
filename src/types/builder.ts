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
 * Union of types used to build a node.
 *
 * @template {Node} [N=Node] - Node to build
 */
type Builder<N extends Node = Node> =
  | Extract<MatchValue<N, Type<N>>, BuilderValue>
  | MatchChildren<N, Type<N>>
  | MatchProperties<N, Type<N>>

export type { Builder as default }
