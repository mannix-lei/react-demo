import React, { useState } from 'react';
import style from './login.module.scss';
import { Button, Form, Input, Checkbox } from 'antd';

export const Login = () => {
    const [loginForm] = Form.useForm();
    const layout = {
        labelCol: { span: 0 },
        wrapperCol: { span: 0 },
    };
    const [loginVisible, setloginVisible] = useState(false);

    const handleOk = () => {
        setloginVisible(true);
    };
    // const handleCancel = () => {
    //     setloginVisible(false);
    // };

    const login = () => {

    };
    return (
        <div className={style.body}>
            <div className={ loginVisible ? style.glass : ''}></div>
            {!loginVisible ? (
                <div className={style.btnGroup}>
                    <Button onClick={handleOk}>Sign In</Button>
                    <Button>Sign Up</Button>
                </div>
            ) : (
                <div className={style.login}>
                    <Form
                        form={loginForm}
                        {...layout}
                        name="basic"
                        colon={false}
                        hideRequiredMark={true}
                        initialValues={{ remember: true }}
                        onFinish={login}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="Please input your username" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password placeholder="Please input your password" />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            )}
        </div>
    );
};
