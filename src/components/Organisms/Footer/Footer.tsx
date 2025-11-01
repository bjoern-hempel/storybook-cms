import * as React from "react";
import {Container} from "react-bootstrap";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/Footer/Footer.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

/* Import components. */
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {List} from "@/components/Atoms/List/List.tsx";
import {Link} from "@/components/Atoms/Link/Link.tsx";

/* Import constants. */
import {PADDING_CLASS_FOOTER} from "@/utils/paddings.ts";
import {Paragraph} from "@/components/Atoms/Paragraph/Paragraph.tsx";
import {Image} from "@/components/Atoms/Image/Image.tsx";

export interface LinkItem {
    /** Menu label */
    label: string;

    /** Href */
    href?: string;

    /** Click handler */
    onClick?: () => void;
}

export interface HeaderProps {
    /** Name */
    name: string;

    /** Street & house number */
    streetHouseNumber: string;

    /** Zip code & city */
    zipCodeCity: string;

    /** Country */
    country?: string|null;

    /** Telephone */
    telephone: string;

    /** Email */
    email: string;

    /** Homepage */
    homepage: string;

    /** Logo */
    logo: string;

    /** App logo */
    logoApp: string;

    /** Link items */
    linkItems: LinkItem[];
}

/** `Header` organism */
export const Footer = ({
    name,
    streetHouseNumber,
    zipCodeCity,
    country = null,
    telephone,
    email,
    homepage,
    logoApp,
    logo,
    linkItems,
}: HeaderProps) => {

    return (
        <footer className="section-footer">
            <Container className={PADDING_CLASS_FOOTER}>
                <div className="row gy-4">
                    <div className="col-lg-2 col-md-4 text-md-start">
                        <Image src={logoApp} alt={`App logo`} classNames={`logo-app mb-0`} />
                    </div>

                    <div className="col-lg-4 col-md-8 text-md-start">
                        <Title title={`Kontakt`} type={`h4`} alignment={`left`} classNames={`fw-bold`} />
                        <address className="mb-0">
                            <Paragraph
                                text={`
                                    <strong>${name}</strong><br />
                                    ${streetHouseNumber}<br />
                                    ${zipCodeCity}<br />
                                    ${country ?? null}
                                `}
                                classNames={`address mb-3`}
                            />

                            <div className={`contact mb-1`}>
                                <span className={`caption`}><strong>Telefon</strong>:</span>
                                <Link label={telephone} href={telephone} hrefType={`tel`} color={`light`} underlineOffset={`offset-3`} underlineOpacity={`opacity-25`} underlineOpacityHover={`opacity-100`} />
                            </div>
                            <div className={`contact mb-1`}>
                                <span className={`caption`}><strong>E-Mail</strong>:</span>
                                <Link label={email} href={email} hrefType={`mailto`} color={`light`} underlineOffset={`offset-3`} underlineOpacity={`opacity-25`} underlineOpacityHover={`opacity-100`} />
                            </div>
                        </address>
                    </div>

                    <div className="col-lg-4 col-md-8 text-md-start">
                        <Title title={`Information`} type={`h4`} alignment={`left`} classNames={`fw-bold`} />
                        <List
                            items={linkItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    <div className={`mb-1`}>
                                        <Link
                                            label={item.label}
                                            href={item.href}
                                            color={`light`}
                                            target={`_blank`}
                                            underlineOffset={`offset-3`}
                                            underlineOpacity={`opacity-25`}
                                            underlineOpacityHover={`opacity-100`}
                                        />
                                    </div>
                                </React.Fragment>


                            ))}
                            style={`list-unstyled`}
                            classNames={`mb-0`}
                        />
                    </div>

                    <div className="col-lg-2 col-md-4 text-md-start">
                        <a href={`${homepage}`} className="" target="_blank" rel="noopener noreferrer">
                            <img src={logo} alt="Logo" className="img-fluid logo-main" />
                        </a>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col text-center small">
                        ©{new Date().getFullYear()}
                        <span> - </span>
                        <Link
                            label={name}
                            href={homepage}
                            color={`light`}
                            target={`_blank`}
                            underlineOffset={`offset-3`}
                            underlineOpacity={`opacity-25`}
                            underlineOpacityHover={`opacity-100`}
                        />
                    </div>
                </div>
            </Container>
        </footer>
    );
};
