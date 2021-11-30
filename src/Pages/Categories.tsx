import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useGetResCategoriesQuery } from '../services/jokeService';

const Categories = () => {
  const { isLoading, data } = useGetResCategoriesQuery(undefined);
  const { Header } = Layout;
  return (
    <div>
      {
        isLoading ? <div>Loading...</div>
          : (
            <Layout className="layout">
              <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                  {data?.categories.map((item) => (
                    <Menu.Item key={item}><NavLink to={`Categories/${item}`}>{item}</NavLink></Menu.Item>
                  ))}
                </Menu>
              </Header>
              <Outlet />
            </Layout>
          )
      }
    </div>
  );
};

export default Categories;
