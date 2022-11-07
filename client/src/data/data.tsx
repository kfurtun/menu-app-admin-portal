import Dashboard from 'components/Organisms/Dashboard';

export interface Data {
  [key: string]: {
    [key: string]: {
      [key: string]: {
        logo: string;
        text: string;
        items: { [key: string]: Item };
      };
    };
  };
}

export interface Item {
  url: string;
  text: string;
  isLink: boolean;
  component?: JSX.Element;
}

export const data = {
  sideBar: {
    dashboard: {
      logo: 'dashboard',
      text: 'Dashboard',
      items: {
        brand: {
          url: 'brand-name',
          text: 'Brand name',
          isLink: true,
          component: <Dashboard />,
        },
      },
    },
    menus: {
      logo: 'menus',
      text: 'Menus',
      items: {
        menuCatalogue: {
          url: 'menu-catalogue',
          text: 'Menu Catalogue',
          isLink: true,
        },
        menuList: {
          url: 'menu-list',
          text: 'Menu List',
          isLink: true,
        },
        menuGrid: {
          url: 'menu-grid',
          text: 'Menu Grid',
          isLink: true,
        },
        addProduct: {
          url: 'add-product',
          text: 'Add Product',
          isLink: true,
        },
        productDetail: {
          url: 'product-detail',
          text: 'Product Detail',
          isLink: true,
        },
      },
    },
    orders: {
      logo: 'orders',
      text: 'Orders',
      items: {
        main: {
          url: 'orders',
          text: 'Orders',
          isLink: true,
        },
      },
    },
  },
};
