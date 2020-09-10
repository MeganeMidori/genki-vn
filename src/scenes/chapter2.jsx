import React, {useContext} from 'react'
import '../App.css';
import '../../node_modules/react-renai/dist/index.css'

import { Scene, GameStateContext, Background, Text, MenuBar, MenuButton } from 'react-renai'
import Mary from '../characters/Mary'
import chapter2Script from '../scripts/chapter2/chapter2'
import chapter2SoupStoreScript from '../scripts/chapter2/chatper2SoupStore'
import ComputerStoreSceneScript from '../scripts/chapter2/chapter2ComputerStore'
import BookStoreSceneScript from '../scripts/chapter2/chapter2BookStore'
import Sue from '../characters/Sue'
import MallExterior from '../backgrounds/MallExterior';
import ComputerStore from '../backgrounds/ComputerStore';
import {SoupStore1, SoupStore2} from '../backgrounds/SoupStore';
import Chapter2ShopChoicesScript from '../scripts/chapter2/chapter2StoreSelection'
import {BookStore, BookDisplay} from '../backgrounds/BookStore';

/* should be generalized */
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
/* should be generalized */

const assets = [
  <Mary assetId="mary-hungry" emotion="hungry" flipId="1" />,
  <Mary assetId="mary-cringe" emotion="cringe" flipId="1" />,
  <Mary assetId="mary-happy" emotion="happy" flipId="1" />,
  <Mary assetId="mary-neutral" flipId="1" />,
  <Mary assetId="mary-walk" flipId="1" style={{animation: 'float 0.25s infinite'}}/>,
  <Mary assetId="mary-angry" emotion="angry" flipId="1" />,
  <Mary assetId="mary-scared" emotion="scared" flipId="1" />,
  <Mary assetId="mary-sleepy" emotion="sleepy" flipId="1" />,
  <Mary assetId="mary-surprised" emotion="surprised" flipId="1" />,
  <Mary assetId="mary-embarrassed" emotion="embarrassed" flipId="1" />,
  <Mary assetId="mary-excited" emotion="excited" flipId="1" />,
  <Mary assetId="mary-winded" emotion="winded" flipId="1" />,
  <Mary assetId="mary-book" emotion="book" flipId="1" style={{position: 'absolute', right: '10%', zIndex: '-100'}}/>,
  <Sue assetId="sue-neutral" flipId="2" />,
  <Sue assetId="sue-surprised" emotion="surprised" flipId="2" />,
  <Sue assetId="sue-cringe" emotion="cringe" flipId="2" />,
  <Sue assetId="sue-excited" emotion="excited" flipId="2" />,
  <Sue assetId="sue-sad" emotion="sad" flipId="2" />,
  <Sue assetId="sue-sleepy" emotion="sleepy" flipId="2" />,
  <BlackBackground assetId="blackBackground" />,
  <MallExterior assetId="mallExteriorBackground" />,
  <MallExterior assetId="mallExteriorBackgroundEvening" time="evening" />,
  <LLSIFText assetId="llsif-text" />,
  <SoupStore1 assetId="soupStore1" />,
  <SoupStore2 assetId="soupStore2" />,
  <ComputerStore assetId="computerStore" />,
  <BookStore assetId="bookStore" />,
  <BookDisplay assetId="bookDisplay" />,
]

const Chapter2Scene = () => {
  const gameState = useContext(GameStateContext);
  const script = chapter2Script(gameState);

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

  return (
    <div>
      <GameMenuBar />
      <Scene script={script} assets={assets} textComponent={LLSIFText} />
    </div>
  );
};

const BookStoreScene = () => {
  const gameState = useContext(GameStateContext);
  const script = BookStoreSceneScript(gameState);

  return (
    <div>
      <GameMenuBar />
      <Scene script={script} assets={assets} textComponent={LLSIFText} />
    </div>
  );
};

const ComputerStoreScene = () => {
  const gameState = useContext(GameStateContext);
  const script = ComputerStoreSceneScript(gameState);

  return (
    <div>
      <GameMenuBar />
      <Scene script={script} assets={assets} textComponent={LLSIFText} />
    </div>
  );
}

const ShopSelectionScene = () => {
  const gameState = useContext(GameStateContext);
  const script = Chapter2ShopChoicesScript(gameState);

  return (
    <div>
      <GameMenuBar />
      <Scene script={script} assets={assets} textComponent={LLSIFText} />
    </div>
  );
}

export default [
  <Chapter2Scene componentKey="chapter2" />,
  <Chapter2SoupStoreScene componentKey="soupStore" />,
  <BookStoreScene componentKey="bookStore" />,
  <ComputerStoreScene componentKey="computerStore" />,
  <ShopSelectionScene componentKey="chapter2ShopChoices" />,
]