import React, { useState } from 'react';
import style from './login.module.scss';
import { Button, Form, Input, Checkbox } from 'antd';

export const Login = () => {
    const [loginForm] = Form.useForm();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
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
            {loginVisible ? (
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
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
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
