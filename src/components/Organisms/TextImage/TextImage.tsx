/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/TextImage/TextImage.scss';
import TextImageImg from "@/assets/image/text-image.png";

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Button} from "@/components/Atoms/Button/Button.tsx";
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {ColumnLayout} from "@/components/Templates/ColumnLayout/ColumnLayout.tsx";
import * as React from "react";

export interface TextImageProps {
    /** Which title should be displayed? */
    title: string;

    /** What background type to use? */
    backgroundType?: 'dark'|'light';

    /** What is the direction of the image? */
    imageAlignment?: 'right'|'left';

    /** Which column layout? */
    columnLayout?: '66%:33%'|'50%:50%'|'33%:66%';
}

export const TextImage = ({
    title,
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
            <Title title={title} type="h2" className="fw-bold" alignment="left" />

            <Paragraph text={`
                            Der <strong>Digitale Zwilling</strong> ist das virtuelle Abbild eines
                            realen Ortes – etwa eines Stadtteils, Gebäudes oder Energiesystems. Er
                            verbindet reale Daten, Modelle und Simulationen zu einem lebendigen,
                            interaktiven Erlebnis, das technische Zusammenhänge verständlich,
                            anschaulich und beteiligungsfähig macht.
                        `} alignment={`left`} />

            <Paragraph text={`
                            Hinter dem sichtbaren 3D-Modell steckt ein wissenschaftlich fundiertes
                            digitales Modell, das physikalische Gegebenheiten unter pseudo­realen
                            Bedingungen abbildet. So lassen sich Energieflüsse, Verbrauch,
                            Steuerungsstrategien oder CO₂-Einsparpotenziale präzise simulieren –
                            und gleichzeitig verständlich kommunizieren.
                        `} alignment={`left`} />

            <Paragraph text={`
                            Komplexe Energiezukunft, einfach erklärt.
                        `} alignment={`left`} className={`mb-4`} />

            <Button
                label="Kontaktieren Sie uns für mehr Informationen."
                onClick={() => {
                    document.getElementById('kontakt')?.scrollIntoView({
                        behavior: 'smooth',
                    });
                }}
                primary
            />
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
