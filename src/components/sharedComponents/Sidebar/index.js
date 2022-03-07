import { Menu } from "antd";
import React, { useState, useEffect } from "react";
import "./style.css";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { navigationService } from "../../../services/navigationService";

function Sidebar() {
  const { SubMenu } = Menu;

  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [navItems, setNavItems] = useState([]);
  const [rootSubmenuKeys, setRootSubmenuKeys] = useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }; 

  useEffect(() => {
    if (navItems.length === 0) setNavItems(navigationService.getNavItems());
  }, []);



  return (
    <div className="main-sidebar-wrapper">
      {navItems?.map((item, index) => {
        const { key, title, subItems, link } = item;
        return (
          <Menu
            key={index}
            mode="inline"
            theme="light"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            className="sidebar-menu"
          >



            {
              subItems ? <SubMenu key={key} icon={<MailOutlined />} title={title}>
                {
                  subItems?.map(sub_item => {
                    const { id, title, link } = sub_item;
                    return (
                      <Menu.Item key={id}><Link to={link}>{title}</Link></Menu.Item>
                    )
                  })
                }
              </SubMenu> : (
                <Menu.Item key={key} icon={<MailOutlined />}>
                  <Link to={link}>{title}</Link>
                </Menu.Item>
              )
            }
          </Menu>
        );
      })}
    </div>
  );
}

export default Sidebar;
