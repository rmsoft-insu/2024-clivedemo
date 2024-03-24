"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  userId: z.string(),
  password: z.string(),
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  const onClick = async (data: z.infer<typeof FormSchema>) => {
    console.log(":data", data);
    const response = await axios.post(
      `${process.env.ADMIN}/auth/login`,
      {
        id: data.userId,
        pwd: data.password,
      },
      { withCredentials: true }
    );
    console.log("axios res", response);

    response.data.code === 200 &&
      localStorage.setItem("access", response.headers.authorization);
  };

  const onList = async () => {
    const response = await axios.get(`${process.env.ADMIN}/menu/list`);
    console.log("list", response);
  };

  const delStorage = () => {
    localStorage.clear();
  };

  return (
    <>
      <div>Login Form</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onClick)}>
          <div className="flex flex-col w-[400px] gap-2 mb-4">
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>아이디</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>비밀번호</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">로그인</Button>
          </div>
        </form>
      </Form>
      <div className="flex flex-col gap-2 w-[120px]">
        <Button onClick={onList}>불러오기</Button>
        <Button onClick={delStorage}>Rest Storage</Button>
      </div>
    </>
  );
};
