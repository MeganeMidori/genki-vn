const newGameScript = ({playerName}) => [
  {
    background: ["blackBackground", "computerStore"],
    characters: ["mary-neutral"],
    text: "店の人：いらっしゃいませ！",
    state: {
      visitedComputerStore: true,
    }
  },
  {
    text: "メアリー：このところはいっぱいコンピューターがありますね。",
  },
  {
    text: "スーさんはどこですか？",
  },
  {
    characters: ["mary-neutral", "sue-excited"],
    text: "スー：まさかこれは…新しいCPUだよ！",
  },
  {
    characters: ["mary-happy", "sue-excited"],
    text: "メアリー：その物知りますか？",
  },
  {
    characters: ["mary-neutral", "sue-excited"],
    text: "スー：何年からこのCPUを待ってた。すごいパーワーがあります！どんなゲームをできる事知りますか？",
  },
  {
    characters: ["mary-embarrassed", "sue-neutral"],
    text: "メアリー：えっとね…ジャンケンポンをできるですか？",
  },
  {
    characters: ["mary-embarrassed", "sue-cringe"],
    text: "スー：本当にゲームを知らないか？",
  },
  {
    characters: ["mary-angry", "sue-neutral"],
    text: "メアリー：だから私はゲーマーじゃないです。",
  },
  {
    characters: ["mary-embarrassed", "sue-neutral"],
    text: "店の人：何か探していますか？",
  },
  {
    characters: ["mary-neutral", "sue-neutral"],
    text: "スー：このCPUはいくらですか？",
  },
  {
    text: "店の人：それは二十万円です。",
  },
  {
    characters: ["mary-scared", "sue-cringe"],
    text: "スー：えー",
  },
  {
    text: "スー：高いすぎるかな",
  },
  {
    characters: ["mary-embarrassed", "sue-sad"],
    text: "メアリー：スーさん大丈夫。帰りましょうか？",
    navigateTo: "chapter2ShopChoices"
  },
];

export default newGameScript;