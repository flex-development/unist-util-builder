/**
 * @file Type Aliases - BuilderProps
 * @module unist-util-BuilderProps/types/BuilderProps
 */

/**
 * Node properties object.
 *
 * > 👉 Properties of a node are all fields except `type`. If a `type` field is
 * > present on a builder object, it will be ignored.
 */
type BuilderProps = { [x: string]: unknown }

export type { BuilderProps as default }
