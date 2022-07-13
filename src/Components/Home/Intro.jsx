import { Paragraph, FilledButton, Container, EncreaseWidth, ContentMargin } from "../Components";
import { IntroSection, IntroWidth, MegaTitle, HomeSection } from "./HomeComponents";


const Intro = () => {
    return (

        <EncreaseWidth>
            <ContentMargin>
                <Container>
                    <IntroSection>
                        <IntroWidth>
                            <MegaTitle>
                                Sistema de gestão empresarial.
                            </MegaTitle>
                            <Paragraph>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing
                                elit. In nec magna id
                                ex mollis mollis. Curabitur
                                sed neque at turpis blandit
                                sodales ac a libero.
                            </Paragraph>
                            <FilledButton>
                                Saiba mais
                            </FilledButton>
                        </IntroWidth>
                    </IntroSection>
                </Container>
            </ContentMargin>
        </EncreaseWidth>

    );
}

export default Intro;