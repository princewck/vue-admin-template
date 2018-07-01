export default [
  {
    name: 'home',
    text: '首页',
    icon: 'home'
  },
  {
    name: 'settings',
    text: '系统管理',
    icon: 'gear-a',
    submenu: [
      {
        name: 'banner',
        text: 'banner管理',
      },
      {
        name: 'notice',
        text: '公告管理'
      }
    ]
  },
  {
    name: 'permit',
    text: '权限管理',
    icon: 'flash-off',
    submenu: [
      {
        name: 'admin',
        text: '人员列表'
      }
    ]
  },
  {
    name: 'user',
    text: '用户管理',
    icon: 'person-stalker',
    submenu: [
      {
        name: 'userManage',
        text: '用户列表'
      }
    ]
  },
  {
    name: 'gameManage',
    text: '游戏管理',
    icon: 'ios-game-controller-a',
    submenu: [
      {
        name: 'category',
        text: '游戏分类'
      },
      {
        name: 'sport',
        text: '体育赛事',
        submenu: [
          {
            name: 'team',
            text: '球队管理'
          },
          {
            name: 'game',
            text: '赛事管理'
          },
          {
            name: 'match',
            text: '比赛管理',
          },
          {
            name: 'sportHandicap',
            text: '赛事盘口'
          }
        ],
      },
      {
        name: 'guess',
        text: '趣味竞猜',
        submenu: [
          {
            name: 'guessList',
            text: '竞猜列表'
          }
        ]
      }
    ]
  },
  {
    name: 'tokenManage',
    text: '币种管理',
    icon: 'social-bitcoin',
    submenu: [
      {
        name: 'tokenList',
        text: '币种列表'
      }
    ]
  },
  {
    name: 'open',
    text: '开奖管理',
    icon: 'speakerphone',
    submenu: [
      {
        name: 'openSport',
        text: '体育赛事'
      },
      {
        name: 'openGuess',
        text: '趣味竞猜'
      }
    ]
  },
  {
    name: 'finance',
    text: '财务管理',
    icon: 'social-usd',
    submenu: [
      {
        name: 'withdraw',
        text: '提现管理'
      },
      {
        name: 'recharge',
        text: '充值管理'
      },
      {
        name: 'finance_guess',
        text: '竞猜列表'
      }
    ]
  }
];