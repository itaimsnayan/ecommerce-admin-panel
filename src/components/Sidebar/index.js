import React, { useState } from "react";
import "./style.css";
import { Menu, Switch, Divider } from 'antd';
import {
    MailOutlined,
    UnorderedListOutlined,
    TagOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;


function Sidebar() {

    const [items, setItems] = useState([
        {
            title: "Inventory",
            icon: <TagOutlined />,
            child: [
                {
                    title: "Add Inventory",
                },
                {
                    title: "Inventory List",
                }
            ]
        },
        {
            title: "Category",
            icon: <TagOutlined />,
            child: [
                {
                    title: "Add Category",
                },
                {
                    title: "Category List",
                }
            ]
        },
        {
            title: "Sub Category",
            icon: <TagOutlined />,
            child: [
                {
                    title: "Add Sub Category",
                },
                {
                    title: "Sub Category List",
                }
            ]
        },
        {
            title: "Product",
            icon: <TagOutlined />,
            child: [
                {
                    title: "Add Product",
                },
                {
                    title: "Product List",
                }
            ]
        },
    ])

    return (
        <div className="sidebar-container">
            <React.StrictMode>
                <Menu
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={"inline"}
                    theme={"light"}
                >

                    {
                        items?.map((item, index) => {
                            return (
                                <SubMenu key={index} icon={item.icon} title={item.title}>
                                    {
                                        item.child?.map((subItem, i) => (
                                            <Menu.Item key={`${index}-${i}`}>{subItem.title}</Menu.Item>
                                        ))
                                    }
                                </SubMenu>
                            )
                        })
                    }
                </Menu>
            </React.StrictMode>
        </div>
    )

}

export default Sidebar;