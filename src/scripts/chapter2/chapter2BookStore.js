const newGameScript = ({playerName, bookForSue}) => [
  {
    background: ["blackBackground", "bookStore"],
    characters: ["sue-cringe"],
    text: "店の人：いらっしゃいませ！",
    state: {
      visitedBookStore: true,
    }
  },
  {
    text: "スー：どうしてこんなにつまんあい所に行きましたか？",
  },
  {
    characters: ["mary-happy", "sue-cringe"],
    text: "メアリー：素敵ですよね！本はいろいろストーリーがありますよ。",
  },
  {
    text: "メアリー：今日は何を教えて？",
  },
  {
    characters: ["sue-cringe"],
    text: "メアリーさんは本当に本が好きですね。",
  },
  {
    text: "スー：本は古いテクノロジーです。",
  },
  {
    text: "スーさんは読む事が好きじゃないですか？",
  },
  {
    characters: ["sue-neutral"],
    text: "スー：ネットで新情報はいっぱいあります。",
  },
  {
    text: "スー：コンピューターの方がいいと思います。",
  },
  {
    characters: ["mary-surprised","sue-surprised"],
    text: "メアリー：それは違うです！ネットでいっぱい情報がある。でも本は大切な意味があります。",
  },
  {
    characters: ["mary-embarrassed"],
    text: "店の人：何か探していますか？"
  },
  {
    background: ["blackBackground", "bookDisplay"],
    characters: ["mary-book"],
    text: `メアリー：${playerName}さん、スーさんはどの本を読むと思いますか？`,
  },
  {
    reply: {
      type: "select",
      variable: "bookForSue",
      choices: [
        { name: "あの本はいいと思います。", value: "computerBook" },
        { name: "その本はいいと思います。", value: "videoGameBook" },
        { name: "この本はいいと思います。", value: "poetryBook" },
      ],
    },
  },
  {
    background: ["blackBackground", "bookStore"],
    characters: ["mary-excited"],
    text: "メアリー：いい考えです。ありがとう！"
  },
  {
    text: "いいえ。"
  },
  {
    characters: ["mary-neutral"],
    text: `メアリー：${bookForSue=="computerBook" ? "あの" : bookForSue == "videoGameBook" ? "この" : "あの"}本はいくらですか？`
  },
  {
    ...bookForSue == "computerBook" ?
      {
        text: "店の人：あれは七千五百円です。"
      } :
      bookForSue == "videoGameBook" ? 
      {
        text: "店の人：それは一万二千五百円です。"
      } :
      {
        text: "店の人：あれは二千円です。"
      }
  },
  {
    text: `${bookForSue=="poetryBook" ? "" : "高いですね。でも仕方ないです。"}${bookForSue=="videoGameBook" ? "これ" :　"あれ"}を下さい。`
  },
  {
    text: "店の人：はいどうぞ。"
  },
  {
    characters: ["mary-happy", "sue-neutral"],
    text: "メアリー：スーさんプレゼントを取ってくれ。"
  },
  {
    characters: ["mary-happy", "sue-surprised"],
    text: "スー：あれ？プレゼント？"
  },
  {
    ...bookForSue == "computerBook" ?
    {
      characters: ["mary-happy", "sue-cringe"],
      text: "スー：ありがとう…でも…この情報はネットであるですね。"
    } :
    bookForSue == "videoGameBook" ? 
    {
      characters: ["mary-happy", "sue-excited"],
      text: "スー：えー？この絵はネットで見た。でも本でもっと綺麗。本当にありがとう！"
    } :
    {
      characters: ["mary-happy", "sue-cringe"],
      text: "スー：これはメアリーさんのプレゼントじゃないか？とにかくありがとう。"
    }
  },
  {
    ...bookForSue == "videoGameBook" ?
    {
      characters: ["mary-excited"],
      text: "メアリー：本当に好きですね！お疲れ様でした〜",
      navigateTo: "chapter2ShopChoices"
    } :
    {
      characters: ["mary-embarrassed"],
      text: "メアリー：残念ですね。頑張りました。",
      navigateTo: "chapter2ShopChoices"
    },
  },
];

export default newGameScript;