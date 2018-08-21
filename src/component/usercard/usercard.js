import React from 'react';
import {WingBlank,Card,WhiteSpace} from 'antd-mobile';
import PropTypes from 'prop-types';

class UserCard extends React.Component{
    static propTypes = {
        userlist: PropTypes.array.isRequired
    }
    render(){
        const Header = Card.Header;
        const Body = Card.Body;
        return(
            <WingBlank>
                <WhiteSpace/>
                {this.props.userlist.map(v=>(
                    v.avatar?(<Card key={v._id}>
                        <Header
                            title={v.user}
                            thumb={require(`../avatar-selector/${v.avatar}.png`)}
                            extra={<span>{v.title}</span>}
                        />
                        <Body>
                        {v.type === 'boss'?<div>公司：{v.company}</div>:null}
                        <div>技术要求：</div>
                        {v.desc.split('\n').map(d=>(
                            <div key={d}>{d}</div>
                        ))}
                        {v.type === 'boss'?<div>薪资：{v.money}</div>:null}
                        </Body>
                    </Card>):null

                ))}
            </WingBlank>
        )
    }
}

export default UserCard;