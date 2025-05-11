"use client";

import { postBBS } from "@/app/actions/postBBSActions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  userName: z.string().min(3, {
    message: "ユーザー名は3文字以上で入力してください。。",
  }),
  title: z.string().min(3, {
    message: "タイトルは3文字以上で入力してください。",
  }),
  content: z
    .string()
    .min(10, {
      message: "本文は10文字以上で入力してください。",
    })
    .max(150, {
      message: "本文は150文字以下で入力してください。",
    }),
});

const CreateBBSPage = () => {
  // const router = useRouter();

  const form = useForm({
    defaultValues: {
      userName: "",
      title: "",
      content: "",
    },
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(value: z.infer<typeof formSchema>) {
    const { userName, title, content } = value;

    postBBS({ userName, title, content });
    // try {
    //   await fetch("http://localhost:3000/api/post", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       userName,
    //       title,
    //       content,
    //     }),
    //   });

    //   router.push("/");
    //   router.refresh();
    // } catch (error) {
    //   console.error("Error creating post:", error);
    // }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 w-1/2 px-7 mt-5"
      >
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ユーザー名</FormLabel>
              <FormControl>
                <Input placeholder="ユーザー名" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>タイトル</FormLabel>
              <FormControl>
                <Input placeholder="タイトル" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>本文</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="投稿内容"
                  {...field}
                  className="resize-none h-48"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreateBBSPage;
