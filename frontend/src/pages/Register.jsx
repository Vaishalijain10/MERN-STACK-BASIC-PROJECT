import React from "react";
import { message, Form, Input, Button} from 'antd';
import { UserRegistrationSave } from "../api/RegistrationApi";


export default function Register() {
  const register_submit = async (values) => {
    try {
      console.log("Form values:", values);
      const response = await UserRegistrationSave(values);
      console.log(response);

      if (response.success) {
        console.log("data saved", response);
        message.success("User created successfully");
        navigate("/Login");
      } else {
        message.error("Register failed");
      }
    } catch (error) {
      console.log(error);
      message.error(error.message);
    }
  };

  return (


    <div className="flex justify-center items-center h-screen">
      <div
        className="container rounded-md mx-auto px-4 sm w-1/2 bg-gray-400"
        style={{ height: "400px" }}
      >
        <div className="flex justify-center items-center h-full">
          <Form className="text-center " name="basic" onFinish={register_submit}>
            <Form.Item
              name="name"
              label="name"
              rules={[{ required: true, message: "Please enter your  name." }]}
            >
              <Input type="text" placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="email"
              label="email"
              rules={[{ required: true, message: "Please enter your email." }]}
            >
              <Input type="text" placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="password"
              rules={[{ required: true, message: "Please enter password." }]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button className="bg-blue-400" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
