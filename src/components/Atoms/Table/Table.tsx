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

const classMap = {
    full: "table-bordered",
    half: null,
    none: "table-borderless",
} as const;

/** Primary UI component for user interaction */
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
        <div className="section-table table-responsive">
            <table className={finalClasses}>
                <thead>
                <tr>
                    {headers.map((h, i) => (
                        <th key={i}>{h}</th>
                    ))}
                </tr>
                </thead>

                <tbody className={`${groupDivider ? `table-group-divider` : ``}`}>
                {rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                            <td key={cIdx}>{cell}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
