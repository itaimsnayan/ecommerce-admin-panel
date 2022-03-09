import { TagOutlined } from "@ant-design/icons";

class NavigationService {
  constructor() {
    this.showNavbar = ["/dashboard", "/inventory/list", "/inventory/add"]
    this.showSidebar = ["/dashboard", "/inventory/list", "/inventory/add"]
    this.navItems = [
      {
        id: 1,
        title: "Dashboard",
        key: "dash",
        icon: <TagOutlined />,
        link: "/dashboard"
      },
      {
        id: 2,
        title: "Inventory",
        key: "inv",
        icon: <TagOutlined />,
        subItems: [
          {
            id: 1,
            title: "Inventories",
            link: "/inventory/list"
          },
          {
            id: 2,
            title: "Add Inventory",
            link: "/inventory/add"
          },
        ],
      },
      {
        id: 3,
        title: "Category",
        key: "cat",
        icon: <TagOutlined />,
        subItems: [
          {
            id: 1,
            title: "Categories",
            link: "/category/list"
          },
          {
            id: 2,
            title: "Add Category",
            link: "/category/add"
          },
        ],
      },
      {
        id: 4,
        title: "Sub Category",
        key: "subcat",
        icon: <TagOutlined />,
        subItems: [
          {
            id: 1,
            title: "Sub Categories",
            link: "/subcategory/list"
          },
          {
            id: 2,
            title: "Add Sub Category",
            link: "/subcategory/add"
          },
        ],
      },
      {
        id: 5,
        title: "Product",
        key: "pro",
        icon: <TagOutlined />,
        subItems: [
          {
            id: 1,
            title: "Products",
            link: "/product/list"
          },
          {
            id: 2,
            title: "Add Product",
            link: "/product/add"
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
