import styled from 'styled-components'

export const HomeSection = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

{/* INTRO */ }
export const IntroSection = styled.section`
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: 2600px) {
        height: auto;
        justify-content: start;
        margin-top: 120px;
    }

    @media screen and (max-height: 630px) {
        height: auto;
        justify-content: start;
        margin-top: 120px;
    }
`

export const IntroWidth = styled.div`
    width: var(--intro-width);
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const MegaTitle = styled.h1`
    font-size: var(--mega-title-font-size);
    font-weight: bold;
    color: var(--high-dark-color);
`
{/* FIM INTRO */ }

{/* ABOUT */ }
export const AboutSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background:var(--low-high-background);
    padding: 40px 0;
`

export const AboutSocialIcons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

export const Icon = styled.div`
    padding: 15px;
    cursor: pointer;
    border-radius: 5px;
    background: rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 5px var(--primary-color) solid;
    transition: var(--main-transition);

    &:active{
        transform: var(--active-transition);
    }
`

export const AboutContent = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const AboutCounterClient = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 960px){
        flex-direction: row;
        margin: 60px 0;
        gap: 20px;
    }
`

export const NumberCounter = styled.h1`
    font-size: 56px;
    color: var(--primary-color);
`

export const AboutCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;

   
    @media screen and (max-width: 960px) {
        margin-top: 40px;
    }
`