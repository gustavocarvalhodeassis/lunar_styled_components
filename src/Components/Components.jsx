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
    width: fit-content;
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

export const Title = styled.h1`
    color: var(--high-dark-color);
    font-size: var(--h1-font-size);
`

export const Paragraph = styled.p`
    font-size: var(--p-font-size);
    color: var(--low-dark-color);
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
`
export const EncreaseWidth = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
`

export const ContentMargin = styled.div`
    margin: var(--content-margin);
`

export const Card = styled.div`
    padding: 20px 30px;
    background: ${(props) => (props.background === '1' ? 'var(--primary-color)' : '#E8E8ED')};
    max-width: 210px;
    width: 100%;
    height: 350px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 15px;
    transition: var(--main-transition);
    box-shadow:  0px 15px 20px 0 rgba(0,0,0,0.0);;
    cursor: pointer;

    @media screen and (max-width: 650px){
        max-width: none;
    }

    &:hover{
        transform: scale(1.1);
        box-shadow: var(--shadow);
    }
    &:active{
        transform: scale(1.05);
    }

`