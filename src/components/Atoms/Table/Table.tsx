/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import * as React from "react";
import type {ReactNode} from "react";

/* Import assets. */
import '@/assets/css/style.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import styles. */
import '@/components/Atoms/Table/Table.scss';

/* Import types. */
import type {TypeClassNames} from "@/types/common-types.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_TABLE} from "@/constants/margins.ts";

export interface TableProps {
    /** Header contents. */
    headers: string[];

    /** Table contents. */
    rows: (string | ReactNode)[][];

    /** Show border? */
    bordered: "full" | "half" | "none";

    /** Show group divider? */
    groupDivider: boolean;

    /** Transparent background? */
    transparentBackground: boolean;

    /** Additional class names */
    classNames?: TypeClassNames;
}

/** `Table` atom */
export const Table = ({
    headers,
    rows,
    bordered,
    groupDivider = false,
    transparentBackground = true,
    classNames = null,
}: TableProps) => {
    const isValid = rows.every(row => row.length === headers.length);

    if (!isValid) {
        console.warn("⚠️ Table rows do not match header count.");
    }

    const classMap = {
        full: "table-bordered",
        half: "table-bordered-half",
        none: groupDivider ? "table-bordered-none" : "table-borderless",
    } as const;

    const marginClass = applyMarginClass(MARGIN_CLASS_TABLE, classNames);
    const borderClass = classMap[bordered] ?? null;

    const finalClasses = [
        "table",
        transparentBackground ? "table-transparent" : null,
        borderClass,
        marginClass,
        ...normalizeClassNames(classNames),
    ].filter(Boolean).join(" ");

    return (
        <div className="last-content">
            <table className={`section-table ${finalClasses}${groupDivider ? ` group-divider` : ``}`}>
                <thead>
                <tr>
                    {headers.map((header, i) => (
                        <th key={i}>{header}</th>
                    ))}
                </tr>
                </thead>

                <tbody className={`${groupDivider ? `table-group-divider` : ``}`}>
                    {rows.map((row, rIdx) => (
                        <tr key={`tr-${rIdx}`}>
                            {row.map((cell, cIdx) => {
                                if (cIdx === 0) {
                                    return (
                                        <td key={`td-${cIdx}`}><strong>{cell}</strong></td>
                                    );
                                }

                                return (
                                    <td key={`td-${cIdx}`}>{cell}</td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className={`section-table-mobile ${finalClasses}${groupDivider ? ` group-divider` : ``}`}>
                <tbody>
                    {rows.map((row, rIdx) => (
                        row.map((cell, cIdx) => {
                            return (
                                <tr key={`tr-${rIdx}-${cIdx}`} className={`${cIdx === 0 ? "row-next" : ""}`}>
                                    <td><strong>{headers[cIdx]}</strong></td>
                                    <td>{cell}</td>
                                </tr>
                            );
                        })
                    ))}
                </tbody>
            </table>
        </div>

    );
};
