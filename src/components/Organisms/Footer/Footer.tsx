import {Container} from "react-bootstrap";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/Footer/Footer.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {PADDING_CLASS_FOOTER} from "@/utils/paddings.ts";
import {Title} from "@/components/Atoms/Title/Title.tsx";
import {List} from "@/components/Atoms/List/List.tsx";

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
                    <div className="col-md-2 text-center text-md-start">
                        <img src={logoApp} alt="Logo" className="img-fluid logo-1" />
                    </div>

                    <div className="col-md-4 text-center text-md-start">
                        <Title title={`Kontakt`} type={`h4`} alignment={`left`} classNames={`fw-bold`} />
                        <address className="mb-0">
                            <div><strong>{name}</strong></div>
                            <div>{streetHouseNumber}</div>
                            <div>{zipCodeCity}</div>
                            {
                                country && <div>{country}</div>
                            }
                            <div>&nbsp;</div>
                            <div><strong>Telefon</strong>: {telephone}</div>
                            <div><strong>E-Mail</strong>: <a href={`mailto:${email}`} className="text-white text-decoration-underline">{email}</a></div>
                        </address>
                    </div>

                    <div className="col-md-4 text-center text-md-start">
                        <Title title={`Information`} type={`h4`} alignment={`left`} classNames={`fw-bold`} />
                        <List
                            items={linkItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href ? item.href : '#'}
                                    onClick={item.onClick ? item.onClick : () => {}}
                                    className="text-white text-decoration-underline d-block"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.label}
                                </a>
                            ))}
                            style={`list-unstyled`}
                            classNames={`mb-0`}
                        />
                    </div>

                    <div className="col-md-2 text-center text-md-end">
                        <a href={`${homepage}`} className="" target="_blank" rel="noopener noreferrer">
                            <img src={logo} alt="Logo" className="img-fluid" />
                        </a>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col text-center small">
                        ©{new Date().getFullYear()} <a href={`${homepage}`} className="text-white text-decoration-underline" target="_blank" rel="noopener noreferrer">{name}</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
