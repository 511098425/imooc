import React from 'react';
import Logo from '../../component/logo/logo';
import { List, InputItem,Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register} from "../../redux/user.redux";

@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatPwd: '',
            type: 'genius'
        }
        this.handlerRegister = this.handlerRegister.bind(this)
    }
    handlerRegister(){
        this.props.register(this.state)
    }
    handlerChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                {this.props.redirectTo ?<Redirect to={this.props.redirectTo}/>:null};
                <Logo></Logo>
                <List>
                    {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
                    <InputItem onChange={v=>this.handlerChange('user',v)}>账号</InputItem>
                    <WhiteSpace/>
                    <InputItem type="password" onChange={v=>this.handlerChange('pwd',v)}>密码</InputItem>
                    <WhiteSpace/>
                    <InputItem type="password" onChange={v=>this.handlerChange('repeatPwd',v)}>确认密码</InputItem>
                    <WhiteSpace/>
                    <RadioItem checked={this.state.type==='genius'} onChange={()=>this.handlerChange('type','genius')}>
                        求职者
                    </RadioItem>
                    <RadioItem checked={this.state.type==='boss'} onChange={()=>this.handlerChange('type','boss')}>
                        Boss
                    </RadioItem>
                    <WhiteSpace/>
                    <WingBlank>
                        <Button onClick={this.handlerRegister} type='primary'>注册</Button>
                    </WingBlank>
                </List>

            </div>
        )
    }
}

export default Register;