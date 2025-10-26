import {Container, Nav, Navbar} from "react-bootstrap";

/* Import assets. */
import '@/assets/css/style.scss';
import '@/components/Organisms/Header/Header.scss';
import Logo from "@/assets/image/logo.png";

/* Import bootstrap. */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

export interface MenuItem {
    label: string;
    onClick: () => void;
}

export interface HeaderProps {
    title: string;
    subtitle: string;
    menuItems: MenuItem[];
}

export const Header = ({title, subtitle, menuItems}: HeaderProps) => (
    <header className="section-header">
        <Navbar
            expand="lg"
            className="navbar"
            variant="dark"
        >
            <Container className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={Logo as string} alt="Logo" className="logo me-3" />
                    <div className="text-light">
                        <div className="fw-bold">{ title }</div>
                        <small>{ subtitle }</small>
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
