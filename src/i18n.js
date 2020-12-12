import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)



const locale = localStorage.getItem('lang') || 'EN'; // default locale

export default new VueI18n({
    locale,
    messages: {
        'EN': {
            nav: {
                home: 'Home',
                staking: 'Staking',
                features: 'Features',
            },
            slogan: {
                title: 'Easy to run the node',
                subtitle: 'Easynodes is a staking service provider that focuses on PoS. We will Provide you with convenient, safe and stable enterprise-level services.',
                btn: 'Start Staking',
            },
            staking: {
                runningTitle: 'Running',
                runningBtn: 'Join Now',
                comingTitle: 'Coming soon',
                comingBtn: 'Waiting For',
                eth2: {
                    title: 'ETH2.0',
                    content: 'We support the operation of escrow, the private key of the asset is controlled by yourself, which is more secure.',
                    price0: '$20',
                    price1: 'monthly',
                },
                prv: {
                    title: 'PRV',
                    content: 'Conveniently run PRV virtual nodes and obtain stable income. The estimated annualized income is 20%.',
                    price0: '$9',
                    price1: 'monthly',
                },
                xym: {
                    title: 'XYM',
                    content: 'Symbol will be launched in January next year. We support running Symbol super nodes in a managed way.',
                    price0: '$50',
                    price1: 'monthly',
                },
                zen: {
                    title: 'ZEN',
                    content: 'Just deposit 42 or 500 ZEN to run the master node immediately.',
                    price0: 'Undetermined',
                    price1: 'monthly',
                }
            },
            features: {
                title: 'Features of Easynodes',
                safety: {
                    title: 'Safety',
                    content: 'Decentralization, your virtual assets are in your own wallet.',
                },
                convenient: {
                    title: 'Convenient',
                    content: 'Simplified operation, fewer steps. Start now.',
                },
                profession: {
                    title: 'Profession',
                    content: 'More than ten years of developer\'s experience to support you.',
                },
                preferential: {
                    title: 'Preferential',
                    content: 'Preferential prices, super cost-effective, bring maximum benefits.',
                },
            },
            footer: {
                support: 'Support',
                staking: 'Staking',
                privacy: 'Privacy',
                privacyLink: 'https://docs.easynodes.net/privacy-policy',
            },
        },
        'ZH': {
            nav: {
                home: '首页',
                staking: 'Staking',
                features: '特点',
            },
            slogan: {
                title: '轻松运行节点',
                subtitle: 'Easynodes是专注于PoS的Staking服务商，我们将为您提供便捷、安全、稳定的企业级服务。',
                btn: '开始 Staking',
            },
            staking: {
                runningTitle: '正在进行',
                runningBtn: '立即加入',
                comingTitle: '敬请期待',
                comingBtn: '筹划中',
                eth2: {
                    title: 'ETH2.0',
                    content: '我们支持代托管的方式运行，资产私钥自己掌握，更安全',
                    price0: '$20',
                    price1: '月',
                },
                prv: {
                    title: 'PRV',
                    content: '便捷运行PRV虚拟节点，稳定获得收益，预计年化收益20%',
                    price0: '$9',
                    price1: '月',
                },
                xym: {
                    title: 'XYM',
                    content: 'Symbol即将在明年1月启动，我们支持托管的方式运行Symbol超级节点',
                    price0: '$50',
                    price1: '月',
                },
                zen: {
                    title: 'ZEN',
                    content: '只需抵押42或者500ZEN即刻运行主节点',
                    price0: '待定',
                    price1: '月',
                }
            },
            features: {
                title: 'Easynodes特点',
                safety: {
                    title: '安全',
                    content: '去中心化托管，虚拟资产在自己的钱包里，自己掌握私钥，您的资产更安全。',
                },
                convenient: {
                    title: '便捷',
                    content: '忘掉繁琐的节点维护吧，用更少的操作，享受更简化的方案，查看更直观的收益。',
                },
                profession: {
                    title: '专业',
                    content: '具有十年以上公链开发经验和VPS维护经验的团队，为您提供全方位专业的支持。',
                },
                preferential: {
                    title: 'Preferential',
                    content: '规模化管理带来成本的降低，我们提供优惠的价格，超高的性价比，最大化您的收益。',
                },
            },
            footer: {
                support: '服务支持',
                staking: 'Staking',
                privacy: '隐私协议',
                privacyLink: 'https://docs-zh.easynodes.net/privacy-policy',
            },
        }
    }
})