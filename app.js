// ==========================================================================
// 1. JLPT N4 考題題庫 (共 100 題，語彙 1-50, 文法 51-90, 讀解 91-100)
// ==========================================================================

const QUESTIONS = [
    // --- 語彙 (1-50) ---
    {
        id: 1, section: "vocabulary",
        question: "この<ruby>道<rt>みち</rt></ruby>は<strong>車</strong>が多いです。",
        options: ["じどうしゃ", "くるま", "ちゃ", "しゃ"], correct: 1, correctText: "くるま",
        explanation: "「車」的訓讀為「くるま」（Kuruma）。「じどうしゃ」是「自動車」的發音。考點漢字未標音以供測驗。"
    },
    {
        id: 2, section: "vocabulary",
        question: "昨日、<strong>図書館</strong>へ行きました。",
        options: ["としょかん", "ずしょかん", "ちずかん", "としょけん"], correct: 0, correctText: "としょかん",
        explanation: "「図書館」讀作「としょかん」（Toshokan）。"
    },
    {
        id: 3, section: "vocabulary",
        question: "私の部屋は<strong>暗い</strong>です。",
        options: ["おもい", "くらい", "かるい", "ひろい"], correct: 1, correctText: "くらい",
        explanation: "「暗い」讀作「くらい」，指昏暗。其餘：おもい（重）、かるい（輕）、ひろい（寬）。"
    },
    {
        id: 4, section: "vocabulary",
        question: "ここで<strong>待って</strong>ください。",
        options: ["もって", "まって", "とまって", "はしって"], correct: 1, correctText: "まって",
        explanation: "動詞「待つ」的て形為促音便「待って」（Matte）。其餘：もって（持）、とまって（止/泊）、はしって（走）。"
    },
    {
        id: 5, section: "vocabulary",
        question: "日本の<strong>秋</strong>はきれいです。",
        options: ["はる", "なつ", "あき", "ふゆ"], correct: 2, correctText: "あき",
        explanation: "「秋」讀作「あき」（Aki）。其餘為：春（はる）、夏（なつ）、冬（ふゆ）。"
    },
    {
        id: 6, section: "vocabulary",
        question: "彼は<strong>病気</strong>で休みました。",
        options: ["びょうき", "へいき", "よわき", "げんき"], correct: 0, correctText: "びょうき",
        explanation: "「病気」讀作「びょうき」，代表生病。其餘：へいき（平氣）、げんき（元氣）。"
    },
    {
        id: 7, section: "vocabulary",
        question: "妹は<strong>洋服</strong>が欲しいと言っています。",
        options: ["ようふく", "わふく", "きもの", "せいふく"], correct: 0, correctText: "ようふく",
        explanation: "「洋服」讀作「ようふく」，指西式服裝。其餘：わふく（和服）、せいふく（制服）。"
    },
    {
        id: 8, section: "vocabulary",
        question: "もっと<strong>近く</strong>へ来てください。",
        options: ["とおく", "ちかく", "おそく", "はやく"], correct: 1, correctText: "ちかく",
        explanation: "「近く」讀作「ちかく」，指附近、近處。其餘：とおく（遠く）、おそく（遅く）、はやく（早く）。"
    },
    {
        id: 9, section: "vocabulary",
        question: "朝ご飯を<strong>たべて</strong>から、学校へ行きます。",
        options: ["飲んで", "行って", "食べて", "買って"], correct: 2, correctText: "食べて",
        explanation: "平假名「たべて」寫成漢字是「食べて」（來自吃「食べる」）。"
    },
    {
        id: 10, section: "vocabulary",
        question: "新しい<strong>じてんしゃ</strong>を買いました。",
        options: ["自動車", "自転車", "自車転", "運転車"], correct: 1, correctText: "自転車",
        explanation: "「じてんしゃ」的漢字是「自転車」（自行車）。"
    },
    {
        id: 11, section: "vocabulary",
        question: "友達と<strong>やくそく</strong>をしました。",
        options: ["約則", "約速", "約束", "要束"], correct: 2, correctText: "約束",
        explanation: "「やくそく」的漢字寫法為「約束」（約定、約會）。"
    },
    {
        id: 12, section: "vocabulary",
        question: "あそこの交差点を<strong>みぎ</strong>に曲がってください。",
        options: ["右", "左", "東", "西"], correct: 0, correctText: "右",
        explanation: "「みぎ」代表「右」邊。「左」是「ひだり」。"
    },
    {
        id: 13, section: "vocabulary",
        question: "<strong>あつい</strong>お茶をどうぞ。",
        options: ["暑い", "熱い", "厚い", "甘い"], correct: 1, correctText: "熱い",
        explanation: "形容液體、物體溫度高時使用「熱い」。天氣熱用「暑い」；厚度厚用「厚い」。"
    },
    {
        id: 14, section: "vocabulary",
        question: "熱がありますから、今日はお風呂に（　）早く寝てください。",
        options: ["入って", "入らないで", "入れば", "入ろう"], correct: 1, correctText: "入らないで",
        explanation: "句意為發燒請不要泡澡。表示「請不要做某動作」，使用「動詞 ない形 + でください」。"
    },
    {
        id: 15, section: "vocabulary",
        question: "スーパーで買った果物は（　）おいしかったです。",
        options: ["ずいぶん", "たぶん", "とても", "ちょうど"], correct: 2, correctText: "とても",
        explanation: "「とても」修飾形容詞表示「非常」。ずいぶん為相當（多帶驚訝），たぶん為大概。"
    },
    {
        id: 16, section: "vocabulary",
        question: "雨が降ってきましたから、傘を（　）行きましょう。",
        options: ["かぶって", "さして", "はいて", "きて"], correct: 1, correctText: "さして",
        explanation: "「撐傘」在日文是「傘をさす」，て形為「さして」。かぶる為戴帽，はく為穿鞋褲，きる為穿衣。"
    },
    {
        id: 17, section: "vocabulary",
        question: "このアパートは<strong>家賃</strong>が高いです。這句話和以下何者意思最接近？",
        options: [
            "このアパートは部屋の代金が高いです。",
            "このアパートはご飯の代金が高いです。",
            "このアパートは電気の代金が高いです。",
            "このアパートは洋服の代金が高いです。"
        ], correct: 0, correctText: "このアパートは部屋の代金が高いです。",
        explanation: "「家賃（やちん）」指租屋的租金，即房間的費用（部屋の代金）。"
    },
    {
        id: 18, section: "vocabulary",
        question: "山田さんは<strong>さっき</strong>帰りました。這句話和以下何者意思最接近？",
        options: ["もうすぐ", "少し前に", "これから", "さきほどまで"], correct: 1, correctText: "少し前に",
        explanation: "「さっき」代表剛才、不久前，與「少し前に」（不久前）意思最接近。"
    },
    {
        id: 19, section: "vocabulary",
        question: "<strong>うつす</strong>的正確用法是？",
        options: [
            "カメラで景色をうつしました。",
            "明日までにこのレポートをうつさなければなりません。",
            "部屋の机を窓の近くにうつしました。",
            "友達に本をうつしました。"
        ], correct: 1, correctText: "明日までにこのレポートをうつさなければなりません。",
        explanation: "「写す（うつす）」指謄寫、抄寫或照相。此處選項 2 代表「抄寫這份報告」最合適。選項 3 移動桌子的「うつす」應寫作「移す」。"
    },
    {
        id: 20, section: "vocabulary",
        question: "<strong>きびしい</strong>的正確用法是？",
        options: [
            "あの先生は学生にとてもきびしいです。",
            "このジュースはきびしい味がします。",
            "今日は天気が良くてきびしいです。",
            "この部屋は狭くてきびしいです。"
        ], correct: 0, correctText: "あの先生は学生にとてもきびしいです。",
        explanation: "「きびしい（厳しい）」意為「嚴格的、嚴厲的」。選項 1「那位老師對學生非常嚴格」符合用法。"
    },
    {
        id: 21, section: "vocabulary",
        question: "ここは<strong>安全</strong>な場所です。",
        options: ["かんぜん", "あんぜん", "しんぜん", "あんしん"], correct: 1, correctText: "あんぜん",
        explanation: "「安全」的讀音是「あんぜん」（Anzen）。其餘：かんぜん（完全）、あんしん（安心）。"
    },
    {
        id: 22, section: "vocabulary",
        question: "今日、新しい<strong>技術</strong>を学びました。",
        options: ["ぎじゅつ", "ぎじゅち", "きじゅつ", "しじゅつ"], correct: 0, correctText: "ぎじゅつ",
        explanation: "「技術」讀作「ぎじゅつ」（Gijutsu）。"
    },
    {
        id: 23, section: "vocabulary",
        question: "友達を私の家に<strong>招待</strong>しました。",
        options: ["しょうたい", "しょうだい", "せいたい", "じょうたい"], correct: 0, correctText: "しょうたい",
        explanation: "「招待」讀作「しょうたい」，代表招待、邀請。注意「状態」讀作「じょうたい」。"
    },
    {
        id: 24, section: "vocabulary",
        question: "彼は<strong>特別</strong>な人です。",
        options: ["とくべつ", "とくへつ", "とくべち", "どくべつ"], correct: 0, correctText: "とくべつ",
        explanation: "「特別」讀作「とくべつ」（Tokubetsu）。"
    },
    {
        id: 25, section: "vocabulary",
        question: "その映画はとても<strong>有名</strong>です。",
        options: ["ゆうめい", "ゆめい", "ゆうめ", "ゆめ"], correct: 0, correctText: "ゆうめい",
        explanation: "「有名」讀作有長音的「ゆうめい」（Yuumei）。「夢」讀作「ゆめ」。"
    },
    {
        id: 26, section: "vocabulary",
        question: "<strong>火事</strong>に気をつけてください。",
        options: ["かじ", "かち", "かし", "がじ"], correct: 0, correctText: "かじ",
        explanation: "「火事」讀作「かじ」（Kaji），指火災。「家事」亦讀作「かじ」。"
    },
    {
        id: 27, section: "vocabulary",
        question: "<strong>英語</strong>の授業は面白いです。",
        options: ["えご", "えいこ", "えいご", "えんご"], correct: 2, correctText: "えいご",
        explanation: "「英語」讀作「えいご」（Eigo）。"
    },
    {
        id: 28, section: "vocabulary",
        question: "来週、<strong>試験</strong>があります。",
        options: ["しけん", "じけん", "しけんけん", "せいけん"], correct: 0, correctText: "しけん",
        explanation: "「試験」讀作「しけん」（Shiken），指考試。而「事件」讀作「じけん」。"
    },
    {
        id: 29, section: "vocabulary",
        question: "今度の旅行の<strong>準備</strong>をします。",
        options: ["じゅんび", "じゅんぴ", "しゅんび", "しゅんぴ"], correct: 0, correctText: "じゅんび",
        explanation: "「準備」讀作「じゅんび」（Junbi）。"
    },
    {
        id: 30, section: "vocabulary",
        question: "<strong>住所</strong>を書いてください。",
        options: ["じゅうしょ", "じゅしょ", "しゅうしょ", "じゅうじょ"], correct: 0, correctText: "じゅうしょ",
        explanation: "「住所」讀作「じゅうしょ」（Juusho），指住址。"
    },
    {
        id: 31, section: "vocabulary",
        question: "あそこで<strong>しゃしん</strong>を撮りましょう。",
        options: ["真写", "写真", "写紙", "真紙"], correct: 1, correctText: "写真",
        explanation: "「しゃしん」的漢字為「写真」。"
    },
    {
        id: 32, section: "vocabulary",
        question: "毎日日本語を<strong>べんきょう</strong>します。",
        options: ["勉教", "強勉", "勉強", "勉協"], correct: 2, correctText: "勉強",
        explanation: "「べんきょう」寫成漢字為「勉強」（學習）。"
    },
    {
        id: 33, section: "vocabulary",
        question: "デパートへ<strong>かいもの</strong>に行きます。",
        options: ["買物", "買物", "買い物", "買物"],
        options: ["買物", "買持", "買い物", "交い物"], correct: 2, correctText: "買い物",
        explanation: "「かいもの」的漢字寫法為「買い物」（買東西）。"
    },
    {
        id: 34, section: "vocabulary",
        question: "お<strong>かね</strong>がありません。",
        options: ["金", "銀", "銅", "鉄"], correct: 0, correctText: "金",
        explanation: "「かね/おかね」的漢字是「金」，代表錢財。"
    },
    {
        id: 35, section: "vocabulary",
        question: "あそこの<strong>かど</strong>を左に曲がります。",
        options: ["門", "角", "側", "端"], correct: 1, correctText: "角",
        explanation: "「かど」指拐角、角落，漢字為「角」。「門」讀作「もん」。"
    },
    {
        id: 36, section: "vocabulary",
        question: "彼は<strong>いしゃ</strong>になりました。",
        options: ["医者", "医師", "役者", "学者"], correct: 0, correctText: "医者",
        explanation: "「いしゃ」的漢字是「医者」（醫生）。"
    },
    {
        id: 37, section: "vocabulary",
        question: "昨日、本を<strong>かり</strong>ました。",
        options: ["貸し", "借り", "返し", "送り"], correct: 1, correctText: "借り",
        explanation: "「かりる」的漢字是「借りる」（借入）。「貸す（かす）」是借出。"
    },
    {
        id: 38, section: "vocabulary",
        question: "宿題を<strong>わすれ</strong>ました。",
        options: ["失れ", "去れ", "忘れ", "落れ"], correct: 2, correctText: "忘れ",
        explanation: "「わすれる」的漢字是「忘れる」。"
    },
    {
        id: 39, section: "vocabulary",
        question: "<strong>ひろい</strong>部屋ですね。",
        options: ["広い", "狭い", "明るい", "暗い"], correct: 0, correctText: "広い",
        explanation: "「ひろい」的漢字是「広い」（寬敞的）。「狭い」讀作「せまい」。"
    },
    {
        id: 40, section: "vocabulary",
        question: "<strong>あかるい</strong>未来があります。",
        options: ["暗い", "軽い", "明るい", "赤い"], correct: 2, correctText: "明るい",
        explanation: "「あかるい」的漢字為「明るい」（明亮的）。"
    },
    {
        id: 41, section: "vocabulary",
        question: "お腹が痛いですから、薬を（　）ください。",
        options: ["食べて", "飲んで", "入れて", "吸って"], correct: 1, correctText: "飲んで",
        explanation: "在日文中，吃/服用藥物固定搭配使用動詞「飲む」，て形為「飲んで」。"
    },
    {
        id: 42, section: "vocabulary",
        question: "風が（　）吹いています。",
        options: ["強く", "重く", "ひどく", "深く"], correct: 0, correctText: "強く",
        explanation: "形容風刮得很大，在日文中使用「風が強く吹く（風很大）」。"
    },
    {
        id: 43, section: "vocabulary",
        question: "昨日、（　）風邪をひきました。",
        options: ["ひどい", "からい", "ぬるい", "あぶない"], correct: 0, correctText: "ひどい",
        explanation: "形容感冒很嚴重，日文使用「ひどい風邪（嚴重的感冒）」。"
    },
    {
        id: 44, section: "vocabulary",
        question: "昨日買った服は（　）大きかったです。",
        options: ["少し", "全然", "ちっとも", "決して"], correct: 0, correctText: "少し",
        explanation: "「少し（稍微）」可用於肯定句修飾形容詞。其餘三個選項「全然、ちっとも、決して」一般與否定句搭配使用。"
    },
    {
        id: 45, section: "vocabulary",
        question: "電車が遅れて、（　）約束の時間に間に合いませんでした。",
        options: ["とうとう", "やっと", "たいてい", "ついに"], correct: 0, correctText: "とうとう",
        explanation: "「とうとう」指經過一番波折後，最終產生了「不好」的結果。而「やっと」通常指最終獲得了「好」的結果。"
    },
    {
        id: 46, section: "vocabulary",
        question: "<strong>あつめる</strong>的正確用法是？",
        options: [
            "ゴミはここに集めてください。",
            "友達の住所を集めました。",
            "お風呂に水を集めました。",
            "明日の予定を集めてください。"
        ], correct: 0, correctText: "ゴミはここに集めてください。",
        explanation: "「集める（あつめる）」指收集、集中（物品、人等）。「ゴミを集める」意為集中垃圾。"
    },
    {
        id: 47, section: "vocabulary",
        question: "<strong>ひろう</strong>的正確用法是？",
        options: [
            "道で綺麗な石を拾いました。",
            "タクシーを拾って school へ行きました。",
            "先生の言葉を拾いました。",
            "本棚から本を拾いました。"
        ], correct: 0, correctText: "道で綺麗な石を拾いました。",
        explanation: "「拾う（ひろう）」指撿起掉在地上的東西。選項 1「在路上撿到美麗的石頭」完全正確。搭計程車一般用「タクシーに乗る/呼ぶ」。"
    },
    {
        id: 48, section: "vocabulary",
        question: "<strong>つれていく</strong>的正確用法是？",
        options: [
            "犬を散歩に連れて行きました。",
            "荷物を部屋に連れて行きました。",
            "自転車を駅に連れて行きました。",
            "手紙をポストに連れて行きました。"
        ], correct: 0, correctText: "犬を散歩に連れて行きました。",
        explanation: "「連れて行く（つれていく）」指帶領「有生命者（如人、動物）」同行。攜帶無生命物品應使用「持って行く（もっていく）」。"
    },
    {
        id: 49, section: "vocabulary",
        question: "山田さんは<strong>だんだん</strong>日本語が上手になりました。與此句意思最接近的是？",
        options: [
            "山田さんは少しずつ日本語が上手になりました。",
            "山田さんは急に日本語が上手になりました。",
            "山田さんはとても日本語が上手になりました。",
            "山田さんは全然日本語が上手になりませんでした。"
        ], correct: 0, correctText: "山田さんは少しずつ日本語が上手になりました。",
        explanation: "「だんだん（漸漸地）」表示事物隨時間逐漸變化，與「少しずつ（一點一點地）」意思最接近。而「急に」是突然。"
    },
    {
        id: 50, section: "vocabulary",
        question: "その話を聞いて<strong>びっくりしました</strong>。與此句意思最接近的是？",
        options: [
            "その話を聞いて驚きました。",
            "その話を聞いて怒りました。",
            "その話を聞いて笑いました。",
            "その話を聞いて泣きました。"
        ], correct: 0, correctText: "その話を聞いて驚きました。",
        explanation: "「びっくりする」為嚇一跳、吃驚，與「驚く（おどろく）」意思相同。其餘：怒る（生氣）、笑う（笑）、泣く（哭）。"
    },

    // --- 文法 (51-90) ---
    {
        id: 51, section: "grammar",
        question: "私は日本語（　）話すことができます。",
        options: ["に", "を", "が", "で"], correct: 2, correctText: "が",
        explanation: "能力對象的助詞通常用「が」。在「～ことができる」（能做某事）的前方通常使用「が」。"
    },
    {
        id: 52, section: "grammar",
        question: "お茶（　）飲みませんか。",
        options: ["でも", "しか", "までに", "ながら"], correct: 0, correctText: "進でも",
        explanation: "「進でも」在此處表示提議或婉轉的舉例，代表「喝杯茶之類的吧」。其餘選項：「しか...ない」代表僅僅、「ながら」一邊...一邊。"
    },
    {
        id: 53, section: "grammar",
        question: "木村さんはもう帰った（　）です。",
        options: ["はず", "つもり", "ため", "そう"], correct: 0, correctText: "はず",
        explanation: "「～はずです」接在動詞普通形後，表示說話者根據客觀事實進行「理所當然的推測」，意思是「應該...」。"
    },
    {
        id: 54, section: "grammar",
        question: "これから勉強する（　）です。",
        options: ["はず", "つもり", "ところ", "たった"], correct: 2, correctText: "ところ",
        explanation: "「動詞基本形 + ところです」表示「即將要開始做某動作」。句意：「我現在正要開始學習。」"
    },
    {
        id: 55, section: "grammar",
        question: "天気が良ければ、明日公園へ（　）と思っています。",
        options: ["行く", "行こう", "行って", "行きます"], correct: 1, correctText: "行こう",
        explanation: "「動詞意志形 + と思っています」表示「打算做某事」。動詞「行く」的意志形為「行こう」。"
    },
    {
        id: 56, section: "grammar",
        question: "薬を飲んだ（　）、もう熱は下がりました。",
        options: ["ので", "のに", "からに", "ためで"], correct: 0, correctText: "ので",
        explanation: "「ので」表示客觀的因果關係，前方接普通形。句意：「因為吃了藥，發燒已經退了。」而「のに」表示轉折（明明...卻）。"
    },
    {
        id: 57, section: "grammar",
        question: "部屋の窓が（　）。",
        options: ["閉めてあります", "閉まっています", "閉めています", "閉まります"], correct: 1, correctText: "閉まっています",
        explanation: "「自動詞 + ています」表示某物目前的自然狀態。窗戶（自己）是關著的，用自動詞「閉まる」的 ています 形，即「閉まっています」。"
    },
    {
        id: 58, section: "grammar",
        question: "昨日、私は母に買い物を（　）ました。",
        options: ["頼まれ", "頼ませ", "頼んで", "頼み"], correct: 0, correctText: "頼まれ",
        explanation: "「被動形」。句意：「昨天，我被媽媽拜託去買東西。」動詞「頼む（拜託）」的被動形為「頼まれる」，過去式為「頼まれました」。"
    },
    {
        id: 59, section: "grammar",
        question: "先生は學生に本を（　）ました。",
        options: ["読まれ", "読ませ", "読ませられ", "読ん"], correct: 1, correctText: "読ませ",
        explanation: "「使役形」。句意：「老師讓學生讀書。」表示上級讓下級做某事，用使役形。第一類動詞「読む」的使役形為「読ませる」，過去式為「読ませました」。"
    },
    {
        id: 60, section: "grammar",
        question: "私は母に毎日野菜を（　）ます。",
        options: ["食べさせ", "食べられ", "食べさせられ", "食べて"], correct: 2, correctText: "食べさせられ",
        explanation: "「使役被動形」。句意：「我每天都被媽媽逼著吃蔬菜。」使役被動代表「無奈被迫做某事」。第二類動詞「食べる」的使役被動形為「食べさせられる」。"
    },
    {
        id: 61, section: "grammar",
        question: "私は誕生日に友達に時計を（　）ました。",
        options: ["もらい", "あげ", "くれ", "やり"], correct: 0, correctText: "もらい",
        explanation: "「授受動詞」。句意：「我生日時從朋友那裡得到了一隻手錶。」主詞是「我」，介係詞是「友達に」，表示從他人處得到，所以用「もらいました」。"
    },
    {
        id: 62, section: "grammar",
        question: "友達が私にプレゼントを（　）。",
        options: ["あげました", "もらいました", "くれました", "やりました"], correct: 2, correctText: "くれました",
        explanation: "「授受動詞」。句意：「朋友送我禮物。」當主語是他人，對象是「我」或我方的親人，且方向是「給我」時，必須使用「くれます（過去式：くれました）」。"
    },
    {
        id: 63, section: "grammar",
        question: "雨が（　）、旅行に行きません。",
        options: ["降れば", "降ったら", "降るなら", "降って"], correct: 1, correctText: "降ったら",
        explanation: "「～たら」表示假定條件，最常用於一般生活假定。句意：「如果下雨的話，就不去旅行了。」"
    },
    {
        id: 64, section: "grammar",
        question: "このボタンを（　）、切符が出ます。",
        options: ["押すと", "押したら", "押せば", "押すなら"], correct: 0, correctText: "押すと",
        explanation: "「動詞基本形 + と」表示恆常性的自然規律、機械操作所產生的必然結果。「一按這個按鈕，票就會出來。」最為合適。"
    },
    {
        id: 65, section: "grammar",
        question: "請將以下句子重組，並選出置於 <span class='star-mark'>★</span> 的選項：<br>這是 [父が] [私に] [★ 日本で] [買った] 照相機。<br>選項：① 日本で &nbsp; ② 買った &nbsp; ③ 父が &nbsp; ④ 私に",
        options: ["日本で (①)", "買った (②)", "父が (③)", "私に (④)"], correct: 0, correctText: "日本で (①)",
        explanation: "重組順序為：「これは [父が (③)] [私に (④)] [★ 日本で (①)] [買った (②)] カメラです。」（這是爸爸在日本買給我的相機。）星號在第三格，所以答案是 ① 日本で。"
    },
    {
        id: 66, section: "grammar",
        question: "請將以下句子重組，並選出置於 <span class='star-mark'>★</span> 的選項：<br>昨日 ＿＿ ＿＿ ＿<span class='star-mark'>★</span>＿ ＿＿ 買いました。<br>選項：① 本を &nbsp; ② 面白い &nbsp; ③ 友達が &nbsp; ④ 書いた",
        options: ["本を (①)", "面白い (②)", "友達が (③)", "書いた (④)"], correct: 1, correctText: "面白い (②)",
        explanation: "重組順序為：「昨日 [友達が (③)] [書いた (④)] [★ 面白い (②)] [本を (①)] 買いました。」（昨天買了朋友寫的有趣書籍。）星號在第三格，所以答案是 ② 面白い。"
    },
    {
        id: 67, section: "grammar",
        question: "先生、今日の会議の資料はもう（　）か。",
        options: ["ご覧になりました", "拝見しました", "見せました", "お見せになりました"], correct: 0, correctText: "ご覧になりました",
        explanation: "「敬語」。此處對老師表示尊敬，要用尊敬語。動詞「見る」的尊敬語為「ご覧になる」，過去式問句為「ご覧になりましたか」。「拝見する」是謙讓語，用於自己看。"
    },
    {
        id: 68, section: "grammar",
        question: "私は先生の荷物を（　）ます。",
        options: ["お持ちし", "お持ちになり", "持たれ", "持たせ"], correct: 0, correctText: "お持ちし",
        explanation: "「謙讓語」。我幫老師拿行李，對老師表示敬意，要降低自己，用謙讓語「お + 動詞ます形去ます + する」，動詞「持つ」的謙讓形為「お持ちします」。"
    },
    {
        id: 69, section: "grammar",
        question: "空が暗いですから、雨が（　）です。",
        options: ["降るそう", "降りそう", "降ったそう", "降りそうにない"], correct: 1, correctText: "降りそう",
        explanation: "「樣態助動詞 ～そうだ」表示「看起來快要...」。動詞ます形去ます接「そうだ」。「降る」變「降り」+「そうです」。句意：「天空很暗，看起來要下雨了。」"
    },
    {
        id: 70, section: "grammar",
        question: "（文章填空）お風呂から（　）あとで、冷たい牛乳を飲みました。",
        options: ["出た", "出て", "出る", "出なければ"], correct: 0, correctText: "出た",
        explanation: "表示「做完某動作之後」，文法為「動詞 た形 + あとで」。因此使用過去式簡體「出た」。"
    },
    {
        id: 71, section: "grammar",
        question: "私は先生（　）日本語の辞書をいただきました。",
        options: ["で", "に", "が", "を"], correct: 1, correctText: "に",
        explanation: "授受關係中，從長輩處得到某物，使用謙讓句型「〜に（または〜から）いただきます」。"
    },
    {
        id: 72, section: "grammar",
        question: "風が強くて、帽子が飛ば（　）ました。",
        options: ["され", "させ", "されられ", "せられ"], correct: 0, correctText: "され",
        explanation: "被動關係。帽子「被吹走」，動詞為「飛ばす」的被動形，即「飛ばされる（過去形為飛ばされました）」。"
    },
    {
        id: 73, section: "grammar",
        question: "壁に綺麗な写真が（　）あります。",
        options: ["掛けて", "掛かって", "掛ける", "掛かる"], correct: 0, correctText: "掛けて",
        explanation: "「他動詞て形 + あります」表示某人為了某種目的而做某動作，其產生的狀態依然存留。他動詞為「掛ける」，て形為「掛けて」。自動詞是「掛かる」。"
    },
    {
        id: 74, section: "grammar",
        question: "明日早く起きるので、もう寝（　）ます。",
        options: ["てみ", "ておき", "てしまい", "てあり"], correct: 1, correctText: "ておき",
        explanation: "「〜ておきます」表示「為了某種目的而預先做好準備」。句意為因為明天要早起，所以「現在預先去睡覺」。"
    },
    {
        id: 75, section: "grammar",
        question: "ちょっとビールでも（　）みませんか。",
        options: ["飲み", "飲んで", "飲む", "飲まな"], correct: 1, correctText: "飲んで",
        explanation: "「〜てみます」表示「嘗試做某事」。動詞「飲む」的て形為「飲んで」。"
    },
    {
        id: 76, section: "grammar",
        question: "大切な書類を電車の中に忘れて（　）ました。",
        options: ["き", "おき", "しまい", "あり"], correct: 2, correctText: "しまい",
        explanation: "「〜てしまいます」在此處表示「無奈、遺憾的遺失或完成」。動詞「忘れる」的て形為「忘れて」+「しまいました」。"
    },
    {
        id: 77, section: "grammar",
        question: "私は歌舞伎を（　）ことがあります。",
        options: ["見る", "見て", "見た", "見ない"], correct: 2, correctText: "見た",
        explanation: "「動詞た形 + ことがあります」表示「曾經有過某種經驗」。「歌舞伎（かぶき）」為日本傳統戲劇。句意為「我曾看過歌舞伎」。"
    },
    {
        id: 80, section: "grammar",
        question: "この料理は砂糖を入れすぎて、（　）すぎます。",
        options: ["甘", "甘い", "甘く", "甘くて"], correct: 0, correctText: "甘",
        explanation: "「形容詞去詞尾（い/な）+ じる」表示「程度過度」。い形容詞「甘い」去い變「甘」+「すぎます」（太甜了）。"
    },
    {
        id: 78, section: "grammar",
        question: "日本へ留学（　）ために、日本語を一生懸命勉強しています。",
        options: ["する", "した", "している", "したい"], correct: 0, correctText: "する",
        explanation: "「動詞基本形 + ために」表示「目的（為了...）」。前後主詞須一致且為意志動詞。所以用「留学するために」。"
    },
    {
        id: 79, section: "grammar",
        question: "このペンは少し（　）にくいですね。",
        options: ["書き", "書く", "書いて", "書か"], correct: 0, correctText: "書き",
        explanation: "「動詞ます形去ます + にくい」表示「難以進行某動作」。動詞「書く」的ます形為「書きます」，去ます為「書き」+「にくい」（難寫）。"
    },
    {
        id: 81, section: "grammar",
        question: "天氣予報によると、明日は雨が（　）そうです。",
        options: ["降る", "降り", "降って", "降るの"], correct: 0, correctText: "降る",
        explanation: "表示「傳聞（據說）」，句型為「動詞普通形 + そうです」。因此使用普通形「降る」。"
    },
    {
        id: 82, section: "grammar",
        question: "どうぞお茶を（　）ください。",
        options: ["お飲み", "お飲みになり", "お飲みして", "召し上がって"], correct: 3, correctText: "召し上がって",
        explanation: "勸客人吃或喝東西的敬語表達，最常用「召し上がってください」（請享用/請喝）。"
    },
    {
        id: 83, section: "grammar",
        question: "昨日、私は鈴木社長に（　）ました。",
        options: ["お目にかかり", "お会いになり", "いらっしゃい", "お会いし"], correct: 0, correctText: "お目にかかり",
        explanation: "「謙讓語」。我見到了鈴木社長。動詞「会う（見面）」的謙讓語為「お目にかかる」，過去式為「お目にかかりました」。"
    },
    {
        id: 84, section: "grammar",
        question: "外はとても寒いですから、部屋を（　）してください。",
        options: ["暖かく", "暖かい", "暖かくて", "暖か"], correct: 0, correctText: "暖かく",
        explanation: "「形容詞 + する」表示「人使物體狀態發生改變」。い形容詞「暖かい」要變成副詞修飾「する」，去い變く，即「暖かくしてください」（請讓房間變溫暖）。"
    },
    {
        id: 85, section: "grammar",
        question: "請將以下句子重組，並選出置於 <span class='star-mark'>★</span> 的選項：<br>明日 ＿＿ ＿＿ ＿<span class='star-mark'>★</span>＿ ＿＿ 行きます。<br>選項：① 友達と &nbsp; ② 海へ &nbsp; ③ 泳ぎに &nbsp; ④ 一緒に",
        options: ["友達と (①)", "海へ (②)", "泳ぎに (③)", "一緒に (④)"], correct: 2, correctText: "泳ぎに (③)",
        explanation: "重組順序為：「明日 [友達と (①)] [一緒に (④)] [★ 泳ぎに (③)] [海へ (②)] 行きます。」（明天要和朋友一起去海邊游泳。）星號在第三格，答案是 ③ 泳ぎに。"
    },
    {
        id: 86, section: "grammar",
        question: "請將以下句子重組，並選出置於 <span class='star-mark'>★</span> 的選項：<br>昨日 ＿＿ ＿＿ ＿<span class='star-mark'>★</span>＿ ＿＿ 行きませんでした。<br>選項：① 降った &nbsp; ② ので &nbsp; ③ 雨が &nbsp; ④ どこへも",
        options: ["降った (①)", "ので (②)", "雨が (③)", "どこへも (④)"], correct: 1, correctText: "ので (②)",
        explanation: "重組順序為：「昨日 [雨が (③)] [降った (①)] [★ ので (②)] [どこへも (④)] 行きませんでした。」（昨天因為下雨，哪裡也沒去。）星號在第三格，答案是 ② ので。"
    },
    {
        id: 87, section: "grammar",
        question: "私は山田さんに漢字を（　）ました。",
        options: ["教えてもらえ", "教えてもらい", "教えてくれ", "教えてあげ"], correct: 1, correctText: "教えてもらい",
        explanation: "「授受動詞」。主詞是「我」，山田さん後面是「に」，表示「我請山田先生教我漢字」，使用「〜てもらいました」。"
    },
    {
        id: 88, section: "grammar",
        question: "先生、どうぞここにお（　）ください。",
        options: ["掛け", "掛ける", "掛けになり", "掛けし"], correct: 0, correctText: "掛け",
        explanation: "「尊敬語」。請老師坐下的勸誘敬語用法為：「お + 動詞ます形去ます + ください」。「掛ける（坐）」的ます形為「掛けます」，所以是「お掛けください」。"
    },
    {
        id: 89, section: "grammar",
        question: "夜遅くテレビを（　）いたら、隣の人に怒られました。",
        options: ["見て", "見", "見られて", "見せて"], correct: 0, correctText: "見て",
        explanation: "句意：「深夜正看著電視時，被鄰居生氣了。」「〜ていたら」表示當正進行某動作時，突然發生了後面的狀況。動詞「見る」的て形為「見て」。"
    },
    {
        id: 90, section: "grammar",
        question: "日本へ（　）前に、たくさん日本語を勉強しました。",
        options: ["行く", "行った", "行って", "行こう"], correct: 0, correctText: "行く",
        explanation: "「在做某動作之前」，句型為「動詞基本形 + 前に」。因此使用動詞基本形「行く」。"
    },

    // --- 讀解 (91-100) ---
    {
        id: 91, section: "reading",
        passage: "昨日、私は友達の山田さんと美術館へ行きました。美術館は午前9時から午後5時まで開いています。私たちは午前10時に入って、2時間くらい絵を見ました。そのあと、美術館の近くのレストランで昼ご飯を食べました。",
        question: "<strong>問題：二人は何時ごろ美術館を出ましたか。</strong>",
        options: ["午前9時ごろ", "午前10時ごろ", "12時ごろ", "午後5時ごろ"], correct: 2, correctText: "12時ごろ",
        explanation: "文章提到：「我們在午前 10 時進去（午前10時に入って），看了大約 2 小時（2時間くらい絵を見ました）」，所以出館時間是 10 + 2 = 12 點左右。"
    },
    {
        id: 92, section: "reading",
        passage: "さくら日本語学校からのお知らせ：\n来週の金曜日（7月10日）は、学校の旅行です。朝8時に学校の前に集まってください。バスで行きます。遅れないようにしてください。もし雨が降っても旅行はあります。しかし、台風の場合は休みになります。休みになる時は、前日の夜8時までにメールで連絡します。",
        question: "<strong>問題：雨が降った場合、旅行はどうなりますか。</strong>",
        options: [
            "旅行はありません。",
            "旅行はあります。",
            "台風になります。",
            "前日の夜8시에メールで連絡します。"
        ], correct: 1, correctText: "旅行はあります。",
        explanation: "文章明確寫道：「もし雨が降っても旅行はあります（下雨的話旅行仍然舉行）」。只有遇到颱風才會取消（台風の場合は休みになります）。"
    },
    {
        id: 93, section: "reading",
        passage: "木村さん、\n昨日借りた本を今日返そうと思いましたが、木村さんが休みでしたから、返せませんでした。明日持って行きます。もし明日も休みなら、木村さんの机の上に置いておきます。よろしくお願いします。\n――たなかより",
        question: "<strong>問題：たなかさんは明日どうしますか。</strong>",
        options: [
            "今日中に本を返します。",
            "明日木村さんに本を直接渡し、休みなら机の上に置きます。",
            "木村さんの家に行って本を返します。",
            "本を返すのをやめて自分で読みます。"
        ], correct: 1, correctText: "明日木村さんに本を直接渡し、休みなら机の上に置きます。",
        explanation: "便條中說：「明日持って行きます（明天帶去）」，並說「もし明日も休みなら、木村さんの机の上に置いておきます（若明天也放假，就放在木村桌上）」。代表他會帶去，木村在就直接給，不在就放桌上。"
    },
    {
        id: 94, section: "reading",
        passage: "このマンションのごみの出し方について：\n燃えるごみは毎週火曜日と金曜日の朝8時までに出してください。ペットボトルと缶は毎週水曜日に出します。ガラスやプラスチックなどの燃えないごみは、毎月第2木曜日に出してください。時間はどれも朝8時までです。",
        question: "<strong>問題：水曜日に出せるごみは何ですか。</strong>",
        options: ["燃えるごみ", "ペットボトルと缶", "燃えないごみ", "すべてのごみ"], correct: 1, correctText: "ペットボトルと缶",
        explanation: "文章第二句指出：「ペットボトルと缶は毎週水曜日に出します（寶特瓶和鐵罐是每週三丟）」，所以答案是 2。"
    },
    {
        id: 95, section: "reading",
        passage: "鈴木さん、\n今日午後3時に鈴木さんの家へ行きましたが、鈴木さんは留守でした。ですから、持って行ったお菓子を鈴木さんの隣の部屋に住んでいる佐藤さんに預けました。佐藤さんから受け取ってください。また連絡します。\n――林より",
        question: "<strong>問題：鈴木さんはお菓子をどうやって受け取りますか。</strong>",
        options: [
            "林さんから直接受け取ります。",
            "隣の部屋の佐藤さんから受け取ります。",
            "自分で林さんの家へ取りに行きます。",
            "佐藤さんと一緒に林さんの家へ行きます。"
        ], correct: 1, correctText: "隣の部屋の佐藤さんから受け取ります。",
        explanation: "林留言說自己下午3點去鈴木家但鈴木不在家，所以把點心寄放在隔壁的佐藤那裡，請鈴木向佐藤拿。因此是向隔壁房間的佐藤拿。"
    },
    {
        id: 96, section: "reading",
        passage: "図書館からのお知らせ：\n本は一度に5冊まで、2週間借りることができます。ただし、新しく入った本（新刊）は2冊まで、1週間しか借りられません。返す日が遅れた場合、次の1ヶ月間、本を借りることができなくなりますので注意してください。",
        question: "<strong>問題：新しく入った本を借りる場合、正しい規則は何ですか。</strong>",
        options: [
            "5冊まで、2週間借りられます。",
            "2冊まで、1週間借りられます。",
            "返すのが遅れても大丈夫です。",
            "新刊は借りることができません。"
        ], correct: 1, correctText: "2冊まで、1週間借りられます。",
        explanation: "文中明確指出：「新しく入った本（新刊）は2冊まで、1週間しか借りられません（新書上限2本，只能借1週）」，所以答案是 2。"
    },
    {
        id: 97, section: "reading",
        passage: "切符の買い方：\n大人運賃は中学生以上（12歳以上）です。子供運賃（6歳以上12歳未満）は大人運賃の半額（半分の値段）になります。6歳未満の幼児は、大人一人につき二人まで無料になります。三人目からは子供運賃が必要です。",
        question: "<strong>問題：大人一人と、5歳の幼児三人の場合、切符の料金はどうなりますか。</strong>",
        options: [
            "大人一人分の料金だけでよいです。",
            "大人一人分と、子供一人分の料金が必要です。",
            "大人一人分と、子供三人分の料金が必要です。",
            "全員無料です。"
        ], correct: 1, correctText: "大人一人分と、子供一人分の料金が必要です。",
        explanation: "5歲幼兒為「6歲未満の幼児」。規則為「大人一人につき二人まで無料（一個大人陪同下，兩名幼兒免費）」，第三個人起需要兒童票（三人目からは子供運賃が必要）。因此需要大人1張 + 兒童1張的票價。"
    },
    {
        id: 98, section: "reading",
        passage: "佐藤さん、\n今日の夜7時に予約していたレストランですが、仕事が長引いてしまい、7時に間に合いそうにありません。レストランに電話して、8時に変更してもらいました。佐藤さんは7時半に駅の東口で待っていてください。私は直接レストランへ行きます。\n――木村より",
        question: "<strong>問題：佐藤さんは今日の夜、どうしますか。</strong>",
        options: [
            "夜7時にレストランへ直接行きます。",
            "夜7時半に駅の東口で待っています。",
            "夜8時に駅の東口で待っています。",
            "自分でレストランの予約を8時に変更します。"
        ], correct: 1, correctText: "夜7時半に駅の東口で待っています。",
        explanation: "便條木村寫給佐藤說：「佐藤さんは7時半に駅の東口で待っていてください（請佐藤7點半在車站東口等待）」，而木村自己會直接去改到8點的餐廳。所以答案是 2。"
    },
    {
        id: 99, section: "reading",
        passage: "健康診断のお知らせ：\n明日の午前9時から健康診断を行います。前日の夜10時以降は、何も食べないでください。水は飲んでも構いませんが、お茶やジュースは飲まないでください。また、明日の朝は朝食を食べずに来てください。よろしくお願いします。",
        question: "<strong>問題：明日の健康診断を受ける前のルールとして、正しいものはどれですか。</strong>",
        options: [
            "明日の朝、朝食を少し食べてから行きます。",
            "今夜の夜10時以降は、ジュースを飲んでもいいです。",
            "今夜の夜10時以降、水は飲んでもいいですが、お茶はだめです。",
            "明日の朝9時までは何を食べてもいいです。"
        ], correct: 2, correctText: "今夜の夜10時以降、水は飲んでもいいですが、お茶はだめです。",
        explanation: "公告指出前晚10點後不能吃東西。「水は飲んでも構いませんが、お茶やジュースは飲まないでください（水可以喝，但茶和果汁不能喝）」，且明早不能吃早餐。故選項 3 正確。"
    },
    {
        id: 100, section: "reading",
        passage: "ペットショップからのお願い：\n店内の犬や猫の写真を撮ってもいいですが、フラッシュ（光るもの）は使わないでください。動物たちが驚いてしまいます。また、ケージ（箱）の中に手や指を入れないでください。動物に触りたいときは、店員に声をかけてください。",
        question: "<strong>問題：店内で犬や猫と触れ合いたいとき、どうしなければなりませんか。</strong>",
        options: [
            "自由にケージの中に手を入れて觸ります。",
            "店員に声をかけます。",
            "フラッシュを使って写真を撮ります。",
            "何もせずに見てるだけです。"
        ], correct: 1, correctText: "店員に声をかけます。",
        explanation: "文章最後寫道：「動物に触りたいときは、店員に声をかけてください（想摸動物時請告知店員）」。選項 1「直接把手伸進籠子」是禁止的。故選 2。"
    }
];

