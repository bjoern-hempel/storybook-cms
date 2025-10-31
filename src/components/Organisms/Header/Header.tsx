import {Container, Nav, Navbar} from "react-bootstrap";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/Header/Header.scss';
import Logo from "@/assets/image/logo.png";

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useEffect, useRef} from "react";

export interface MenuItem {
    /** Menu label */
    label: string;

    /** Click handler */
    onClick: () => void;
}

export interface HeaderProps {
    /** Title content */
    title: string;

    /** Subtitle content */
    subtitle: string;

    /** Menu items */
    menuItems: MenuItem[];

    /** Fixed navbar? */
    fixedTop?: boolean;
}

/** `Header` organism */
export const Header = ({
    title,
    subtitle,
    menuItems,
    fixedTop = false
}: HeaderProps) => {
    const navbarRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!fixedTop || !navbarRef.current) {
            document.body.style.paddingTop = "0";
            return;
        }

        const updatePadding = () => {
            const height = navbarRef.current!.offsetHeight;
            document.body.style.paddingTop = `${height}px`;
        };

        updatePadding();
        window.addEventListener("resize", updatePadding);

        return () => {
            window.removeEventListener("resize", updatePadding);
            document.body.style.paddingTop = "0";
        };
    }, [fixedTop]);

    return (
        <header className="section-header">
            <Navbar
                ref={navbarRef}
                expand="lg"
                className={`navbar ${fixedTop ? "fixed-top" : ""}`}
                variant="dark"
            >
                <Container className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src={Logo as string} alt="Logo" className="logo me-3"/>
                        <div className="text-light">
                            <div className="fw-bold">{title}</div>
                            <small>{subtitle}</small>
                        </div>
                    </div>

                    <Nav className="ms-auto">
                        {menuItems.map((item) => (
                            <Nav.Link
                                key={`nav-${item.label}`}
                                onClick={item.onClick}
                                className="text-white fw-semibold me-3"
                            >
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
};
