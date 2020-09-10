import React, {useContext} from 'react'
import './App.css';
import '../node_modules/react-renai/dist/index.css'

import { SaveGameMenu, LoadGameMenu, Background, Text, Character, Scene, MenuBar, MenuButton, GameStateContext, Menu, GameWindow, DialogueHistory,  } from 'react-renai'

import Mary from './characters/Mary'
import Classroom from './backgrounds/Classroom'
import sampleScript from './scripts/newGame'
import chapter1Script from './scripts/chapter1'
import chapter2Script from './scripts/chapter2/chapter2'
import chapter2SoupStoreScript from './scripts/chapter2/chatper2SoupStore'
import Yamashita from './characters/Takeshi'
import Kimura from './characters/Kimura'
import Sue from './characters/Sue'
import Robert from './characters/Robert'
import MallExterior from './backgrounds/MallExterior';
import {SoupStore1, SoupStore2} from './backgrounds/SoupStore';
import chapter2Scenes from './scenes/chapter2'

const ParkBackground = (props) => {
  return (
    <Background
      url="https://1.bp.blogspot.com/-ulgWMPg2zAg/WoAjyPSLOuI/AAAAAAAADzg/mu4B0wG7LhoP5UcUUA9qGvt4fZrgoFJFgCLcBGAs/s640/BG19_01.jpg"
      contain
    />
  );
};

const SchoolBackground1 = () => {
  return (
    <Background
      url="https://lemmasoft.renai.us/forums/download/file.php?id=15615&mode=view"
      contain
    />
  );
};

const BlackBackground = (props) => {
  return <Background color="black" />;
};

const LLSIFText = (props) => {
  return (
    <Text
      backgroundUrl={''}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        height: "60px",
        background: 'rgba(255,165,0,0.75)',
        // border: '5px solid orange',
      }}
      nextButtonUrl={'images/nextarrow.png'}
      {...props}
    >
      {props.children}
    </Text>
  );
};

const Shelby = (props) => {
  const neutral = {
    emotion: "neutral",
    sprite: (
      <img
        // src="https://cdn.dribbble.com/users/3862938/screenshots/13114438/media/c260ae2c9fbb7668aef2626c1e72ccca.png"
        src="images/Mary.png"
        style={{ width: "160px", objectFit: "cover" }}
        alt="neutral shelby"
      />
    ),
  };
  const happy = {
    emotion: "happy",
    sprite: (
      <img
        src="https://cdn.dribbble.com/users/3862938/screenshots/13057029/samantha_blushing.png"
        style={{ width: "150px", objectFit: "cover" }}
        alt="happy shelby"
      />
    ),
  };

  return <Character emotions={[neutral, happy]} id="shelby" {...props} />;
};

const Friend = (props) => {
  const neutral = {
    emotion: "neutral",
    sprite: (
      <img
        src="https://cdn.dribbble.com/users/3862938/screenshots/13026802/media/3947055621ecc4f638ea3faf73f6e6e0.png"
        style={{ width: "200px", objectFit: "cover" }}
        alt="neutral friend"
      />
    ),
  };

  return <Character emotions={[neutral]} id="friend" {...props} />;
};

const Scene1 = () => {
  const gameState = useContext(GameStateContext);
  const script = chapter1Script(gameState);

  const assets = [
    <BlackBackground assetId="blackBackground" />,
    <Classroom assetId="classroomBackground" />,
    <Mary flipId="1" assetId="mary-neutral" />,
    <Mary flipId="1"　emotion="happy" assetId="mary-happy" />,
    <Yamashita flipId="2" assetId="yamashita" />,
    <Kimura flipId="3" assetId="kimura-neutral" />,
    <Sue flipId="4" assetId="sue-neutral" />,
    <Robert flipId="5" assetId="robert-neutral" />
  ]

  return (
    <div>
    <GameMenuBar />
    <Scene script={script} assets={assets} textComponent={LLSIFText} />
    </div>
  );
};

const NewGameScene = () => {
  const gameState = useContext(GameStateContext);
  const script = sampleScript(gameState);

  const assets = [
    <Mary assetId="mary-neutral" flipId="1" />,
    <Mary assetId="mary-happy" emotion="happy" flipId="1" />,
    <Friend assetId="friend" flipId="2" />,
    <BlackBackground assetId="blackBackground" />,
    <SchoolBackground1 assetId="schoolBackground" />,
    <LLSIFText assetId="llsif-text" />,
  ]

  return (
    <div>
      <GameMenuBar />
      {/* TODO: textcomponent should also passed in with the script instead of in the props */}
      {/* TODO: but also maybe you can configure a default somewhere? */}
      <Scene script={script} assets={assets} textComponent={LLSIFText} />
    </div>
  );
};

