import { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Container, Button1, Button2, Overlay, Inner } from "./styles/player";

export const PlayerContext = createContext(null);

export default function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState();

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return showPlayer
        ? ReactDOM.createPortal(
              <Overlay
                  onClick={() => setShowPlayer(false)}
                  {...restProps}
              >
                  <Inner>
                      <video id="netflix-player" controls>
                          <source src={src} type="video/mp4" />
                      </video>
                  </Inner>
              </Overlay>,
              document.body
          )
        : null;
};

Player.Button1 = function PlayerButton1({ ...restProps }) {
    // @ts-ignore
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return (
        <Button1
            // eslint-disable-next-line no-shadow
            onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
            {...restProps}
        >
            ▶&nbsp;&nbsp;재생
        </Button1>
    );
};

Player.Button2 = function PlayerButton2({ ...restProps }) {
    // @ts-ignore
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return (
        <Button2
            // eslint-disable-next-line no-shadow
            onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
            {...restProps}
        >
            ▶&nbsp;&nbsp;재생
        </Button2>
    );
};