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
import {Button, type ButtonProps} from "@/components/Atoms/Button/Button.tsx";
import {Title, type TitleProps} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph, type ParagraphProps} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";

export type TextBlockItem =
    | { type: "Title"; props: TitleProps; }
    | { type: "Paragraph"; props: ParagraphProps; }
    | { type: "Button"; props: ButtonProps;
};

export interface TextImageProps {
    /* Which content should be displayed? */
    textContent: TextBlockItem[];

    /** What background type to use? */
    backgroundType?: 'dark'|'light';

    /** What is the direction of the image? */
    imageAlignment?: 'right'|'left';

    /** Which column layout? */
    columnLayout?: '66%:33%'|'50%:50%'|'33%:66%';
}

export const TextImage = ({
    textContent,
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
            {textContent.map((block, index) => {
                switch (block.type) {
                    case "Title":
                        return <Title key={index} {...block.props} />;
                    case "Paragraph":
                        return <Paragraph key={index} {...block.props} />;
                    case "Button":
                        return <Button key={index} {...block.props} />;
                    default:
                        return null;
                }
            })}
        </>
    );

    if (isImageLeft) {
        return (
            <ColumnLayout layout={columnLayout} backgroundType={backgroundType}>
                <Image />
                <Text />
            </ColumnLayout>
        );
    }

    return (
        <ColumnLayout layout={columnLayout} backgroundType={backgroundType}>
            <Text />
            <Image />
        </ColumnLayout>
    );
};
