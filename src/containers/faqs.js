import { Accordion } from '../components';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>자주 묻는 질문</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>멤버십 재가입</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>
                    넷플릿스를 시청할 준비가 되셨습니까? 
                    계정을 생성하거나 멤버십에 가입하세요!
                </OptForm.Text>
            </OptForm>
        </Accordion>
    );
}