import { AboutCards, AboutContent, AboutCounterClient, AboutSection, AboutSocialIcons, Icon, NumberCounter } from "./HomeComponents";
import { CgFacebook, CgInstagram, CgTwitter, CgFileDocument, CgFolder, CgDollar } from 'react-icons/cg'
import { Card, CardTitle, Container, ContentMargin, EncreaseWidth, FlexColumn, Title } from "../Components";

const About = () => {

    const customColorStyle = (color) => ({
        'color': color
    })

    return (
        <AboutSection>
                <AboutSocialIcons>
                    <Icon><CgFacebook size={35} color={'rgba(0,0,0,0.5)'}/></Icon>
                    <Icon><CgInstagram size={35} color={'rgba(0,0,0,0.5)'}/></Icon>
                    <Icon><CgTwitter size={35} color={'rgba(0,0,0,0.5)'}/></Icon>
                </AboutSocialIcons>
            <EncreaseWidth>
                <Container>
                    <AboutContent>
                        <AboutCounterClient>
                            <NumberCounter>
                                99+
                            </NumberCounter>
                            <Title style={customColorStyle('#463E6D')}>
                                Clientes
                                e representantes
                                pelo Brasil.
                            </Title>
                        </AboutCounterClient>
                        <FlexColumn>
                            <Title>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                In nec magna id ex mollis
                                mollis.
                            </Title>
                            <AboutCards>
                                <Card background={'1'}>
                                    <CgFileDocument size={35} color={'var(--high-light-color)'} />
                                    <CardTitle style={customColorStyle('var(--high-light-color)')}>
                                        Documentos
                                        <br />Fiscais.</CardTitle>
                                </Card>
                                <Card>
                                    <CgFolder size={35} color={'var(--high-dark-color)'} />
                                    <CardTitle style={customColorStyle('var(--high-dark-color)')}>
                                        Controle
                                        <br />De estoque.</CardTitle>
                                </Card>
                                <Card>
                                    <CgDollar size={35} color={'var(--high-dark-color)'} />
                                    <CardTitle style={customColorStyle('var(--high-dark-color)')}>
                                        Controle
                                        <br />Financeiro.</CardTitle>
                                </Card>
                            </AboutCards>
                        </FlexColumn>
                    </AboutContent>
                </Container>
            </EncreaseWidth>
        </AboutSection>
    );
}

export default About;