
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from "../constants/routes";

export default function Signup() {
    const history = useHistory();

    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isInvalid =
        firstName === "" || password === "" || emailAddress === "";

    const handleSignup = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => {
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5) + 1
                    })
                    .then(() => {
                        history.push(ROUTES.BROWSE);
                    });
            })
            .catch((error) => {
                setEmailAddress("");
                setFirstName("");
                setPassword("");
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>회원가입</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            // @ts-ignore
                            placeholder="User name"
                            value={firstName}
                            onChange={({ target }) =>
                                setFirstName(target.value)
                            }
                        />
                        <Form.Input
                            // @ts-ignore
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) =>
                                setEmailAddress(target.value)
                            }
                        />
                        <Form.Input
                            // @ts-ignore
                            placeholder="Password"
                            type="password"
                            value={password}
                            autocomplete="password"
                            onChange={({ target }) =>
                                setPassword(target.value)
                            }
                        />
                        <Form.Submit
                            data-testid="sign-up"
                            disabled={isInvalid}
                            type="submit"
                        >
                            회원가입
                        </Form.Submit>

                        <Form.Text>
                            사용 할 준비가 되셨나요?{" "}
                            <Form.Link to={ROUTES.SIGN_IN}>
                                지금 로그인하기.
                            </Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 
                            로봇이 아님을 확인 합니다.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}