import React from 'react';
import Auth from '../Auth';
import {withRouter} from 'react-router-dom';
/* 
const Logout = (props) => {
    Auth.logout(()=>{
        props.history.push("/")
    })
}*/
const Logout = (props) => {
    return(
    <a  className="nav-link logout" onClick={
        () => {
            Auth.logout(() => {
                props.history.push("/")
            })}}>Logout</a>
    )
}

export default withRouter(Logout)