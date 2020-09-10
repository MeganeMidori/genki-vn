const newGameScript = ({playerName}) => [
  {
    background: ["blackBackground", "soupStore1"],
    characters: ["mary-neutral"],
    text: "メアリーさん、ここに来てください。",
    state: {
      visitedSoupStore: true,
    }
  },
  {
    text: "メアリー：それはできません。今服を買います。",
  },
  {
    text: "じゃあ、早くください。",
  },
  {
    characters: ["mary-hungry"],
    text: "メアリー：見つける事はできません。",
  },
  {
    text: "「見つける事はできません」はなんの意味ですか？",
  },
  {
    text: "メアリー：見つける事はできません。スープだけです。",
  },
  {
    text: "「スープだけ」って何？",
  },
  {
    characters: ["mary-angry"],
    text: "メアリー：だからここにスープだけがあります。",
  },
  {
    text: "じゃあ、スープアイルから出てくれ。",
  },
  {
    characters: ["mary-cringe"],
    text: "メアリー：はいはい怒ってないをください。",
  },
  {
    characters: ["mary-walk"],
    text: "メアリー：...",
  },
  {
    background: ["blackBackground", "soupStore2"],
    characters: ["mary-scared"],
    text: "メアリー：もっとスープだ！",
  },
  {
    text: "「もっとスープ」って何！？",
  },
  {
    characters: ["mary-angry"],
    text: "メアリー：もっとスープだけに！",
  },
  {
    text: "次のアイルに行きてくれ",
  },
  {
    characters: ["mary-scared"],
    text: "メアリー：やっぱりスープです！",
  },
  {
    text: "今メアリーさんはどこですか！？",
  },
  {
    characters: ["mary-angry"],
    text: "メアリー：スープにいます！",
  },
  {
    text: "どういう意味ですか？",
  },
  {
    text: "メアリー：スープにいるって言う事です！",
  },
  {
    text: "今どの店にいますか？",
  },
  {
    text: "メアリー：スープ屋にいます！",
  },
  {
    text: "どうしてスープ屋に服を買いますか！？",
  },
  {
    text: "うるさい！",
    navigateTo: "chapter2ShopChoices"
  },
];

export default newGameScript;