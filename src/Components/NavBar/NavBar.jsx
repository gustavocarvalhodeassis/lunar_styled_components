import { Header, Nav, NavLinks, NavLink, MenuIcon, MenuLine } from "./NavBarComponents";
import { Container, FilledButton } from "../Components";
import Logo from "../Logo/Logo";

const NavBar = () => {
    return (
        <Header>
            <Container>
                <Nav>
                    <Logo />
                    <MenuIcon>
                        <MenuLine />
                        <MenuLine />
                        <MenuLine />
                    </MenuIcon>
                    <NavLinks>
                        <NavLink>
                            Inicio
                        </NavLink>
                        <NavLink>
                            Sobre
                        </NavLink>
                        <NavLink>
                            Paineis
                        </NavLink>
                        <FilledButton>
                            Fazer Parte!
                        </FilledButton>
                    </NavLinks>
                </Nav>
            </Container>
        </Header>
    );
}

export default NavBar;