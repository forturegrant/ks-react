import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

export default class Console extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: 0,
            defaultActiveKey: '1'
        }
        //this.changeBgColor = this.changeBgColor.bind(this);
    }
    changeActiveKey(){
        this.setState({
            defaultActiveKey: ''
        })
    }

    render(){
        return(
            <div>
                {/*<Tabs activeKey={this.state.defaultActiveKey}>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
            <button onClick={this.changeActiveKey.bind(this)}>change</button>*/}
            </div>
        )
    }
}