const Chapter2Scenes = () => {
  const gameState = useContext(GameStateContext);
  const script = chapter2Script(gameState);

  const assets = [
    <Mary assetId="mary-neutral" flipId="1" />,
    <Mary assetId="mary-winded" emotion="winded" flipId="1" />,
    <Sue assetId="sue-neutral" flipId="2" />,
    <BlackBackground assetId="blackBackground" />,
    <MallExterior assetId="mallExteriorBackground" />,
    <LLSIFText assetId="llsif-text" />,
  ]

  return (
    <div>
      <GameMenuBar />
      {/* TODO: textcomponent should also passed in with the script instead of in the props */}
      {/* TODO: but also maybe you can configure a default somewhere? */}
      <Scene script={script} assets={assets} textComponent={LLSIFText} />
    </div>
  );
};

const Chapter2SoupStoreScene = () => {
  const gameState = useContext(GameStateContext);
  const script = chapter2SoupStoreScript(gameState);

  const assets = [
    <Mary assetId="mary-hungry" emotion="hungry" flipId="1" />,
    <Mary assetId="mary-neutral" flipId="1" />,
    <Mary assetId="mary-angry" emotion="angry" flipId="1" />,
    <Mary assetId="mary-scared" emotion="scared" flipId="1" />,
    <BlackBackground assetId="blackBackground" />,
    <SoupStore1 assetId="soupStore1" />,
    <SoupStore2 assetId="soupStore2" />,
    <LLSIFText assetId="llsif-text" />,
  ]

  return (
    <div>
      <GameMenuBar />
      {/* TODO: textcomponent should also passed in with the script instead of in the props */}
      {/* TODO: but also maybe you can configure a default somewhere? */}
      <Scene script={script} assets={assets} textComponent={LLSIFText} />
    </div>
  );
};

const GameMenuBar = (props) => {
  const gameState = useContext(GameStateContext);

  return (
    <MenuBar>
      <MenuButton toComponent="dialogueHistory">History</MenuButton>
      <MenuButton toComponent="saveGameMenu">Save</MenuButton>
      <MenuButton toComponent="loadGameMenu">Load</MenuButton>
      <MenuButton toComponent="menu" onClick={gameState.resetState}>
        Main menu
      </MenuButton>
    </MenuBar>
  );
};

const MenuBackground = (props) => <div className="genki-background--container">
  <div>GEN</div>
  <div>KI</div>
</div>

const MyGameMenu = () => {
  return (
    <Menu>
      <MenuBackground />
      <MenuButton toComponent={"newGame"}>New Game</MenuButton>
      <MenuButton toComponent={"loadGameMenu"}>Load</MenuButton>
    </Menu>
  );
};

const MyLoadGameMenu = () => {
  return (
    <LoadGameMenu>
      <MenuBackground />
    </LoadGameMenu>
  );
}

const MySaveGameMenu = () => {
  return (
    <SaveGameMenu>
      <MenuBackground />
    </SaveGameMenu>
  );
}

function App() {
  return (
    <div>
    <p>
      Welcome to Genki VN! I'm mainly writing this to practice what I've learned in Genki so far. Chapters will be added as I study.
    </p>
    <p>
      I tried to use only vocabulary and grammar skills learned up to the given chapter. Because of that, the story is rather limited in the initial chapters ^^
    </p>
    <p>
    In certain cases I need to borrow more advanced vocabulary in order to fill in the gaps between phrases taught within the chapter. I also chose to include kanji from the beginning, although it is not intorduced in Genki until later chapters. To aid your understanding I recommend using <a href="https://chrome.google.com/webstore/detail/ipa-furigana/jnnbgnfnncobhklficfkdnclohaklifi?hl=en">IPA Furigana extension for chrome</a> as well as <a href="https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=en">Google Translate extension</a>. With these installed, you can click the ふ in your browser to toggle furigana, and you can highlight any words you do not recognize to look up the meaning with google translate. I'm learning japanese as I go along, so take all of this with a grain of salt of course!
    </p>
    <p>Most character art was generated using <a href="https://charat.me/en/genesis/create/">Charat</a> and most background assets are from <a href="https://lemmasoft.renai.us/forums/viewtopic.php?t=17302">here</a></p>
    <p>
      By the way, this is an early test use of my <a href="https://github.com/MeganeMidori/react-renai">react-renai library</a>. Check it out if you're into that kind of thing!
    </p>
    <p><b>Game last updated: 9/10/2020</b></p>
    <GameWindow style={{overflow: "hidden"}}>
      <MyGameMenu componentKey="menu" index />
      <DialogueHistory componentKey="dialogueHistory" />
      <NewGameScene componentKey="newGame" />
      <Scene1 componentKey="chapter1" />
      <MyLoadGameMenu componentKey="loadGameMenu" />
      <MySaveGameMenu componentKey="saveGameMenu" />
      {chapter2Scenes}
    </GameWindow>
    </div>
  );
}
export default App;
