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
import { headers } from "next/headers";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  userId: z.string(),
  password: z.string(),
});

export const SignupMain = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("submit", data);
    axios.post(
      "http://localhost:4000/api/api/signup",
      {
        email: data.userId,
        password: data.password,
      },
      { withCredentials: true }
    );
  };

  const onLogin = async () => {
    /*   const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify({
        email: "insu",
        password: "1234",
      }),
    });

    const json = response.json();
    console.log("json", json); */
    axios
      .post("http://localhost:4000/api/login", {
        email: "insu",
        password: "1234",
      })
      .then((res) => {
        return console.log("res", res);
      });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-[300px] flex flex-col gap-4">
            <FormField
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
          </div>
          <Button type="submit" className="mt-4">
            회원가입
          </Button>
        </form>
      </Form>
      <Button onClick={onLogin}>로그인</Button>
    </>
  );
};
