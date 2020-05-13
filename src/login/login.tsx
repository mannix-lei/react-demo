import React from "react";
import style from './login.module.scss';
import { Button } from 'antd';

export const Login = () => {
    return (
        <div className={style.body}>
            <div className={style.btnGroup}>
                <Button>sign in</Button>
                <Button>sign up</Button>
            </div>
            {/* <div className={style.login}>
                
            </div> */}
        </div>
    )
}