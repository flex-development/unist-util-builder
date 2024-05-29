/**
 * @file Type Aliases - AnyBuilder
 * @module unist-util-builder/types/AnyBuilder
 */

import type BuilderChildren from './builder-children'
import type BuilderProps from './builder-props'
import type BuilderValue from './builder-value'

/**
 * Union of types used to build any node.
 *
 * @see {@linkcode BuilderChildren}
 * @see {@linkcode BuilderProps}
 * @see {@linkcode BuilderValue}
 */
type AnyBuilder = BuilderChildren | BuilderProps | BuilderValue

export type { AnyBuilder as default }
