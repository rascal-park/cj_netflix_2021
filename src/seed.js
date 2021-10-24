export function seedDatabase(firebase) {
    function getUUID() {
        // eslint gets funny about bitwise
        /* eslint-disable */
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const piece = (Math.random() * 16) | 0;
            const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
            return elem.toString(16);
        });
        /* eslint-enable */
    }

    /* Series
      ============================================ */
    // korea
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "슬기로운 감빵생활",
        description:
            "메이저리그 대신 감옥으로 직행한 슈퍼스타. 판이 바뀌고 룰이 바뀐 막다른 골목, 감빵에서 살아남을 방법은 단 한가지. 그저 배워라!",
        genre: "korea",
        maturity: "15",
        slug: "슬기로운 감빵생활"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "스위트 홈",
        description:
            "A세상을 차단하고 방 안에 틀어박힌 10대 소년. 현수가 세상 밖으로 나온다. 인간이 괴물로 변했다. 그래도 살아야 한다.",
        genre: "korea",
        maturity: "18",
        slug: "스위트 홈"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "경이로운 소문",
        description:
            "무 닫고 가자! 낮에는 국수집 직원, 밤에는 악귀를 때려잡는 사냥꾼. 이승과 저승을 오가는 카운터들의 세계에 경이로운 소년, 소문이 들어온다.",
        genre: "korea",
        maturity: "15",
        slug: "경이로운 소문"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "킹덤 아신전",
        description:
            "비극과 배신이 삶을 덮친다. 기이하고 불길한 뭔가를 발견한다. 한순간에 가족과 동족을 잃은 여인. 오직 복수를 꿈꾸며 살아오 그녀가 짙은 어둠을 마주한다.",
        genre: "korea",
        maturity: "18",
        slug: "킹덤 아신전"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "킹덤",
        description:
            "병든 왕을 둘러싸고 흉흉한 소문이 떠돈다. 어둠에 뒤덮인 조서, 기이한 역병에 신음하는 산하. 정체 모를 악에 맞서 백성을 구원할 희망은 오직 세자뿐이다.",
        genre: "korea",
        maturity: "18",
        slug: "킹덤"
    });

    // etc
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "귀멸의 칼날",
        description:
            "마침내 탄지로의 칼날이 모두 벼려졌다! 피에 굶주린 혈귀의 습격으로 가족을 잃고 여동생마저 저주에 걸린 소년. 가혹한 운명의 사슬을 끊어내고 세상에서 혈귀를 멸하라!",
        genre: "etc",
        maturity: "18",
        slug: "귀멸의 칼날"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "종이의집",
        description:
            "1명의 처재, 8명의 공범, 철저히 주비한 세기의 강도. 스페인 조폐국에서 인질극까지 벌인 이들은 과연 포위 경찰을 따돌리고 거액의 돈과 함께 달아날 수 있을까?",
        genre: "etc",
        maturity: "18",
        slug: "종이의집"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "기묘한 이야기",
        description:
            "친궤 집에서 자신의 집으로 돌아가던 중 윌은 무언가 이상한 것을 보게되고, 윌이 있는 곳에서 가까운 정부의 비밀 실험실에서는 끔찍한 일이 벌어진다.",
        genre: "etc",
        maturity: "15",
        slug: "기묘한 이야기"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "워킹데드",
        description:
            "눈을 떠보니 세상은 좀비가 점령한 전쟁터. 어디로 갈것이가, 어떻게 생존할 것인가. 살아남은 자들의 사투가 펼쳐진다",
        genre: "etc",
        maturity: "18",
        slug: "워킹데드"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "오티스의 비밀상담소",
        description:
            "소심한 소년 오티스의 대반전, 그가 아웃사이더 소녀와 함께 섹스 클리닉을 연다. 성 상담사 엄마에게 귀동냥한 산지식을 모두 전수해 드려요!",
        genre: "etc",
        maturity: "18",
        slug: "오티스의 비밀상담소"
    });

    // kids
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "스폰지밥",
        description:
            "바닷속 파인애플 집에 사는 노랗고 네뫈 스폰지밥. 특기는 햄버거 뒤집기요, 취미는 해파리 사냥이라지! 스폰지밥의 즐거운 하루하루!",
        genre: "kids",
        maturity: "0",
        slug: "스폰지밥"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "브레드이발소",
        description:
            "사전 예약 필수, 고객만족 보장! 베이커리타운의 명소로 소문난 브레드 이발소.",
        genre: "kids",
        maturity: "0",
        slug: "브레드이발소"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "도라에몽",
        description:
            "시험은 빵점, 공부도 운동도 못하는 우리친구 진구의 미래를 바꿔주기 위해 22세기에서 고양이 모양 로봇 도라에몽이 찾아왔다.",
        genre: "kids",
        maturity: "0",
        slug: "도라에몽"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "포켓몬스터",
        description:
            "최강의 포켓몬 트레이너가 목표인 지우, 무한히 넓어진 세계에서 두 소년의 새로운 모험이 시작된다.",
        genre: "kids",
        maturity: "0",
        slug: "포켓몬스터"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "라바아일랜드",
        description:
            "월드스타 라바가 넷플릭스와 만났다! 더 커진 웃음, 더 새로운 친구들, 라바 사상 최초  인간의 등장까지!",
        genre: "kids",
        maturity: "0",
        slug: "라바아일랜드"
    });

    // pop
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "빈센조",
        description:
            "악은 악으로, 약으 약으로! 모국을 찾은 한국계 이탈리아 마피아 변호사. 무소불위의 재벌에 쓴맛 한번 보여줄까?",
        genre: "pop",
        maturity: "15",
        slug: "빈센조"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "나의히어로아카데미아",
        description:
            "인구의 대부분이 개성이라는 이름의 초능력을 가신 세상. 많은 사람이 세상을 지키는 직업 히어로를 꿈꾼다!",
        genre: "pop",
        maturity: "15",
        slug: "나의히어로아카데미아"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "멜로가체질",
        description:
            "스타 드라마 작가로 우뚝 설 그날만을 꾼꾸는 여자. 젊은 나이에 다큐멘터리 감독으로 성공한 여자. 일하느라 혼자 아들 키우느라 정신없이 살아가는 여자.",
        genre: "pop",
        maturity: "15",
        slug: "멜로가체질"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "시그널",
        description:
            "과거와 현재를 잇는 무전기를 통해 대화를 나누는 1989년의 형사와 2015년의 프로파일러. 그리고 두 사람 모두와 연결되어 있는 또 한면의 형사.",
        genre: "pop",
        maturity: "15",
        slug: "시그널"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "셜록",
        description:
            "아서 코넌 도일 경의 인기 추리 소설을 새롭게 재해석한 작품. 괴짜 명탐정 셜록이 단서를 찾아 현대의 런던 거리를 배회한다.",
        genre: "pop",
        maturity: "15",
        slug: "셜록"
    });

    // original
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "백스피릿",
        description:
            "술을 마실 땐 누구와 마시느냐가 중요하다. 이 술자리의 호스트는 무려 주방의 지휘자 백종원. 그가 각계각층의 셀럽과 함게 술잔을 기울인다.",
        genre: "original",
        maturity: "15",
        slug: "백스피릿"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "범인은 바로 너",
        description:
            "유재석과 허당 탐정들의 예측불허 추리 예능. 당신이 웃어 넘긴 모든 순간이 단서가 된다!",
        genre: "original",
        maturity: "15",
        slug: "범인은 바로 너"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "극주부도",
        description:
            "지금 내가 관리하는 구역은 사랑하는 나의 가족이다. 그가 이제는 전업주부의 길을 간다.",
        genre: "original",
        maturity: "18",
        slug: "극주부도"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "브리저튼",
        description:
            "진실한 애정과 끈끈한 유대로 맺어진 브리저튼 가문의 8남매. 그들이 런던의 상류사회에서 사랑과 행복을 향한 여정을 떠난다.",
        genre: "original",
        maturity: "18",
        slug: "브리저튼"
    });
    firebase.firestore().collection("series").add({
        id: getUUID(),
        title: "그녀의 이름은 난노",
        description:
            "침묵하고 복종하면 폭력의 제물이 될 뿐이다. 허울 좋은 학교, 그곳의 비밀고 거짓말을 폭로하는 난노.",
        genre: "original",
        maturity: "18",
        slug: "그녀의 이름은 난노"
    });

    /* 영화
      ============================================ */
    // 한국
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "극한직업",
        description:
            "범죄 조직 일당을 감시하기 위해 마약반 형사들이 위장 창업으로 치킨집을 열었다. 근데 왠일? 맛있다는 입소문을 타며 연일 문전성시를 이룬다. 드디어 숨은 재능을 발견한 건가. 낮에는 치킨, 밤에는 잠복. 이곳이 진정한 수사 맛집이다!",
        genre: "korea",
        maturity: "15",
        slug: "극한직업"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "엑시트",
        description:
            "도시 한복판에 독가스가 유출됐다! 아수라장 속에서 대학 시절 산악부 경험을 살려 탈출을 돕는 두청년. 짠 내 나는 지질한 청춘은 잠시 잊어라. 오늘만큼은 세상을 구원할 영웅이니까.",
        genre: "korea",
        maturity: "12",
        slug: "엑시트"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "낙원의밤",
        description:
            "피의 대가는 피로 치러야 한다. 참혹한 비극 앞에, 복수를 택한 남자. 그리고 버림받은 남자. 제주도에 몸을 숨긴 그가 한 여자를 만난다. 죽음의 그림자를 간직한 여자들.",
        genre: "korea",
        maturity: "18",
        slug: "낙원의밤"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "신세계",
        description:
            "국내 최대 범죄 조직 골드문의 후계자 선출에 개입하라! 작전 설계자 강 과장은 8ㅕ 저 조직에 심어 놓은 이자성을 조종하고, 조직내에선 후계자 전쟁으로 칼바람이 휘몰아 친다. 각자가 꿈꿧던 그들의 서로 다른 신세계는 열릴 것인가.",
        genre: "korea",
        maturity: "18",
        slug: "신세계"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "내부자들",
        description:
            "대한민국을 움직이는 권력자들의 하수인 상구. 처절하게 버림받고 폐인이 된 그의 앞에 나타난 검사 장훈. 복수와 성공에 목마른 두 남자가 손을 잡는다. 권력층의 추악한 민낯을 폭로하기 위해.",
        genre: "drama",
        maturity: "18",
        slug: "내부자들"
    });

    // pop
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "다운사이징",
        description:
            "작아지는 것이 곧 미래다! 야심 차게 등장한 인간 축소 프로젝트. 폐기물을 적게 배출하니 환경친화적이고, 돈의 가치도 훌쩍 뛰어 부자가 될 수 있다. 그리하여 폴과 오드리 부부는 다운사이징 시술을 받고 럭셔리한 새 삶을 살기로 한다.",
        genre: "pop",
        maturity: "15",
        slug: "다운사이징"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "더 포가튼 배틀",
        description:
            "세 젊은이가 2차 세계 대전의 포화 속으로 들어간다. 연합군의 글라이더 조종사, 네덜란드 출신의 독일군 그리고 레지스탕스로, 방법은 달랐지만, 이들이 원한 건 오직 자유, 그 하나였다.",
        genre: "pop",
        maturity: "18",
        slug: "더 포가튼 배틀"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "승리호",
        description:
            "우주에서 쓰레기를 주우며 산다. 꿈은 아득하기만 하다. 2092년, 기댈 곳 없는 낙오자 넷. 그들이 천진한 인간형 로봇을 손에 넣는다. 때가 왔다, 위험한 거래를 개시한다!",
        genre: "pop",
        maturity: "12",
        slug: "승리호"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "센과 치히로의 행방불명",
        description:
            "마녀가 지배하는 신비한 세계에 발을 들여놓은 치히로, 마녀에게 거역하는 자는 동물로 변하게 되는데...",
        genre: "pop",
        maturity: "0",
        slug: "센과 치히로의 행방불명"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "인터스텔라",
        description:
            "인류 멸망이 목전에 닥친 미래. 우주비행사들이 웜홀을 통해 광할한 우주를 여행하며 인류가 살 수 있는 또 다른 행성을 찾아 나선다.",
        genre: "pop",
        maturity: "12",
        slug: "인터스텔라"
    });

    // replay
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "이스케이프 룸",
        description:
            "거액의 상금이 걸린 방 탈출 게임에 초대된 6명의 남녀, 초대장만 믿고 세계 최고 방 탈출 게임회사에 모인다. 하지만 예고도 없이 게임은 바로 시작되고, 오감의 공포가 극한까지 조여온다.",
        genre: "replay",
        maturity: "15",
        slug: "이스케이프 룸"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "트루먼쇼",
        description:
            "한 사람의 일거수 일투족이 24시간 생방송 되는 트루먼쇼의 주인공 트루먼 버뱅크. 엄청난 인기를 끌고 있는 이 프로그램의 주인공인 자신만 이 사실을 전혀 모르고 있다.",
        genre: "replay",
        maturity: "12",
        slug: "트루먼쇼"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "아수라",
        description:
            "부패한 시장의 뒷일을 처리하고 돈을 받는 강력계 형사 한도경. 그의 타락한 일상이 흔들리기 시작한다. 시장의 비리를 캐는 검사가 시장을 배신하라며 그를 협박하기 때문. 물지 않으면 물리는 상황에서 한도경은 어느 편에 설 것인가.",
        genre: "replay",
        maturity: "18",
        slug: "아수라"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "타짜",
        description:
            "이토록 화려하고, 이토록 슬픈 꽃놀이를 보았는가. 속절없이 당한 도박 사기에 칼을 갈고 타짜로 거듭난 청년 고니. 전국의 화투판을 돌면서 목숨 건 승부를 시작한다.",
        genre: "replay",
        maturity: "18",
        slug: "타짜"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "더킹",
        description:
            "권력의 정점에 서고픈 검사, 대한민국을 좌우하는 권력의 핵심에 다가가며 승승장구한다. 정의 따윈 헌신짝처럼 내다버린 그에게 지금 날아오는 것은 필연의 부메랑인가.",
        genre: "replay",
        maturity: "15",
        slug: "더킹"
    });

    // etc
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "마이펫의 이중생활",
        description:
            "주인 잘 만나 뉴욕에서 제일 복 많은 개라고 자부하던 맥스. 완벽한 견생에 금이 가기 시작한다. 주인이 유기견 보호소에서 뜨내기 개를 데려오면서. 형제처럼 사이좋게 지내라는데, 우애는 개뿔.",
        genre: "etc",
        maturity: "0",
        slug: "마이펫의 이중생활"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "스파이더맨 파프롬홈",
        description:
            "지구 구하는 일이 어디 쉽나? 슈퍼히어로에게도 휴식이 필요한 법. 학교 친구들과 유럽 여행을 떠난 스파이더맨, 피터파커. 하지만 세상에 새로운 빌런이 등장해 여행을 망쳐 놓는다.",
        genre: "etc",
        maturity: "12",
        slug: "스파이더맨 파프롬홈"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "라라랜드",
        description:
            "꿈꾸는 이들이 모이는 곳, LA. 우연히 만난 배우 지망생 미아와 재즈 피아니스트 세바스찬은 서로를 향한 사랑을 키워간다.",
        genre: "etc",
        maturity: "12",
        slug: "라라랜드"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "로건",
        description:
            "서기 2029년, 멕시코 국경지대. 능력을 잃어가던 울버린은 프로페서 X를 보살피며 은둔 생활을 한다. 그러던 어느 날 누군가에게 쫓기는 새로운 돌연변이 소녀가 이들 앞에 나타나고, 울버린은 모든것을 건 전쟁을 준비한다.",
        genre: "etc",
        maturity: "18",
        slug: "로건"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "인턴",
        description:
            "뜨거운 열정으로 단기간에 회사를 키워낸 30대 열혈 여성 CEO. 사별과 은퇴를 겪고 공허한 일상을 보내다가 새내기로 입사한 70세 남성 인턴.",
        genre: "etc",
        maturity: "12",
        slug: "인턴"
    });

    // kids
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "슈퍼배드3",
        description:
            "뛰는 형 위에 나는 동생? 직장에서 쫓겨난 그루 앞에 나타나 가업을 잇자고 제안하는 쌍두잉 동생 드루. 악당 DNA를 타고난 두 형제가 뭉치면 세상엔 과연 어떤 일이 벌어질지.",
        genre: "kids",
        maturity: "0",
        slug: "슈퍼배드3"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "찰리와 초콜릿공장",
        description:
            "괴짜 윌리 웡카의 초콜릿 공장을 견학하게 된 행운의 어린이 5명은 그가 만들어내는 놀라운 과자의 비밀을 알게 된다.",
        genre: "kids",
        maturity: "0",
        slug: "찰리와 초콜릿공장"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "짱구는 못말려",
        description:
            "짱구네 유치원에 새친구가 전학왔다. 그리고 이상한 꿈을꾸기 시작하는 동네 사람들. 처음엔 바라는 모든 것이 이뤄지는 행복한 꿈인 줄 알았지만, 점차 알목으로 변해간다!",
        genre: "kids",
        maturity: "0",
        slug: "짱구는 못말려"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "쿵푸 팬더",
        description:
            "온 마을을 공포에 떨게 했던 악당이 돌아온다. 그를 막을 영웅은? 푸근한 몸매, 친근한 뱃살의 포. 마을의 평화를 지킬 무림고수로 다시 태어나기 위해 수련을 시작한다.",
        genre: "kids",
        maturity: "0",
        slug: "쿵푸 팬더"
    });
    firebase.firestore().collection("films").add({
        id: getUUID(),
        title: "미니언즈",
        description:
            "미니언즈 알고보니 인류 탄생 이전부터 존재했다? 놀라운 생존력을 자랑해 온 이들에게 문제가 생겼으니, 이제 섬길 악당이 없다는것.",
        genre: "kids",
        maturity: "0",
        slug: "미니언즈"
    });
}