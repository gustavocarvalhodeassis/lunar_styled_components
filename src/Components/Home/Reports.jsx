import { Button, Container, EncreaseWidth, FlexColumn, FlexRow, Paragraph, SectionTitle, TextButton, Title } from "../Components";
import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg'
import { Counter, ReportAction, ReportBusy, ReportCounter, ReportDesc, ReportImage, ReportIndex, ReportName, ReportsList, ReportsSection, ReportsText } from "./HomeComponents";
import { ReportData } from '../../Data/ReportData'

const Reports = () => {
    return (
        <ReportsSection>
            <EncreaseWidth>
                <Container>
                    <SectionTitle>
                        <Title>O que alguns de nossos clientes disseram sobre o sistema</Title>
                        <FlexColumn>
                            <Paragraph>Algumas de nossas avaliações não estão amostra mas você pode verificar todas clicando abaixo...</Paragraph>
                            <TextButton>
                                Verificar todas as avaliações
                                <CgArrowLongRight size={35} />
                            </TextButton>
                        </FlexColumn>
                    </SectionTitle>
                    <ReportsList>
                        <ReportIndex>
                            <ReportImage src={"https://images.unsplash.com/photo-1657705449236-abab074d0f47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"} />
                            <FlexColumn>
                                <ReportDesc>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    In nec magna id ex mollis
                                    mollis. Curabitur sed neque at
                                    turpis blandit sodales ac a
                                    libero.
                                </ReportDesc>
                                <FlexRow style={({ 'align-items': 'center' })}>
                                    <ReportName>
                                        Nome pessoa -&nbsp;
                                    </ReportName>
                                    <ReportBusy>
                                        empresa
                                    </ReportBusy>
                                </FlexRow>
                                <ReportAction>
                                    <Button>
                                        <CgArrowLongLeft size={25} color={'#A279F7'} />
                                    </Button>
                                    <Button >
                                        <CgArrowLongRight size={45} color={'var(--primary-color)'} />
                                    </Button>
                                </ReportAction>
                                <ReportCounter>
                                    <Counter />
                                    <Counter isActive='true'/>
                                    <Counter />
                                    <Counter />
                                    <Counter />
                                    <Counter />
                                </ReportCounter>
                            </FlexColumn>
                        </ReportIndex>
                    </ReportsList>
                </Container>
            </EncreaseWidth>
        </ReportsSection>
    );
}

export default Reports;