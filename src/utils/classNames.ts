export const MARGIN_REGEX = /^(m|mx|my|mt|mb|ms|me)-\d+$/;

export type TypeClassNames = string | string[] | null;

/**
 * Returns the desired margin class if the existing className set does not yet contain a margin class.
 *
 * Otherwise: null.
 */
export function applyMarginClass(
    desiredMargin: string,
    existing: string | string[] | null | undefined
): string | null {

    const existingClasses = existing
        ? (Array.isArray(existing)
            ? existing
            : existing.split(/\s+/).filter(Boolean))
        : [];

    const hasMarginClass = existingClasses.some(cls => MARGIN_REGEX.test(cls));

    return hasMarginClass ? null : desiredMargin;
}

/**
 * Normalizes various className input formats into a clean string array.
 *
 * Accepts:
 * - A single class string: "btn btn-primary"
 * - An array of classes: ["btn", "btn-primary"]
 * - null or undefined (treated as no classes)
 *
 * Returns:
 * - A flat array of class names with empty entries removed.
 *
 * Example:
 * normalizeClassNames("btn   btn-primary  ") → ["btn", "btn-primary"]
 * normalizeClassNames(["btn", "btn-primary"]) → ["btn", "btn-primary"]
 */
export const normalizeClassNames = (
    classNames: TypeClassNames | undefined
): string[] => {
    if (!classNames) return [];
    return Array.isArray(classNames)
        ? classNames
        : classNames.split(/\s+/).filter(Boolean);
};