// ==========================================================================
// 2. 音效產生器 (Web Audio API)
// ==========================================================================

const synth = {
    ctx: null,
    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },
    playCorrect() {
        this.init();
        const t = this.ctx.currentTime;
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0.12, t);
        gainNode.gain.exponentialRampToValueAtTime(0.01, t + 0.4);
        gainNode.connect(this.ctx.destination);

        const osc1 = this.ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(523.25, t); // C5
        osc1.frequency.setValueAtTime(659.25, t + 0.08); // E5
        osc1.connect(gainNode);

        const osc2 = this.ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(783.99, t + 0.08); // G5
        osc2.connect(gainNode);

        osc1.start(t);
        osc1.stop(t + 0.4);
        osc2.start(t + 0.08);
        osc2.stop(t + 0.4);
    },
    playIncorrect() {
        this.init();
        const t = this.ctx.currentTime;
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0.18, t);
        gainNode.gain.exponentialRampToValueAtTime(0.01, t + 0.35);
        gainNode.connect(this.ctx.destination);

        const osc1 = this.ctx.createOscillator();
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(120, t);
        osc1.connect(gainNode);

        const osc2 = this.ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(125, t);
        osc2.connect(gainNode);

        osc1.start(t);
        osc1.stop(t + 0.35);
        osc2.start(t);
        osc2.stop(t + 0.35);
    },
    playVictory() {
        this.init();
        const t = this.ctx.currentTime;
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0.15, t);
        gainNode.gain.exponentialRampToValueAtTime(0.01, t + 1.2);
        gainNode.connect(this.ctx.destination);

        const oscs = [];
        const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
        
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, t + idx * 0.1);
            osc.connect(gainNode);
            osc.start(t + idx * 0.1);
            osc.stop(t + 1.2);
            oscs.push(osc);
        });
    },
    playGameOver() {
        this.init();
        const t = this.ctx.currentTime;
        const gainNode = this.ctx.createGain();
        gainNode.gain.setValueAtTime(0.15, t);
        gainNode.gain.exponentialRampToValueAtTime(0.01, t + 0.8);
        gainNode.connect(this.ctx.destination);

        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, t);
        osc.frequency.linearRampToValueAtTime(80, t + 0.7);
        osc.connect(gainNode);
        osc.start(t);
        osc.stop(t + 0.8);
    }
};

