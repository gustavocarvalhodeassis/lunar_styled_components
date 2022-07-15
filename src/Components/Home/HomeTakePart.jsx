import { Container, EncreaseWidth, Paragraph, SectionTitle, Title } from "../Components";
import { HomeTakePartCol1, HomeTakePartCol2, HomeTakePartSection } from "./HomeComponents";

const HomeTakePart = () => {
    return (
        <HomeTakePartSection>
            <EncreaseWidth>
                <Container>
                    <SectionTitle>
                        <HomeTakePartCol1>
                            <Title>
                                Venha ser representante Lunar Software.
                            </Title>
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Paragraph>
                        </HomeTakePartCol1>
                        <HomeTakePartCol2>
                            <Title>
                                Venha ser representante Lunar Software.
                            </Title>
                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Paragraph>
                        </HomeTakePartCol2>
                    </SectionTitle>
                </Container>
            </EncreaseWidth>
        </HomeTakePartSection>
    );
}

export default HomeTakePart;