import { Feature, OptForm } from "../components";
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';


export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        영화, TV 프로그램을 <br/>무제한으로.
                    </Feature.Title>
                    <Feature.SubTitle>
                        다양한 디바이스에서 시청하세요.
                    </Feature.SubTitle>

                    <OptForm>
                        <OptForm.Text>
                            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.
                        </OptForm.Text>
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>멤버십 재가입</OptForm.Button>
                        <OptForm.Break />
                    </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer /> 
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}