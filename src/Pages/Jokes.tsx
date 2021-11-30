import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Layout, Divider, Typography, Space, Card,
} from 'antd';
import { useGetTenJokesQuery } from '../services/jokeService';

const Jokes = () => {
  const { category } = useParams<'category'>();
  const { Content } = Layout;
  const { Text } = Typography;
  if (!category) {
    return <></>;
  }
  const { isLoading, data } = useGetTenJokesQuery(category);
  return (
    <Content style={{ padding: '0 50px' }}>
      {
        isLoading ? <div>Loading...</div>
          : (
            <div>
              {
                data?.jokes.map((item) => (
                  item.type === 'single'
                    ? (
                      <>
                        <Divider orientation="left">{item.category}</Divider>
                        <Link to={`${item.type}/${item.id}`}>
                          <Card style={{ fontStyle: 'italic' }}>
                            {`- ${item.joke}`}
                          </Card>
                        </Link>
                        <Divider plain orientation="right">{item.id}</Divider>
                      </>
                    )
                    : (
                      <>
                        <Divider orientation="left">{item.category}</Divider>
                        <Space direction="vertical">
                          <Link to={`${item.type}/${item.id}`}>
                            <Card style={{ fontStyle: 'italic' }}>
                              <Text>
                                {`- ${item.setup}`}
                              </Text>
                              <br />
                              <Text>
                                {`- ${item.delivery}`}
                              </Text>
                            </Card>
                          </Link>
                        </Space>
                        <Divider plain orientation="right">{item.id}</Divider>
                      </>
                    )
                ))
}
            </div>
          )
      }
    </Content>
  );
};

export default Jokes;
