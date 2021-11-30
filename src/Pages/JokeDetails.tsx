import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Collapse, Descriptions, Divider,
} from 'antd';
import DescriptionsItem from 'antd/es/descriptions/Item';
import { useGetTheJokeQuery } from '../services/jokeService';
import './jokeDetails.scss';

type ParamType = {
  id:string,
  type:string
}

const JokeDetails = () => {
  const idAndTypeOfJoke = useParams();
  const { Panel } = Collapse;
  if (idAndTypeOfJoke === undefined) {
    return <></>;
  }
  const { data } = useGetTheJokeQuery(idAndTypeOfJoke as ParamType);

  if (!data) {
    return <></>;
  }
  return (
    <div>
      {
        data.joke ? <Divider plain orientation="left">{data.joke}</Divider>
          : (
            <div>
              <Divider plain orientation="left">
                {data.setup}
              </Divider>
              <Divider plain orientation="left">
                {data.delivery}
              </Divider>
            </div>

          )
}
      <Collapse accordion>
        {Array.from(Object.entries(data.flags)).map((item, index) => (
          <Panel
            header={`${item[0].charAt(0).toUpperCase()
        + item[0].slice(1)}`}
            key={`${item[0]}`}
          >
            <p>{`${item[0]} - ${item[1]}`}</p>
          </Panel>
        ))}
      </Collapse>
      <Descriptions
        className="jokeInfoBox"
        bordered
        size="small"
        layout="horizontal"
        style={{ maxWidth: 800, paddingLeft: 30 }}
      >
        <DescriptionsItem span={4} className="jokeInfo" label="Category">{data.category}</DescriptionsItem>
        <DescriptionsItem span={4} className="jokeInfo" label="Type">{data.type}</DescriptionsItem>
        <DescriptionsItem span={4} className="jokeInfo" label="Safe">{`${data.safe}`}</DescriptionsItem>
        <DescriptionsItem span={4} className="jokeInfo" label="Id">{data.id}</DescriptionsItem>
        <DescriptionsItem span={4} className="jokeInfo" label="Language">{data.lang}</DescriptionsItem>
      </Descriptions>
    </div>
  );
};

export default JokeDetails;
