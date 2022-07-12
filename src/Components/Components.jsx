import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: var(--container-max-width);
    padding: var(--container-padding);
`

export const FilledButton = styled.button`
    padding: 15px 40px;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--main-transition);
    border-radius: 50px;
    color: var(--high-light-color);
    font-weight: bold;
    font-size: var(--header-link-font-size);
    border: none;
    outline: none;
    cursor: pointer;

    &:active{
        transform: var(--active-transition);
    }
`