// ==========================================================================
// 3. 櫻花飄落特效
// ==========================================================================

const sakuraEffect = {
    canvas: null,
    ctx: null,
    particles: [],
    maxParticles: 35,
    animationId: null,

    init() {
        this.canvas = document.getElementById('sakura-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        this.particles = [];
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(this.createParticle(true));
        }
        this.animate();
    },
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
    createParticle(randomY = false) {
        return {
            x: Math.random() * this.canvas.width,
            y: randomY ? Math.random() * this.canvas.height : -20,
            size: Math.random() * 8 + 6,
            speedX: Math.random() * 1.5 - 0.5 + 0.5,
            speedY: Math.random() * 1.2 + 0.8,
            rotation: Math.random() * 360,
            rotation(rotationSpeed) { return Math.random() * 2 - 1; },
            opacity: Math.random() * 0.4 + 0.4
        };
    },
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach((p, idx) => {
            p.y += p.speedY;
            p.x += p.speedX;
            if (p.rotationSpeed) p.rotation += p.rotationSpeed;
            else p.rotation += 1;

            if (p.y > this.canvas.height + 20 || p.x > this.canvas.width + 20) {
                this.particles[idx] = this.createParticle(false);
            }

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate((p.rotation * Math.PI) / 180);
            this.ctx.fillStyle = `rgba(255, 183, 197, ${p.opacity})`;
            
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.bezierCurveTo(-p.size, -p.size/2, -p.size/2, -p.size, 0, -p.size);
            this.ctx.bezierCurveTo(p.size/2, -p.size, p.size, -p.size/2, 0, 0);
            this.ctx.fill();
            this.ctx.restore();
        });
        this.animationId = requestAnimationFrame(() => this.animate());
    }
};

