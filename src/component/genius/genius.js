import React from 'react';
import {WingBlank,Card,WhiteSpace} from 'antd-mobile';
import { connect } from 'react-redux';
import { getUserList } from '../../redux/chatuser.redux';
import UserCard from '../usercard/usercard';

@connect(
    state=>state.chatuser,
    {getUserList}
)
class Boss extends React.Component{
    componentDidMount(){
        this.props.getUserList('boss');
    }
    render(){
        const Header = Card.Header;
        const Body = Card.Body;
        return (
          <UserCard userlist={this.props.userlist}></UserCard>
        )
    }
}
export default Boss;