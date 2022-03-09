import { Menu } from "antd";
import React, { useState, useEffect } from "react";
import "./style.css";
import { TagOutlined, MinusOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { navigationService } from "../../../services/navigationService";
import { useDispatch, useSelector } from "react-redux";
import { updateLocationAction } from "../../../redux/actions/locationAction";

function Sidebar() {
  const { SubMenu } = Menu;
  const dispatch = useDispatch();
  const currentlocation = useLocation();
  const location = useSelector(state => state.location);

  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [navItems, setNavItems] = useState([]);
  const [rootSubmenuKeys] = useState([]);
  
  useEffect(() => {
    const { pathname } = currentlocation;
    pathname && dispatch(updateLocationAction(pathname));
  }, [dispatch, currentlocation])

  useEffect(() => {
    if (navItems.length === 0) setNavItems(navigationService.getNavItems());
  }, []);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div className={`main-sidebar-wrapper ${!(navigationService.showSidebar).includes(location) && 'd-none'}`}>
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
              subItems ? <SubMenu key={key} icon={<TagOutlined />} title={title}>
                {
                  subItems?.map(sub_item => {
                    const { id, title, link } = sub_item;
                    return (
                      <Menu.Item key={id} icon={<MinusOutlined />}><Link to={link}>{title}</Link></Menu.Item>
                    )
                  })
                }
              </SubMenu> : (
                <Menu.Item key={key} icon={<TagOutlined />}>
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
