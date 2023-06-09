import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import "./index.css";

import { Input, Typography, Card, Avatar } from 'antd';
const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;

const client = new W3CWebSocket('ws://127.0.0.1:8000');

export default class App extends Component {
    
    state = {
        userName: '',
        isLoggedin: false,
        messages: []
    }

    onButtonClicked = (value) => {
        client.send(JSON.stringify({
            type: "message",
            msg: value,
            user: this.state.userName
        }))
        this.setState({searchVal: ''})
    }
    componentDidMount() {
        client.onopen = () => {
            console.log('websocket client connected!')
        };

        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            console.log('got reply!', dataFromServer);

            if(dataFromServer.type === 'message') {
                this.setState((state) => 
                ({
                    messages: [...state.messages,
                    {
                        msg: dataFromServer.msg,
                        user: dataFromServer.user
                    }]
                }))
            }
        };
    };

    render() {
        return(
            <div className='main'>
                {
                    this.state.isLoggedin ? 
                    <div>
                        {/* <button onClick={() => this.onButtonClicked("Hello!")}>
                            Send message
                        </button>
                        {
                            this.state.messages.map(msg => 
                                <p>message: {msg.msg}, user: {msg.user}</p>
                            )
                        } */}

                        <div className='title'>
                            <Text type="secondry" style={{fontSize: '36px', color:"white"}}>Chat App </Text>
                        </div>

                        <div style={{display:'flex', flexDirection: 'column', paddingBottom: 50 }}>
                            {
                                this.state.messages.map(message => 
                                    <Card 
                                        key={message.msg}
                                        style={{width: 300, margin:'16px 4px 0 4px', alignSelf: this.state.userName === message.user ? 'flex-end' : 'flex-start'}}
                                    >
                                        <Meta
                                            avatar = {
                                                <Avatar style={{color: '#f56a00', backgroundColor: "white"}}/>
                                            }
                                            title={message.user}
                                            description={message.msg}
                                        />
                                    </Card>
                                )
                            }
                        </div>
                        <div className='bottom'>
                            <Search
                                placeholder='Type your message'
                                enterButton='Send'
                                size='large'
                                value={this.state.searchVal}
                                onChange = {
                                    (e) => this.setState({searchVal: e.target.value})
                                } 
                                onSearch = {
                                    value => this.onButtonClicked(value)
                                }
                            />               
                        </div>
                    </div>
                    
                    :
                    <div style={{padding: '200px 50px', width: '30%', margin: '0% 30%'}}>
                        <Search
                            placeholder='Enter name'
                            enterButton='Login'
                            size='large'
                            onSearch={
                                value=>this.setState({
                                    isLoggedin:true,
                                    userName: value
                            })} />
                    </div>
                }
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));