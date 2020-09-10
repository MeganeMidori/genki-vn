const script = ({playerName, nationality, jobTitle}) => [
  {
    background: ["blackBackground", "classroomBackground"],
    characters: ["mary-neutral", "yamashita"],
    text: 'やました：クラスにようこそ。'
  },
  {
    text: 'やました：私の名前はやましたです。げんき学院の先生です。'
  },
  {
    characters: ["yamashita"],
    text: 'やました：みんな、すわってください。'
  },
  {
    text: 'やました：今日は「初めまして」と言います。メアリーさんどうぞ。'
  },
  {
    characters: ["mary-happy"],
    text: 'メアリー：は〜い！'
  },
  {
    characters: ["mary-neutral"],
    text: 'メアリー：初めまして。メアリー・ハートです。'
  },
  {
    text: 'メアリー：アリゾナ大学生の学生です。今２年生です。専攻は日本語です。'
  },
  {
    text: 'メアリー：19歳です。よろしくお願いします。'
  },
  {
    characters: ["yamashita"],
    text: 'やました：どうも。次はきむらさん。'
  },
  {
    characters: ["kimura-neutral"],
    text: 'きむら：初めまして。きむら・たけしと申します。'
  },
  {
    text: 'きむら：さくら大学の学生です。4年生です。専攻は歴史です。'
  },
  {
    text: 'きむら：22歳です。よろしくお願いします。'
  },
  {
    characters: ["yamashita"],
    text: 'やました：どうも。次はスーさん。'
  },
  {
    characters: ["sue-neutral"],
    text: 'スー：初めまして。スー・キムです。'
  },
  {
    text: 'スー：ソウル大学の学生。3年生です。専攻はコンピューター。'
  },
  {
    text: 'スー：20歳です。よろしくお願いします。'
  },
  {
    characters: ["yamashita"],
    text: 'やまし：どうも。次はロバートさん。'
  },
  {
    characters: ["robert-neutral"],
    text: 'ロバート：初めまして。私の名前はロバート・スミスです。22歳です。'
  },
  {
    text: 'ロバート：ロンドンの大学の学生です。４年生です。専攻はビジネスです。'
  },
  {
    text: 'ロバート：よろしくお願いします。'
  },
  {
    characters: ["yamashita"],
    text: `やました：どうも。最後は${playerName}さん。`
  },
  {
    characters: ["yamashita","mary-neutral", "kimuara-neutral", "sue-neutral", "robert-neutral"],
    text: `初めまして。${playerName}です。`
  },
  {
    text: 'ご出身は…',
    reply: {
      type: 'input',
      variable: 'nationality',
    }
  },
  {
    text: `${nationality}人です。`,
  },
  {
    text: 'お仕事は…',
    reply: {
      type: 'input',
      variable: 'jobTitle',
    }
  },
  {
    text: `お仕事は${jobTitle}です。`,
  },
  {
    text: `これから一所懸命頑張ります。よろしくお願いします。`,
  },
  {
    characters: ["yamashita"],
    text: 'やました：いいの。ありがとうみんなさん。今日のクラスは終わりました。'
  },
  {
    characters: ["mary-happy", "sue-neutral"],
    text: 'メアリー：ヨ！明日一緒に買い物をしない？'
  },
  {
    text: '楽しそうですね。'
  },
  {
    text: 'メアリー：じゃあ、電話番号は何ですか？',
    reply: {
      type: 'input',
    }
  },
  {
    text: 'メアリーさんの電話番号は何ですか？'
  },
  {
    text: 'メアリー：電話番号は９３８の４９２の１０４６です。また明日ね！'
  },
  {
    text: 'また明日！',
    reply: {
      type: "select",
      choices: [
        { name: "続く", value: "chapter2", navigate: true },
      ],
    },  }
]

export default script;