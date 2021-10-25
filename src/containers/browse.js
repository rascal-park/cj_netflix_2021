import { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Header, Loading } from "../components";

export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

            <Header src="Squid3">
                <Header.Feature>
                    <Header.FeatureCallOut>
                        오징어게임
                    </Header.FeatureCallOut>
                    <Header.Text>
                        빚에 쫓기는 수백 명의 사람들이 서바이벌 게임에 뛰어든다. 
                        거액의 상금으로 새로운 삶을 시작하기 위해. 
                        하지만 모두 승자가 될 순 없는 법. 
                        탈락하는 이들은 끔찍한 결과를 각오해야 한다.
                    </Header.Text>
                </Header.Feature>
            </Header>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile}/>
    );
}