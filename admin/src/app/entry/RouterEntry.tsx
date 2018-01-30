/**
 * Created by wenbo.kuang on 2018/1/25.
 */
import * as React from 'react';
import {Layout} from "antd";
import CustomSlider from "../components/Slider";
import Routes from '../ChildRouter';

const {Header, Content, Footer} = Layout;

interface RouterEntryProps {

}

export default class RouterEntry extends React.Component<RouterEntryProps, {}> {
  render() {
    return (
      <Layout style={{flexDirection: 'row',height: '100%'}}>
        <CustomSlider></CustomSlider>
        <Layout style={{flexDirection: 'column'}}>
          <Header style={{ background: '#fff', padding: 0 }}>这是头部</Header>
          <Content>
            <Routes />
          </Content>
          <Footer style={{textAlign: 'center'}}>这是尾部</Footer>
        </Layout>
      </Layout>
    )
  }
}