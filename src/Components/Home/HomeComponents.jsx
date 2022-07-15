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

    @media screen and (min-height: 1500px) {
        height: auto;
        justify-content: start;
        margin: 120px 0;
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

    @media screen and (min-width: 2600px){
        padding: var(--content-margin);
    }
    @media screen and (max-height: 630px){
        padding: var(--content-margin);
    }
`

export const MegaTitle = styled.h1`
    font-size: var(--mega-title-font-size);
    font-weight: bold;
    text-transform: uppercase;
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
    margin: var(--content-margin);
`

export const Icon = styled.div`
    padding: 15px;
    cursor: pointer;
    border-radius: 5px;
    background: rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
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
{/* FIM ABOUT */ }

{/* SYSTEM IMAGES */ }

export const SystemImagesSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export const SystemImagesContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--section-title-gap);
`

export const SystemImagesText = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 40px;
    @media screen and (max-width: 960px){
        flex-direction: column;
    }
`

{/* FIM SYSTEM IMAGES */ }

{/* REPORTS */ }

export const ReportsSection = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: var(--content-margin);
`

export const ReportsText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media screen  and (max-width: 960px){
        flex-direction: column;
    }
`

export const ReportsList = styled.div`
    display: flex;
`

export const ReportIndex = styled.div`
    display: flex;
    align-items:center;
    flex-direction: row;
    gap: 100px;

    @media screen and (max-width: 960px) {
        gap: 40px;
    }
    @media screen and (max-width: 755px) {
        flex-direction: column;
    }
`

export const ReportImage = styled.img`
    min-width: 350px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    object-fit: cover;
    border-radius: 5px;

    @media screen and (max-width: 960px){
        width: 100%;
    }
    @media screen and (max-width: 650px) {
        height: 400px;
    }
`

export const ReportDesc = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: var(--high-dark-color);
`

export const ReportName = styled.p`
    color: var(--low-dark-color);
`
export const ReportBusy = styled.p`
    color: var(--low-dark-color);
`

export const ReportAction = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const ReportCounter = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const Counter = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background: ${(props) => (props.isActive ? 'var(--primary-color)' : 'rgba(0,0,0,0.1)')};
    transform: ${(props) => (props.isActive ? 'scale(1.5)' : 'none')}
`

{/* FIM REPORT*/ }

{/* HOME TAKE PART */ }

export const HomeTakePartSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;

    @media screen and (max-width: 650px) {
        flex-direction: column;
    }
`

export const HomeTakePartCol1 = styled.div`
    
`

export const HomeTakePartCol2 = styled.div`
    
`

{/* FIM HOME TAKE PART */ }

