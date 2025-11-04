/*
 * This file is part of the https://github.com/bjoern-hempel/storybook-cms project.
 *
 * (c) 2025 Björn Hempel <bjoern@hempel.li>
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import {useEffect, useRef} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/Header/Header.scss';

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

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

    /** Logo */
    logo: string;

    /** Menu items */
    menuItems: MenuItem[];

    /** Fixed navbar? */
    fixedTop?: boolean;
}

/** `Header` organism */
export const Header = ({
    title,
    subtitle,
    logo,
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
                        <img src={logo} alt="Logo" className="logo me-2" />
                        <div className="text-light d-none d-lg-flex flex-column">
                            <span className="fw-bold">{title}</span>
                            <small>{subtitle}</small>
                        </div>
                    </div>
                    <Navbar.Toggle aria-controls="main-nav" />
                    <Navbar.Collapse id="main-nav" className="justify-content-end">
                        <Nav>
                            {menuItems.map((item) => (
                                <Nav.Link
                                    key={`nav-${item.label}`}
                                    onClick={item.onClick}
                                    className="text-white fw-semibold me-lg-3"
                                >
                                    {item.label}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>

    );
};
