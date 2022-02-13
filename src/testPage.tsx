import "./App.css";
import { Navbar } from "./navbar";
import { UrlButton } from "./urlButton";
import capture1 from "./capture1.png";

function TestPage() {
  return (
    <>
      <Navbar title="Test" />
      <div className="container">
        <div className="textcontainer">
          <h1 className="title">Test</h1>
          <h4 className="subtitle">애국가 가사</h4>
          <div className="content">
            <ol>
              <img
                width="150px"
                height="150px"
                src="https://w.namu.la/s/43a07e65f573eb41fffe67ac0d1008fa73b5c7a04a004ff9004ddf0680524c5c5bd8a30c724fd7966bd7d3a2f60d0bd17c3cc159dd41f704f9b6dc188a21346d7f35847c4c6d8b5bb7f73e9f706bf66446ee002fff4f6f7ace91478065994313"
                alt="태극기 이미지"
              ></img>
              <li>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</li>
              <li>남산 위에 저 소나무 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세</li>
              <li>가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세</li>
              <li>이 기상과 이 맘으로 충성을 다하여 괴로우나 즐거우나 나라 사랑하세</li>
              <li>무궁화 삼천리 화려 강산 대한 사람 대한으로 길이 보전하세</li>
            </ol>
            {/* <p>
              <a
                className="lightFocus linkButton"
                href="https://namu.wiki/w/%EC%95%A0%EA%B5%AD%EA%B0%80#s-4"
              >
                출처 : 나무위키-애국가
              </a>
            </p> */}
            <UrlButton
              url="https://namu.wiki/w/%EC%95%A0%EA%B5%AD%EA%B0%80#s-4"
              alt="출처: 나무위키-애국가"
              blank={true}
            />
          </div>
          <h4 className="subtitle">배sin현 "다람쥐 쳇바퀴 타고파" 발언 논란</h4>
          <div className="content">
            <ul>
              <li>
                최근 생물학자 배sin현의{" "}
                <b>
                  <em>"다람쥐 쳇바퀴 타고파"</em>
                </b>{" "}
                발언이 논란이 되고 있습니다.
              </li>
              <li>
                과거 2077년 배sin현이 서술한{" "}
                <UrlButton
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  alt="『다람쥐와 심장질환과의 관한 보고』"
                />
                에서 인간이 다람쥐를 반경 50cm 내에서 관찰할 경우{" "}
                <UrlButton
                  url="https://namu.wiki/w/%EC%8B%AC%EC%9E%A5%EB%A7%88%EB%B9%84"
                  alt="심장마비(心臟痲痹)"
                  blank={true}
                />
                및{" "}
                <UrlButton
                  url="https://namu.wiki/w/%EC%8B%AC%EC%BF%B5"
                  alt="심쿵(心쿵)으로 인한 돌연사(突然死)"
                  blank={true}
                />
                을 경험할 수 있다고 발표하였습니다
              </li>
              <li>
                하지만 최근 배sin현 박사는 자신의 논문과 상반되는 태도인
                <em>
                  <b>"다람쥐 쳇바퀴 타고파"</b>
                </em>{" "}
                발언을 함으로써 그는 논문 표절 의혹에 휩싸였습니다.
              </li>
              <li>
                또한 자신의 SNS 계정에{" "}
                <em>
                  <b>"ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"</b>
                </em>
                (=KILL KILL KILL)과 같은 매세지를 지인들에게 연속적으로 보냄으로써
                살인협박 논란에 휩싸이기도 했습니다
              </li>
              <img width="500" height="auto" src={capture1} alt="캡처1" />
              <li>
                그는{" "}
                <em>
                  <b>"왜 이런 쓸때없는 논란이 일어난건지 이해할 수가 없다"</b>
                </em>{" "}
                <em>
                  ,<b>"트위치 보러감 ㅅㄱ"</b>
                </em>{" "}
                라며 자신은 결백하다는 입장을 밝혔습니다.
              </li>
              <li>
                <UrlButton
                  url="https://youtu.be/HtR0YbSmmcM"
                  alt={
                    <em>
                      <del>왜 이러는 걸까요🤔</del>
                    </em>
                  }
                />
              </li>
            </ul>
          </div>
          <h4 className="subtitle">"피타고라스 정리는 틀렸다"</h4>
          <div className="content">
            <ul>
              <li>
                오전 12시경 대한민국의 배xx현 교수가{" "}
                <em>
                  <b>"피타고라스 정리는 틀렸다"</b>
                </em>
                고 증명해내어 화제가 되고 있습니다
              </li>
              <li>
                그는 어렸을때부터 피타고라스 정리에 대해 이해할 수 없었고, 현재까지도 그
                이해할 수 없는 정리에 분노하여 10년 내내 연구에 물두한 것으로 알려져
                있습니다.
              </li>
              <li>
                네티즌들은{" "}
                <em>
                  <b>"왜 이제야 밝혀였나", "10년 교육 전부 부정당한 기분이다"</b>
                </em>
                라며 이번 논문이 사람들에게 크나큰 충격을 가져다 주었습니다
              </li>
              <li>
                다음 논문이 발표되면서 수학적 오류가 밝혀진 논문은 수천 건에 달하며 각
                수학 커뮤니티에서는{" "}
                <UrlButton
                  url="https://www.google.com/search?q=%23%ED%94%BC%ED%83%80%EA%B3%A0%EB%9D%BC%EC%8A%A4%EA%B0%80%EC%98%B3%EB%8B%A4"
                  alt="#피타고라스가옳다"
                />{" "}
                운동이 벌어지고 있습니다
              </li>
            </ul>
          </div>
          {/* <Link to="/">
        <img src={logo} width="140px" height="140px" alt="logo" />
      </Link> */}
        </div>
      </div>
    </>
  );
}

export default TestPage;
