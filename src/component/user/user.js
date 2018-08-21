import React from 'react';
import { Result,List, WhiteSpace,Modal } from 'antd-mobile';
import { connect } from 'react-redux';
import browserCookie from 'browser-cookies';

@connect(
    state=>state.user
)

<Button
onClick={() =>
alert('Delete', 'Are you sure???', [
    { text: 'Cancel', onPress: () => console.log('cancel') },
    { text: 'Ok', onPress: () => console.log('ok') },
])
}
>
confirm
</Button>
class User extends React.Component{
   constructor(props){
       super(props)
       this.logout = this.logout.bind(this);
   }
   logout(){

    }
    render(){
        const props = this.props;
        if (!props){

        }
        const Item = List.Item;
        const Brief = Item.Brief;
        return props.user?(
            <div>
                <Result
                    img={<img src={require(`../../component/avatar-selector/${props.avatar}.png`)} style={{width:50}} alt=''/>}
                    title={props.user}
                    message={props.type === 'boss'?props.company:null}
                />
                <List renderHeader={()=>'简介'}>
                    <Item multipleLine>
                        {props.title}
                        {props.desc.split('\n').map(v=><Brief>{v}</Brief>)}
                        {props.money?<Brief>薪资：{props.money}</Brief>:null}
                        </Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Item onClick={this.logout}>退出登录</Item>
                </List>
            </div>
        ):null
    }
}
export default User;