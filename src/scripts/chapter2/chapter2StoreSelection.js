const script = (gameState) => {
  const shopChoices = [];
  if(!gameState.visitedComputerStore) { shopChoices.push({ name: "コンピューター屋", value: "computerStore", navigate: true }) };
  if(!gameState.visitedBookStore) { shopChoices.push({ name: "本屋", value: "bookStore", navigate: true }) };
  if(!gameState.visitedSoupStore) { shopChoices.push({ name: "スープ屋", value: "soupStore", navigate: true }) };

  return [
    {
      ...shopChoices.length > 0 ? {
        background: ["blackBackground", "mallExteriorBackground"],
        text: 'メアリー：どこに行きたいですか？',
        reply: {
          type: "select",
          choices: shopChoices,
        },
      }
      :
      {
        background: ["blackBackground", "mallExteriorBackgroundEvening"],
        characters: ["mary-happy", "sue-neutral"],
        text: "メアリー：今日はとても楽しかったです。私たちと一緒に買い物行ってはありがとう！"
      }
    },
    {
      characters: ["mary-neutral", "sue-neutral"],
      text: "スー：はい、ありがとう。"
    },
    {
      text: "いいえ。楽しかったです。"
    },
    {
      text: "メアリー：じゃあ、帰りましょうか？"
    },
    {
      characters: ["mary-sleepy", "sue-sleepy"],
      text: "スー：は〜い！疲れた！"
    },
    {
      text: "また明日ね！"
    },
    {
      text: `To be continued...
You reached the end of chapter 2! Would you like to save your progress?`,
      reply: {
        type: "select",
        choices: [
          { name: "Save game", value: "save", navigate: true, saveGame: true },
          { name: "Main menu", value: "menu", navigate: true},
        ],
      },
    }
  ]
}

export default script;