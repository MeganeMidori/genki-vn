const script = (gameState) => {
  return [
    {
      background: ["blackBackground", "mallExteriorBackground"],
      text: '２０分から待っています。今は午後２時１５分です。メアリーさんとスーさんはどこですか？',
    },
    {
      characters: ["mary-winded"],
      text: 'メアリー:遅いでごめんえ。長く待っていましたか?'
    },
    {
      text: 'いいえ。'
    },
    {
      text: '(それはちょっと違うかも…)'
    },
    {
      text: 'スーさんは？'
    },
    {
      characters: ["mary-neutral", "sue-neutral"],
      text: 'スー:こんにちは。'
    },
    {
      text: 'メアリー:じゃあ、みんなさんはここです。買い物行こうよ!'
    },
    {
      text: 'モールはどこですか？'
    },
    {
      text: 'スー:あそこです。',
      navigateTo: "chapter2ShopChoices"
    },
  ]
}

export default script;