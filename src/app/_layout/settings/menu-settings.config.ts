// Default menu settings configurations

export interface MenuItem {
  title: string;
  icon: string;
  page: string;
  isExternalLink?: boolean;
  issupportExternalLink?: boolean;
  badge: { type: string, value: string };
  submenu: {
    items: Partial<MenuItem>[];
  };
  section: string;
}

export interface MenuConfig {
  horizontal_menu: {
    items: Partial<MenuItem>[]
  };
  vertical_menu: {
    items: Partial<MenuItem>[]
  };
}

export const MenuSettingsConfig: MenuConfig = {
  horizontal_menu: {
    items: [
      {
        title: 'Market',
        icon: 'la-file',
        page: 'common',
        badge: { type: 'badge-danger', value: '1.0' }
      },
      {
        title: 'Get Social',
        icon: 'la-television',
        page: '',
        submenu: {
          items: [
            {
              title: 'Horizontal',
              page: 'null'
            },
            {
              title: 'Vertical',
              page: 'null'
            },
          ]
        }
      },
      {
        title: 'Quick',
        icon: 'la-support',
        page: 'common',
        isExternalLink: true
      },
      {
        title: 'Documentaion',
        icon: 'la-text-height',
        page: 'common',
        isExternalLink: true,
      }
    ]
  },
  vertical_menu: {
    items: [
      {
        title: 'Market',
        icon: 'assets/custom/images/1.png',
        page: '/userone/market',
        // badge: { type: 'badge-danger', value: '1.0' }
      },
      {
        title: 'Get Social',
        icon: 'assets/custom/images/2.png',
        page: '/userone/getsocial',
  
      },
      
      {
        title: 'Quick Text',
        icon: 'assets/custom/images/3.png',
        page: '/userone/quicktext',
        isExternalLink: true
      },
      {
        title: 'Replenishment',
        icon: 'assets/custom/images/4.png',
        page: '/userone/replenishment',
        isExternalLink: true,
      },
      {
        title: 'Cross-sell',
        icon: 'assets/custom/images/5.png',
        page: '/userone/crosssell',
        isExternalLink: true,
      },
      {
        title: 'My Dashboard',
        icon: 'assets/custom/images/6.png',
        page: '/userone/mydashboard',
        isExternalLink: true,
      }
    ]
  }

};






