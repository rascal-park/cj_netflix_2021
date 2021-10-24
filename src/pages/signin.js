import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from "../constants/routes";

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid = password === "" || emailAddress === "";
    const handleSignin = (event) => {
        event.preventDefault();
        
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress("");
                setPassword("");
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>로그인</Form.Title>
                        {error && <Form.Error>{error}</Form.Error>}

                        <Form.Base onSubmit={handleSignin} method="post">
                            <Form.Input
                                // @ts-ignore
                                placeholder="Email Address"
                                value={emailAddress}
                                onChange={({ target }) => setEmailAddress(target.value)}
                            />
                            <Form.Input
                                // @ts-ignore
                                type="password"
                                placeholder="Password"
                                autoComplete="off"
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                            />
                            <Form.Submit disabled={isInvalid} type="submit">
                                로그인
                            </Form.Submit>
                        </Form.Base>

                        <Form.Text>
                            Neflix 회원이 아닌가요?{" "}
                            <Form.Link to="/signup">지금 가입하세요.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 
                            로봇이 아님을 확인 합니다.
                        </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}