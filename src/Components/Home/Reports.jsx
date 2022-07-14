import { Container, EncreaseWidth, FlexColumn, Paragraph, TextButton, Title } from "../Components";
import { CgArrowLongRight } from 'react-icons/cg'
import { ReportBusy, ReportDesc, ReportImage, ReportIndex, ReportName, ReportsList, ReportsSection, ReportsText } from "./HomeComponents";
import { ReportData } from '../../Data/ReportData'

const Reports = () => {
    return (
        <ReportsSection>
            <EncreaseWidth>
                <Container>
                    <ReportsText>
                        <Title>O que alguns de nossos clientes disseram sobre o sistema</Title>
                        <FlexColumn>
                            <Paragraph>Algumas de nossas avaliações não estão amostra mas você pode verificar todas clicando abaixo...</Paragraph>
                            <TextButton>
                                Verificar todas as avaliações
                                <CgArrowLongRight size={35}/>
                            </TextButton>
                        </FlexColumn>
                    </ReportsText>
                    <ReportsList>
                        <ReportIndex>
                            <ReportImage>
                                <img />
                            </ReportImage>
                            <FlexColumn>
                                <ReportDesc>

                                </ReportDesc>
                                <ReportName>

                                </ReportName>
                                <ReportBusy>

                                </ReportBusy>
                                {/*<ReportCounter>
                                                    <Counter>

                                                    </Counter>
                                    </ReportCounter>*/}
                            </FlexColumn>
                        </ReportIndex>
                    </ReportsList>
                </Container>
            </EncreaseWidth>
        </ReportsSection>
    );
}

export default Reports;