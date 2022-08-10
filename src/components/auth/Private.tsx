import React from 'react'
import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
IsLoggedIn : boolean,
Component : React.ComponentType<ProfileProps>
}

export const Private = ({IsLoggedIn,Component} : PrivateProps) => {

    if(IsLoggedIn){
        return (
            <Component name="rushi"/>
          )
    }else{
        return (
            <Login/>
          )
    }
 
}