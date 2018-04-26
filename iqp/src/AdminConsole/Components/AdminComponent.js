import React from 'react';
import { AdminLoginContainer } from '../Containers/AdminLoginContainer';
import { UserInfoContainer } from '../Containers/UserInfoContainer';
import { Tabs, Tab } from 'react-bootstrap';


export class AdminComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            authenticated: false
        }

        this.updateAuthenticationState = this.updateAuthenticationState.bind(this);
    }

    updateAuthenticationState(value) {
        this.setState({
            authenticated: value
        })
    }

    render(){
      let adminBody = (
            <Tabs defaultActiveKey={0} id="tab-body">
                <Tab key={0} eventKey={0} title={"User List"}>
                    <UserInfoContainer/>
                </Tab>
            </Tabs>
        )
       return this.state.authenticated === false ? <AdminLoginContainer handleAuth={this.updateAuthenticationState} authState={this.state.authenticated}/> :
                                                    adminBody    
   }
}