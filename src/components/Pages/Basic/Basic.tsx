import * as React from "react";

/* Import components. */
import {Header, type HeaderProps} from "@/components/Organisms/Header/Header";
import {Hero, type HeroProps} from "@/components/Organisms/Hero/Hero.tsx";
import {TextImage, type TextImageProps} from "@/components/Organisms/TextImage/TextImage.tsx";

/* Import assets. */
import '@/components/Pages/Basic/Basic.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

export interface BasicProps {
    content: {
        header: HeaderProps,
        hero: HeroProps,
        textImage: TextImageProps,
    };
}

export const Basic: React.FC<BasicProps> = ({
    content: { header, hero, textImage },
}) => {
    return (
        <article>
            <Header {...header} />
            <Hero {...hero} />
            <TextImage {...textImage} />
        </article>
    );
};
