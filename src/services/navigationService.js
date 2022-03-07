import { TagOutlined } from "@ant-design/icons";

class NavigationService {
  constructor() {
    this.navItems = [
      {
        id: 1,
        title: "Inventory",
        key: "inv",
        icon: <TagOutlined />,
        subItems: [
          {
            id: 1,
            title: "Inventories",
          },
          {
            id: 2,
            title: "Add Inventory",
          },
        ],
      },
      {
        id: 2,
        title: "Category",
        key: "cat",
        icon: <TagOutlined />,
        subItems: [
          {
            id: 1,
            title: "Categories",
          },
          {
            id: 2,
            title: "Add Inventory",
          },
        ],
      },
      {
        id: 3,
        title: "Sub Category",
        key: "subcat",
        icon: <TagOutlined />,
        subItems: [
          {
            id: 1,
            title: "Sub Categories",
          },
          {
            id: 2,
            title: "Add Sub Category",
          },
        ],
      },
      {
        id: 4,
        title: "Product",
        key: "pro",
        icon: <TagOutlined />,
        subItems: [
          {
            id: 1,
            title: "Products",
          },
          {
            id: 2,
            title: "Add Product",
          },
        ],
      },
    ];
  }
  getNavItems() {
    return this.navItems;
  }
}

export const navigationService = new NavigationService();
