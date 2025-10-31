import * as React from "react";

/* Import assets. */
import '@/assets/css/style.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import styles. */
import '@/components/Atoms/Table/Table.scss';

/* Import types. */
import type {TypeClassNames} from "@/utils/classNames.ts";

/* Import utils. */
import {applyMarginClass, normalizeClassNames} from "@/utils/classNames.ts";

/* Import constants. */
import {MARGIN_CLASS_TABLE} from "@/utils/margins.ts";

export interface TableProps {
    /** Header contents. */
    headers: string[];

    /** Table contents. */
    rows: (string | React.ReactNode)[][];

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
        <>
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
                        <tr key={rIdx}>
                            {row.map((cell, cIdx) => {
                                if (cIdx === 0) {
                                    return (
                                        <td key={cIdx}><strong>{cell}</strong></td>
                                    );
                                }

                                return (
                                    <td key={cIdx}>{cell}</td>
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
                                <tr key={rIdx} className={`${cIdx === 0 ? "row-next" : ""}`}>
                                    <td><strong>{headers[cIdx]}</strong></td>
                                    <td key={cIdx} data-title={headers[cIdx]}>{cell}</td>
                                </tr>
                            );
                        })
                    ))}
                </tbody>
            </table>
        </>

    );
};
