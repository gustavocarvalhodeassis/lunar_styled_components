import { Header, Nav, NavLinks, NavLink, MenuIcon, MenuLine } from "./NavBarComponents";
import { Container, FilledButton } from "../Components";
import Logo from "../Logo/Logo";
import { useState } from "react";
const NavBar = () => {

    let [openMenu, setMenu] = useState(false)

    return (
        <Header>
            <Container>
                <Nav>
                    <Logo />
                    <MenuIcon openMenu={openMenu} onClick={() => setMenu((curr) => !curr)}>
                        <MenuLine />
                        <MenuLine />
                        <MenuLine />
                    </MenuIcon>
                    <NavLinks openMenu={openMenu}>
                        <NavLink onClick={() => setMenu((curr) => curr = false)}>
                            Inicio
                        </NavLink>
                        <NavLink onClick={() => setMenu((curr) => curr = false)}>
                            Sobre
                        </NavLink>
                        <NavLink onClick={() => setMenu((curr) => curr = false)}>
                            Paineis
                        </NavLink>
                        <FilledButton onClick={() => setMenu((curr) => curr = false)}>
                            Fazer Parte!
                        </FilledButton>
                    </NavLinks>

                </Nav>
            </Container>
        </Header>
    );
}

export default NavBar;