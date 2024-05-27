import { createI18n } from 'next-i18next'

const i18n = createI18n();

i18n.loadLocaleData({
    en: {
        translation: {
            cardData: [
                {
                    title: 'Date A Live Community Bot',
                    content: 'Discord Bot used by the DAL Community Server, with working levelling, economy and moderation systems in place. The levelling and economy system utilize the usage of MongoDB to store details.',
                    languages: ['Mongoose', 'JavaScript', 'Node', 'SQLite'],
                    features: ['Economy', 'Leveling', 'Moderation', 'Reaction Roles', 'Fun'],
                    github: 'https://github.com/necrydark/DALBot',
                    id: 0
                },
                {
                    title: 'Makima Bot',
                    content: "Discord Bot used by the Chainsaw Man Community Server, with different APIs implemented to utilize the theme of the server with bot permissions enabled and slash commands.",
                    languages: ['DiscordJS', 'JavaScript', 'REST', 'waifu.pics', 'kitsu.io'],
                    features: ['Moderation', 'Anime / Manga Info', 'Anime / Manga Pictures', 'Ticket System', 'Customisation', 'Avatar Checker'],
                    github: 'https://github.com/necrydark/makimabot',
                    id: 1
                },
                {
                    title: 'Portfolio V1',
                    content: 'First version of my portfolio created using NextJS and Tailwind CSS as well as Formspree just for the contact form.',
                    languages: ['NextJS', 'Tailwind CSS', 'Formspree'],
                    github: 'https://github.com/necrydark/PortfolioV1',
                    id: 2
                },
                {
                    title: 'Apollo',
                    content: 'A concept for a mental health smart watch app that allows users to track their state of being and provide them with a way to track their progress. As well as having coping mechanisms to help people.',
                    languages: ['HTML', 'CSS', 'jQuery', 'Materialize', 'JavaScript'],
                    links: 'https://apollo-tau-mocha.vercel.app/',
                    github: 'https://github.com/necrydark/Apollo',
                    id: 3
                },
                {
                    title: 'Idle Farm',
                    content: 'Idle Farm is an idle game created for a school project using the Unity Engine and C#. The game is a farming simulator where you can plant crops, raise animals and sell them for money.',
                    languages: ['Unity', 'C#', 'Blender'],
                    github: 'https://github.com/necrydark/IdleFarm_Clicker',
                    id: 4
                },
                {
                    title: 'Little Tokyo',
                    content: 'A restaurant website created using ASP.NET Core, C# and SQL. It allows users to check out the menu, order and pay',
                    languages: ['ASP.NET Core', 'C#', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
                    github: 'https://github.com/necrydark/littleTokyo',
                    links: 'https://2124363.win.studentwebserver.co.uk/CO5227',
                    id: 5
                },
                {
                    title: 'Gatsby Test',
                    content: 'This is a test on which JS framework I want to start using and working with to create websites.',
                    languages: ['Gatsby', 'Tailwind CSS'],
                    github: 'https://github.com/necrydark/gatsby-portfolio-v2',
                    id: 6
                },
                {
                    title: 'Power',
                    content: 'Power is another Discord Bot that is just a starter bot for people who want to learn how to code Discord Bots. It has a few commands that are useful for beginners and a few commands that are just for fun.',
                    languages: ['DiscordJS', 'JavaScript', 'REST'],
                    github: 'https://github.com/necrydark/power',
                    id: 7
                },
                {
                    title: 'GCDatabase',
                    content: 'GCDatabase is a project I am currently working on which is a database for the game 7 Deadly Sins Grand Cross. It is a work in progress and is currently being developed using NextJS and Tailwind CSS.',
                    languages: ['NextJS', 'Tailwind CSS', 'Formspree', 'MongoDB'],
                    features: ['Searching', 'Character Builds', 'Team Building', 'Updates', 'News'],
                    github: 'https://github.com/necrydark/gcdatabase',
                    id: 8
                },
            ],
        },
    },
    ja: {
        translation: {
            cardData: [
                {
                    title: 'デート・ア・ライブ コミュニティボット',
                    content:
                        'DALコミュニティサーバーで使用されるDiscordボットで、動作するレベリング、経済、モデレーションシステムが備わっています。レベリングと経済システムは、詳細を保存するためにMongoDBを使用しています。',
                    languages: ['Mongoose', 'JavaScript', 'Node', 'SQLite'],
                    features: ['経済', 'レベリング', 'モデレーション', 'リアクションロール', '楽しい'],
                    github: 'https://github.com/necrydark/DALBot',
                    id: 0,
                },
                {
                    title: 'マキマボット',
                    content:
                        'チェンソーマンコミュニティサーバーで使用されるDiscordボットで、さまざまなAPIを実装してテーマに活用し、ボットの権限とスラッシュコマンドを有効にしています。',
                    languages: ['DiscordJS', 'JavaScript', 'REST', 'waifu.pics', 'kitsu.io'],
                    features: [
                        'モデレーション',
                        'アニメ/マンガ情報',
                        'アニメ/マンガの写真',
                        'チケットシステム',
                        'カスタマイズ',
                        'アバターチェッカー',
                    ],
                    github: 'https://github.com/necrydark/makimabot',
                    id: 1,
                },
                {
                    title: 'ポートフォリオV1',
                    content: 'NextJSとTailwind CSS、およびフォームスプリーを使用して作成された最初のバージョンのポートフォリオ。',
                    languages: ['NextJS', 'Tailwind CSS', 'Formspree'],
                    github: 'https://github.com/necrydark/PortfolioV1',
                    id: 2,
                },
                {
                    title: 'アポロ',
                    content: 'ユーザーが自分の存在状態を追跡し、進捗状況を追跡する方法を提供する精神的な健康スマートウォッチアプリのコンセプト。人々を助けるための対処方法も備えています。',
                    languages: ['HTML', 'CSS', 'jQuery', 'Materialize', 'JavaScript'],
                    links: 'https://apollo-tau-mocha.vercel.app/',
                    github: 'https://github.com/necrydark/Apollo',
                    id: 3,
                },
                {
                    title: 'アイドルファーム',
                    content: 'アイドルファームは、UnityエンジンとC＃を使用して作成されたアイドルゲームで、農作物を植え、動物を育て、お金を稼ぐことができる農業シミュレーターです。',
                    languages: ['Unity', 'C#', 'Blender'],
                    github: 'https://github.com/necrydark/IdleFarm_Clicker',
                    id: 4,
                },
                {
                    title: 'リトル東京',
                    content: 'ASP.NET Core、C＃、SQLを使用して作成されたレストランのWebサイト。ユーザーはメニューを確認し、注文して支払うことができます',
                    languages: ['ASP.NET Core', 'C#', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
                    github: 'https://github.com/necrydark/littleTokyo',
                    links: 'https://2124363.win.studentwebserver.co.uk/CO5227',
                    id: 5,
                },
                {
                    title: 'ギャツビーテスト',
                    content: 'これは、ウェブサイトを作成するために使用しているJSフレームワークをテストするものです。',
                    languages: ['Gatsby', 'Tailwind CSS'],
                    github: 'https://github.com/necrydark/gatsby-portfolio-v2',
                    id: 6,
                },
                {
                    title: 'パワー',
                    content: 'パワーは、Discordボットのコーディング方法を学びたい初心者向けのスターターボットです。初心者に役立ついくつかのコマンドと、楽しいいくつかのコマンドがあります。',
                    languages: ['DiscordJS', 'JavaScript', 'REST'],
                    github: 'https://github.com/necrydark/power',
                    id: 7
                },
                {
                    title: 'GCデータベース',
                    content: 'GCDatabase は私が現在取り組んでいるプロジェクトで、ゲーム「七つの大罪 グランドクロス」のデータベースです。 これは進行中の作業であり、現在 NextJS と Tailwind CSS を使用して開発されています。',
                    languages: ['NextJS', 'Tailwind CSS', 'Formspree', 'MongoDB'],
                    features: ['検索', 'キャラクタービルド', 'チームビルディング', 'アップデート', 'ニュース'],
                    github: 'https://github.com/necrydark/gcdatabase',
                    id: 8
                }
            ],
        },
    },
});

export default i18n;