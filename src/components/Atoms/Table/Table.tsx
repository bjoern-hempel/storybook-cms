import * as React from "react";

/* Import assets. */
import '@/assets/css/style.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import styles. */
import '@/components/Atoms/Table/Table.scss';

export interface TableProps {
    /** Header contents. */
    headers: string[];

    /** Table contents. */
    rows: (string | React.ReactNode)[][];

    /** Which class name should be added? */
    className?: string;
}

/** Primary UI component for user interaction */
export const Table = ({
    headers,
    rows,
    className,
}: TableProps) => {

    const isValid = rows.every(row => row.length === headers.length);

    if (!isValid) {
        console.warn("⚠️ Table rows do not match header count.");
    }

    return (
        <table className={`section-table${className ? ` ${className}` : ''}`}>
            <thead>
            <tr>
                {headers.map((h, i) => (
                    <th key={i}>{h}</th>
                ))}
            </tr>
            </thead>

            <tbody>
            {rows.map((row, rIdx) => (
                <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                        <td key={cIdx}>{cell}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};
