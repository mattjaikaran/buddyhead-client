import { NextPage } from 'next';
import { MainLayout } from '@/layouts/layout';
import { HeadingH1 } from '@/components/typography';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';

const profileFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'Title must be at least 2 characters.',
    })
    .max(30, {
      message: 'Title must not be longer than 30 characters.',
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  message: z.string().max(1024).min(10),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const Contact: NextPage = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      console.log('data', data);
      // const response = await axios.post(url, data)
      // console.log('response', response)
      // return response
    } catch (error) {
      console.log('error in onSubmit', error);
    }
  };
  return (
    <MainLayout>
      {/* TODO: add head */}
      <div className="container">
        <HeadingH1 className="mt-8 mb-8">Contact</HeadingH1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="test@example.com"
                  {...form.register('email')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a Title"
                  {...form.register('title')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      className="resize-none"
                      {...form.register('message')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled>
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </MainLayout>
  );
};

export default Contact;
