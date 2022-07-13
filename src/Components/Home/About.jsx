import { AboutCards, AboutContent, AboutCounterClient, AboutSection, AboutSocialIcons, Icon, NumberCounter } from "./HomeComponents";
import { CgFacebook, CgInstagram, CgTwitter, CgFileDocument, CgFolder, CgDollar } from 'react-icons/cg'
import { Card, Container, ContentMargin, EncreaseWidth, FlexColumn, Title } from "../Components";

const About = () => {

    const customColorStyle = (color) => ({
        'color': color
    })

    return (
        <AboutSection>
            <ContentMargin>
                <AboutSocialIcons>
                    <Icon><CgFacebook size={50} /></Icon>
                    <Icon><CgInstagram size={50} /></Icon>
                    <Icon><CgTwitter size={50} /></Icon>
                </AboutSocialIcons>
            </ContentMargin>
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
                                    <Title style={customColorStyle('var(--high-light-color)')}>
                                        Documentos
                                        <br />Fiscais.</Title>
                                </Card>
                                <Card>
                                    <CgFolder size={35} color={'var(--high-dark-color)'} />
                                    <Title>
                                        Controle
                                        <br />De estoque.</Title>
                                </Card>
                                <Card>
                                    <CgDollar size={35} color={'var(--high-dark-color)'} />
                                    <Title>
                                        Controle
                                        <br />Financeiro.</Title>
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