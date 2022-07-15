import { Header, Nav, NavLinks, NavLink, MenuIcon, MenuLine } from "./NavBarComponents";
import { Container, FilledButton } from "../Components";
import Logo from "../Logo/Logo";
import { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
const NavBar = () => {

    let [openMenu, setMenu] = useState(false)

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos
            ||
            prevScrollpos > currentScrollPos) {
            setMenu((openMenu = false))
        }
        prevScrollpos = currentScrollPos;
    };

    return (
        <Header>
            <Container>
                <Nav>
                    <Logo />
                    <MenuIcon openMenu={openMenu} onClick={() => setMenu((curr) => !curr)}>
                        {
                            openMenu
                                ?
                                <CgClose size={25} color={'var(--high-dark-color)'} />
                                :
                                <CgMenu size={25} color={'var(--high-dark-color)'} />
                        }
                    </MenuIcon>
                    <NavLinks openMenu={openMenu}>
                        <NavLink onClick={() => setMenu((curr) => !curr)}>
                            Inicio
                        </NavLink>
                        <NavLink onClick={() => setMenu((curr) => !curr)}>
                            Sobre
                        </NavLink>
                        <NavLink onClick={() => setMenu((curr) => !curr)}>
                            Paineis
                        </NavLink>
                        <FilledButton onClick={() => setMenu((curr) => !curr)}>
                            Fazer Parte!
                        </FilledButton>
                    </NavLinks>

                </Nav>
            </Container>
        </Header>
    );
}

export default NavBar;