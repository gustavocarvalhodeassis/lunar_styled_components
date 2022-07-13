import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: var(--high-light-background);
    
    @media screen and (max-width: 890px) {
        padding: 20px 0
    }
`

export const Nav = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

export const NavLinks = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    transition: var(--main-transition);

    @media screen and (max-width: 890px) {
        position: fixed;
        flex-direction: column;
        padding: 30px;
        background: var(--high-light-background);
        box-shadow: var(--shadow);
        border-radius: 5px;
        right: 40px;
        top: 60px;
        transform: ${(props) => (props.openMenu ? 'none' : 'translate(120%,0)')};
    }
`

export const NavLink = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-weight: bold;
    font-size: var(--header-link-font-size);
    color: var(--high-dark-color);
    cursor: pointer;
    transition: var(--main-transition);

    &:hover{
        background-color: rgba(0,0,0,0.05);
    } &:active{
        background-color: rgba(0,0,0,0.08);
        transform: var(--active-transition);
    }
`

export const MenuIcon = styled.div`
    display: none;
    gap: 5px;
    flex-direction: column;
    padding: 15px;
    background-color: ${(props) => (props.openMenu ? 'rgba(0,0,0,0.08)' : '#fff')};
    border-radius: 50px;
    transition: all 0.25s ease;
    cursor: pointer;

    &:hover{
        background-color: rgba(0,0,0,0.05);
    } &:active{
        transform: var(--active-transition);
    }

    @media screen and (max-width: 890px) {
        display: flex;
    }
`

export const MenuLine = styled.div`
    width: 25px;
    height: 3px;
    background: var(--high-dark-color);
`