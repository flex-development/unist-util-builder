/**
 * @file Type Aliases - BuilderChildren
 * @module unist-util-BuilderChildren/types/BuilderChildren
 */

import type { Node } from 'unist'

/**
 * List of [*child*][child] nodes used to build a [parent].
 *
 * [child]: https://github.com/syntax-tree/unist#child
 * [parent]: https://github.com/syntax-tree/unist#parent
 *
 * @template {Node} [T=Node] - Child node
 */
type BuilderChildren<T extends Node = Node> = T[]

export type { BuilderChildren as default }