// ==========================================================================
// 4. 遊戲狀態機與互動邏輯
// ==========================================================================

const gameState = {
    mode: "challenge", 
    currentLevel: 1,   
    currentIndex: 0,   
    score: 0,          
    hearts: 3,         
    answered: false,
    levelQuestions: [],
    
    endlessTotal: 0,
    endlessCorrect: 0,
    endlessCurrentIndex: 0,
    endlessPool: [],

    init() {
        this.bindEvents();
        sakuraEffect.init();
    },

    bindEvents() {
        document.getElementById('btn-challenge').addEventListener('click', () => this.startMode('challenge'));
        document.getElementById('btn-endless').addEventListener('click', () => this.startMode('endless'));
        document.getElementById('btn-view-bank').addEventListener('click', () => this.showBankScreen());
        document.getElementById('btn-back-home').addEventListener('click', () => this.showHomeScreen());
        document.getElementById('btn-bank-back').addEventListener('click', () => this.showHomeScreen());
        document.getElementById('btn-next').addEventListener('click', () => this.handleNextQuestion());
        
        document.getElementById('btn-retry').addEventListener('click', () => this.restartCurrentChallenge());
        document.getElementById('btn-fail-home').addEventListener('click', () => this.showHomeScreen());
        document.getElementById('btn-success-retry').addEventListener('click', () => this.startMode('challenge'));
        document.getElementById('btn-success-home').addEventListener('click', () => this.showHomeScreen());
        
        document.getElementById('btn-generate-cert').addEventListener('click', () => this.generateCertificate());
        document.getElementById('btn-download-cert').addEventListener('click', () => this.downloadCertificate());

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                this.renderBankList(e.currentTarget.dataset.filter);
            });
        });

        let allExpanded = false;
        document.getElementById('btn-toggle-all-answers').addEventListener('click', (e) => {
            allExpanded = !allExpanded;
            e.currentTarget.textContent = allExpanded ? "折疊全部解析" : "展開全部解析";
            document.querySelectorAll('.bank-answer-panel').forEach(p => {
                if (allExpanded) p.classList.remove('hide');
                else p.classList.add('hide');
            });
            document.querySelectorAll('.bank-toggle-btn').forEach(b => {
                b.textContent = allExpanded ? "收合解析 ▲" : "展開解析 ▼";
            });
        });
    },

    switchScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    },

    showHomeScreen() {
        this.switchScreen('home-screen');
    },

    showBankScreen() {
        this.switchScreen('bank-screen');
        this.renderBankList('all');
    },

    startMode(mode) {
        synth.init();
        this.mode = mode;
        this.currentIndex = 0;
        this.answered = false;
        document.getElementById('reading-passage-container').classList.add('hide');

        if (mode === 'challenge') {
            this.currentLevel = 1;
            this.score = 0;
            this.hearts = 3;
            this.levelQuestions = QUESTIONS.filter(q => q.section === "vocabulary");
            
            document.getElementById('hearts').classList.remove('hide');
            document.getElementById('accuracy-counter').classList.add('hide');
            document.getElementById('score-counter').classList.remove('hide');
            
            this.updateHeartsUI();
            this.switchScreen('game-screen');
            this.loadQuestion();
        } else if (mode === 'endless') {
            this.endlessTotal = 0;
            this.endlessCorrect = 0;
            this.endlessPool = [...QUESTIONS].sort(() => Math.random() - 0.5);
            this.endlessCurrentIndex = 0;
            
            document.getElementById('hearts').classList.add('hide');
            document.getElementById('accuracy-counter').classList.remove('hide');
            document.getElementById('score-counter').classList.remove('hide');
            document.getElementById('level-indicator').textContent = "⚡ 無盡特訓模式";
            
            this.switchScreen('game-screen');
            this.loadEndlessQuestion();
        }
    },

    updateHeartsUI() {
        const heartsContainer = document.getElementById('hearts');
        heartsContainer.innerHTML = '';
        for (let i = 1; i <= 3; i++) {
            const h = document.createElement('span');
            h.className = 'heart';
            h.textContent = '❤️';
            if (i > this.hearts) h.classList.add('lost');
            heartsContainer.appendChild(h);
        }
    },

    loadQuestion() {
        this.answered = false;
        document.getElementById('explanation-panel').classList.add('hide');
        
        const q = this.levelQuestions[this.currentIndex];
        let levelName = "";
        let maxCount = this.levelQuestions.length;
        if (this.currentLevel === 1) levelName = `第一關：文字・語彙 (總50題)`;
        else if (this.currentLevel === 2) levelName = `第二關：文法 (總40題)`;
        else if (this.currentLevel === 3) levelName = `第三關：讀解 (總10題)`;
        
        document.getElementById('level-indicator').textContent = levelName;
        document.getElementById('score-counter').textContent = `題數: ${this.currentIndex + 1}/${maxCount}`;
        
        const progressPercent = (this.currentIndex / maxCount) * 100;
        document.getElementById('progress-bar').style.width = `${progressPercent}%`;

        const readingContainer = document.getElementById('reading-passage-container');
        if (q.section === "reading" && q.passage) {
            readingContainer.classList.remove('hide');
            document.getElementById('reading-text').innerHTML = q.passage.replace(/\n/g, '<br>');
        } else {
            readingContainer.classList.add('hide');
        }

        document.getElementById('question-type-badge').textContent = `問題 ${this.currentIndex + 1}`;
        document.getElementById('question-text').innerHTML = q.question;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="option-number">${idx + 1}</span><span class="option-text">${opt}</span>`;
            btn.addEventListener('click', () => this.handleAnswerSelection(idx));
            optionsContainer.appendChild(btn);
        });
        
        document.querySelector('.quiz-card-container').classList.remove('shake');
        document.getElementById('btn-next').textContent = "下一題 ➔";
    },

    loadEndlessQuestion() {
        this.answered = false;
        document.getElementById('explanation-panel').classList.add('hide');
        
        if (this.endlessCurrentIndex >= this.endlessPool.length) {
            this.endlessPool = [...QUESTIONS].sort(() => Math.random() - 0.5);
            this.endlessCurrentIndex = 0;
        }

        const q = this.endlessPool[this.endlessCurrentIndex];
        
        document.getElementById('score-counter').textContent = `答題: ${this.endlessTotal}`;
        const acc = this.endlessTotal > 0 ? Math.round((this.endlessCorrect / this.endlessTotal) * 100) : 100;
        document.getElementById('accuracy-counter').textContent = `正確率: ${acc}%`;
        document.getElementById('progress-bar').style.width = `${acc}%`;

        const readingContainer = document.getElementById('reading-passage-container');
        if (q.section === "reading" && q.passage) {
            readingContainer.classList.remove('hide');
            document.getElementById('reading-text').innerHTML = q.passage.replace(/\n/g, '<br>');
        } else {
            readingContainer.classList.add('hide');
        }

        let sectionChinese = q.section === "vocabulary" ? "語彙" : (q.section === "grammar" ? "文法" : "讀解");
        document.getElementById('question-type-badge').textContent = `分類: ${sectionChinese} (${q.id}/100)`;
        document.getElementById('question-text').innerHTML = q.question;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `<span class="option-number">${idx + 1}</span><span class="option-text">${opt}</span>`;
            btn.addEventListener('click', () => this.handleAnswerSelection(idx));
            optionsContainer.appendChild(btn);
        });

        document.querySelector('.quiz-card-container').classList.remove('shake');
        document.getElementById('btn-next').textContent = "下一題 ➔";
    },

    handleAnswerSelection(selectedIndex) {
        if (this.answered) return;
        this.answered = true;
        
        const q = this.mode === 'challenge' 
            ? this.levelQuestions[this.currentIndex] 
            : this.endlessPool[this.endlessCurrentIndex];
            
        const optionsContainer = document.getElementById('options-container');
        const buttons = optionsContainer.querySelectorAll('.option-btn');
        const correctIndex = q.correct;
        
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === correctIndex) btn.classList.add('correct');
            else if (idx === selectedIndex) btn.classList.add('incorrect');
        });

        const isCorrect = (selectedIndex === correctIndex);
        const explPanel = document.getElementById('explanation-panel');
        const fbIcon = document.getElementById('feedback-icon');
        const fbTitle = document.getElementById('feedback-title');
        explPanel.className = 'explanation-panel';

        if (isCorrect) {
            synth.playCorrect();
            fbIcon.textContent = '✔';
            fbTitle.textContent = '回答正確！';
            explPanel.classList.add('correct-feedback');
            if (this.mode === 'challenge') this.score++;
            else this.endlessCorrect++;
        } else {
            synth.playIncorrect();
            fbIcon.textContent = '✘';
            fbTitle.textContent = '回答錯誤！';
            explPanel.classList.add('incorrect-feedback');
            document.querySelector('.quiz-card-container').classList.add('shake');
            
            if (this.mode === 'challenge') {
                this.hearts--;
                this.updateHeartsUI();
            }
        }

        if (this.mode === 'endless') {
            this.endlessTotal++;
            const acc = Math.round((this.endlessCorrect / this.endlessTotal) * 100);
            document.getElementById('score-counter').textContent = `答題: ${this.endlessTotal}`;
            document.getElementById('accuracy-counter').textContent = `正確率: ${acc}%`;
            document.getElementById('progress-bar').style.width = `${acc}%`;
        }

        document.getElementById('correct-answer-text').textContent = q.correctText;
        document.getElementById('explanation-text').innerHTML = q.explanation;
        explPanel.classList.remove('hide');

        if (this.mode === 'challenge' && this.hearts <= 0) {
            document.getElementById('btn-next').textContent = "檢視結算 ➔";
        }
    },

    handleNextQuestion() {
        if (this.mode === 'challenge') {
            if (this.hearts <= 0) {
                this.showFailScreen();
                return;
            }
            this.currentIndex++;
            if (this.currentIndex < this.levelQuestions.length) {
                this.loadQuestion();
            } else {
                this.handleLevelTransition();
            }
        } else {
            this.endlessCurrentIndex++;
            this.loadEndlessQuestion();
        }
    },

    handleLevelTransition() {
        if (this.currentLevel === 1) {
            this.currentLevel = 2;
            this.currentIndex = 0;
            this.levelQuestions = QUESTIONS.filter(q => q.section === "grammar");
            alert("🌸 恭喜通過第一關【文字・語彙】！即將進入第二關【文法】！");
            this.loadQuestion();
        } else if (this.currentLevel === 2) {
            this.currentLevel = 3;
            this.currentIndex = 0;
            this.levelQuestions = QUESTIONS.filter(q => q.section === "reading");
            alert("🌸 恭喜通過第二關【文法】！即將進入最終關【讀解】，共10題，加油！");
            this.loadQuestion();
        } else {
            this.showSuccessScreen();
        }
    },

    restartCurrentChallenge() {
        this.startMode('challenge');
    },

    showFailScreen() {
        synth.playGameOver();
        let totalCount = 100;
        let progressIdx = this.currentIndex;
        if (this.currentLevel === 2) progressIdx += 50;
        else if (this.currentLevel === 3) progressIdx += 90;
        
        const completedRatio = Math.round((progressIdx / totalCount) * 100);
        document.getElementById('fail-score').textContent = this.score;
        document.getElementById('fail-progress').textContent = `${completedRatio}%`;
        this.switchScreen('fail-screen');
    },

    showSuccessScreen() {
        synth.playVictory();
        const accuracy = Math.round((this.score / 100) * 100);
        document.getElementById('success-score').textContent = `${this.score} / 100`;
        document.getElementById('success-accuracy').textContent = `${accuracy}%`;
        document.getElementById('cert-preview-container').classList.add('hide');
        document.getElementById('username-input').value = '';
        this.switchScreen('success-screen');
    },

    // ==========================================================================
    // 5. 渲染 100 題庫總覽 HTML 清單
    // ==========================================================================

    renderBankList(filterType = 'all') {
        const container = document.getElementById('bank-list-container');
        container.innerHTML = '';
        
        const filtered = filterType === 'all' 
            ? QUESTIONS 
            : QUESTIONS.filter(q => q.section === filterType);
            
        filtered.forEach((q) => {
            const item = document.createElement('div');
            item.className = 'bank-item';
            
            let typeText = q.section === 'vocabulary' ? '文字・語彙' : (q.section === 'grammar' ? '文法' : '讀解');
            
            let passageHtml = "";
            if (q.section === 'reading' && q.passage) {
                passageHtml = `<div class="bank-passage">${q.passage.replace(/\n/g, '<br>')}</div>`;
            }
            
            let optionsHtml = q.options.map((opt, oIdx) => {
                let isCorrectClass = (oIdx === q.correct) ? 'is-correct' : '';
                return `
                    <div class="bank-option ${isCorrectClass}">
                        <span class="bank-option-num">${oIdx + 1}</span>
                        <span>${opt}</span>
                    </div>
                `;
            }).join('');

            item.innerHTML = `
                <div class="bank-item-meta">
                    <span class="bank-item-id">Q-${q.id}</span>
                    <span class="bank-item-type">${typeText}</span>
                </div>
                ${passageHtml}
                <div class="bank-question">${q.question}</div>
                <div class="bank-options-list">
                    ${optionsHtml}
                </div>
                <div class="bank-action">
                    <button class="bank-toggle-btn" data-target="ans-${q.id}">展開解析 ▼</button>
                </div>
                <div class="bank-answer-panel hide" id="ans-${q.id}">
                    <div class="bank-answer-reveal">正確答案：<span>${q.correctText}</span></div>
                    <div class="bank-explanation">${q.explanation}</div>
                </div>
            `;
            
            const toggleBtn = item.querySelector('.bank-toggle-btn');
            const panel = item.querySelector('.bank-answer-panel');
            toggleBtn.addEventListener('click', () => {
                const isHidden = panel.classList.contains('hide');
                if (isHidden) {
                    panel.classList.remove('hide');
                    toggleBtn.textContent = "收合解析 ▲";
                } else {
                    panel.classList.add('hide');
                    toggleBtn.textContent = "展開解析 ▼";
                }
            });

            container.appendChild(item);
        });
    },

    // ==========================================================================
    // 6. 合格證書繪製 (Canvas)
    // ==========================================================================

    generateCertificate() {
        const username = document.getElementById('username-input').value.trim() || "日語精銳學習者";
        const canvas = document.getElementById('cert-canvas');
        const ctx = canvas.getContext('2d');
        const scoreVal = `${this.score} / 100`;
        const accuracyVal = `${Math.round((this.score / 100) * 100)}%`;

        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, '#0f0f1b');
        grad.addColorStop(0.5, '#191530');
        grad.addColorStop(1, '#2c122c');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 4;
        ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
        
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
        ctx.lineWidth = 1;
        ctx.strokeRect(26, 26, canvas.width - 52, canvas.height - 52);

        this.drawCertSakura(ctx, 50, 50, 15);
        this.drawCertSakura(ctx, canvas.width - 50, 50, 15);
        this.drawCertSakura(ctx, 50, canvas.height - 50, 15);
        this.drawCertSakura(ctx, canvas.width - 50, canvas.height - 50, 15);

        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#ffb7c5';
        ctx.font = 'bold 36px "Zen Maru Gothic", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('日本語能力試驗 N4 模擬合格證書', canvas.width / 2, 90);

        ctx.strokeStyle = 'rgba(255, 183, 197, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(150, 115);
        ctx.lineTo(canvas.width - 150, 115);
        ctx.stroke();

        ctx.shadowBlur = 0;

        ctx.fillStyle = '#f3f4f6';
        ctx.font = '24px "Noto Sans JP", sans-serif';
        ctx.fillText(`${username}  殿`, canvas.width / 2, 180);

        ctx.fillStyle = '#d1d5db';
        ctx.font = '20px "Noto Sans JP", sans-serif';
        ctx.fillText('在 N4 櫻花百題考前特訓中表現卓越，', canvas.width / 2, 240);
        ctx.fillText('以優異成績完成所有關卡，特頒此證，以茲證明。', canvas.width / 2, 280);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.strokeStyle = 'rgba(255, 183, 197, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(180, 320, 440, 100, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#f3f4f6';
        ctx.font = '16px "Noto Sans JP", sans-serif';
        ctx.fillText('挑戰模式成績', 290, 355);
        ctx.fillText('答題正確率', 510, 355);

        ctx.fillStyle = '#ffb7c5';
        ctx.font = 'bold 28px "Outfit", sans-serif';
        ctx.fillText(scoreVal, 290, 395);
        ctx.fillText(accuracyVal, 510, 395);

        const today = new Date();
        const dateStr = `發證日期：西元 ${today.getFullYear()} 年 ${today.getMonth() + 1} 月 ${today.getDate()} 日`;
        ctx.fillStyle = '#9ca3af';
        ctx.font = '15px "Noto Sans JP", sans-serif';
        ctx.fillText(dateStr, canvas.width / 2, 470);

        this.drawStamp(ctx, canvas.width - 150, canvas.height - 180);
        document.getElementById('cert-preview-container').classList.remove('hide');
    },

    drawCertSakura(ctx, x, y, size) {
        ctx.save();
        ctx.translate(x, y);
        ctx.fillStyle = 'rgba(255, 183, 197, 0.6)';
        for (let i = 0; i < 5; i++) {
            ctx.rotate((72 * Math.PI) / 180);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-size/2, -size/4, -size/4, -size, 0, -size);
            ctx.bezierCurveTo(size/4, -size, size/2, -size/4, 0, 0);
            ctx.fill();
        }
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(0, 0, size/5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    },

    drawStamp(ctx, x, y) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-0.1);
        ctx.strokeStyle = 'rgba(255, 65, 108, 0.85)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, 44, 0, Math.PI * 2);
        ctx.stroke();

        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, 0, 39, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = 'rgba(255, 65, 108, 0.85)';
        ctx.font = 'bold 24px "Noto Sans JP", "KaiTi", serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('合', 0, -12);
        ctx.fillText('格', 0, 14);
        ctx.restore();
    },

    downloadCertificate() {
        const canvas = document.getElementById('cert-canvas');
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'N4_Sakura_Certificate.png';
        link.href = dataUrl;
        link.click();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    gameState.init();
});
