import * as React from "react";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/TextImage/TextImage.scss';
import TextImageImg from "@/assets/image/text-image.png";

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import components. */
import {Button} from "@/components/Atoms/Button/Button.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";
import {ReactNode} from "react";
import {RowLayout} from "@/components/Templates/RowLayout/RowLayout.tsx";

export type TextChildItem = Title | Paragraph | Button;

export interface TextImageProps {
    /* Which content should be displayed? */
    textChildren: TextChildItem[];

    /** What background type to use? */
    backgroundType: 'dark'|'light';

    /** What is the direction of the image? */
    imageAlignment?: 'right'|'left';

    /** Which column layout? */
    columnLayout?: '66%:33%'|'50%:50%'|'33%:66%';
}

export const TextImage = ({
    textChildren,
    backgroundType = 'dark',
    imageAlignment = 'right',
    columnLayout = '66%:33%',
}: TextImageProps) => {
    const isImageLeft = imageAlignment === 'left';

    const Image: React.FC = () => (
        <img
            src={TextImageImg as string}
            alt="Digitale Zwilling Illustration"
            className="img-fluid feature-image"
        />
    );

    const Text: React.FC = () => (
        <>
            {textChildren.map((child, index) => (
                <React.Fragment key={index}>{child as ReactNode}</React.Fragment>
            ))}
        </>
    );

    if (isImageLeft) {
        return (
            <ColumnLayout layout={columnLayout} backgroundType={backgroundType} isContained={true}>
                <Image />
                <Text />
            </ColumnLayout>
        );
    }

    return (
        <ColumnLayout layout={columnLayout} backgroundType={backgroundType} isContained={true}>
            <Text />
            <Image />
        </ColumnLayout>
    );
};
