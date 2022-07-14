import { FlexColumn, Paragraph, Title, Container, TextButton, GridImage, Figure, EncreaseWidth } from "../Components";
import { SystemImagesContent, SystemImagesSection, SystemImagesText } from "./HomeComponents";
import { SystemImagesData } from '../../Data/SystemImageData'
import { CgArrowLongRight } from 'react-icons/cg'

const SystemImages = () => {

    const figureStyle = ({
        'width': '-webkit-fill-available',
        'padding': '0',
        'borderRadius': '5px',
        'height': '400px',
        'objectFit': 'cover'
    })

    return (
        <SystemImagesSection>
            <EncreaseWidth>
                <Container>
                    <SystemImagesContent>
                        <SystemImagesText>
                            <Title>
                                Algumas imagens de nosso sistema...
                            </Title>
                            <FlexColumn>
                                <Paragraph>
                                    Algumas de nossas imagens não estão
                                    amostra mas você pode verificar todas
                                    clicando abaixo...
                                </Paragraph>
                                <TextButton>
                                    Verificar todas as imagens
                                    <CgArrowLongRight size={35} />
                                </TextButton>
                            </FlexColumn>
                        </SystemImagesText>
                        <GridImage>
                            {
                                SystemImagesData.slice(0,4).map((item, index) => {
                                    return (
                                        <Figure key={index}>
                                            <img style={figureStyle} src={item.image} alt={item.alt} />
                                        </Figure>
                                    )
                                })
                            }
                        </GridImage>
                    </SystemImagesContent>
                </Container>
            </EncreaseWidth>
        </SystemImagesSection>
    );
}

export default SystemImages;