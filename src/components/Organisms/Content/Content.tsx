import {ReactNode} from "react";
import * as React from "react";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/Content/Content.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import components. */
import {Button} from "@/components/Atoms/Button/Button.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {RowLayout} from "@/components/Templates/RowLayout/RowLayout.tsx";

export type TextChildItem = Title | Paragraph | Button;

export interface ContentProps {
    /* Which content should be displayed? */
    textChildren: TextChildItem[];

    /** What background type to use? */
    backgroundType: 'dark'|'light';
}

/** `Content` organism (`RowLayout` alias) */
export const Content = ({
    textChildren,
    backgroundType = 'dark',
}: ContentProps) => {
    const Content: React.FC = () => (
        <>
            {textChildren.map((child, index) => (
                <React.Fragment key={index}>{child as ReactNode}</React.Fragment>
            ))}
        </>
    );

    return (
        <RowLayout backgroundType={backgroundType} isContained={true}>
            <Content />
        </RowLayout>
    );
};
