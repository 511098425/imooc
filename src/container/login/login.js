import React from 'react';
import Logo from '../../component/logo/logo';
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';

@connect(
    state=>state.user,
    {login}
)
class Login extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           user:'',
           pwd:''
       }
       this.register = this.register.bind(this);
       this.handlerLogin = this.handlerLogin.bind(this);
    }
    handlerChange(key,val){
        this.setState({
            [key]:val
        })
    }
    register(){
        this.props.history.push('/register');
    }
    handlerLogin(){
        this.props.login(this.state);
    }
    render(){
        return (
            <div>
                {this.props.redirectTo ?<Redirect to={this.props.redirectTo}/>:null};
                <Logo></Logo>
               <WingBlank>
                   <List>
                       <InputItem onChange={v=>this.handlerChange('user',v)}>账号</InputItem>
                       <WhiteSpace/>
                       <InputItem type="password" onChange={v=>this.handlerChange('pwd',v)}>密码</InputItem>
                   </List>
                   <WhiteSpace/>
                   <Button type='primary' onClick={this.handlerLogin}>登录</Button>
                   <WhiteSpace/>
                   <Button onClick={this.register} type='primary'>注册</Button>
               </WingBlank>
            </div>
        )
    }
}

export default Login;