/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { MainLayout } from '@/layouts/layout';
import { Button } from '@/components/ui/button';
import { HeadingH1, HeadingH3, Paragraph } from '@/components/typography';
import Newsletter from '@/components/newsletter';
import useAxios from '@/axios';

const skull = `https://buddyheadstore.myshopify.com/cdn/shop/files/skull2.png?v=1675024101&width=1070`;
const sunset = `https://live.staticflickr.com/65535/53230456924_9baf94b27b_k.jpg`;
const palms = `https://live.staticflickr.com/65535/53230382953_a2b95215d4_k.jpg`;

const Home: NextPage = () => {
  const router = useRouter();
  const api = useAxios();
  // useEffect(() => {
  //   const renderData = async () => {
  //     try {
  //       const response = await api.get(`${url}/pages`);
  //       console.log('response', response);
  //       return response;
  //     } catch (error: any) {
  //       console.log('error', error);
  //     }
  //   };
  //   renderData();
  // }, []);
  return (
    <MainLayout>
      {/* TODO: add head */}
      {/* TODO: refactor Homepage into Dynamic Zones */}
      <div className="container-fluid xl:container">
        <div
          style={{
            backgroundImage: `url(${sunset})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            // backgroundColor: 'rgba(255,255,255,0.5)',
            backgroundBlendMode: 'darken',
          }}
          className="px-24 pt-8 pb-24 sm:p-16 md:p-32 text-center heroImg"
        >
          <HeadingH1 className="text-white pt-8 sm:pt-0">buddyhead</HeadingH1>
          <Paragraph className="text-white">HAHA OH HELL YEAH</Paragraph>
        </div>

        {/* <div className="p-16 sm:px-32 md:px-48 md:py-32 text-center">
          <HeadingH3>Title</HeadingH3>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </Paragraph>
          <Button variant="outline">Button</Button>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <img src="/images/dj-10-21.jpeg" alt="" />
          <img src="/images/icarus-line-must-die.jpeg" alt="" />
          {/* <div className="pink-bg p-24 text-center">
            <HeadingH3 className="text-white">whats happening</HeadingH3>
            <Paragraph className="text-white">keep up to date</Paragraph>
            <Button variant="outline" onClick={() => router.push('/blog')}>
              View Zine
            </Button>
          </div> */}
          {/* <div className="p-24 bg-background text-foreground text-center">
            <HeadingH3>view articles</HeadingH3>
            <Paragraph>check out our latest reviews</Paragraph>
            <Button variant="outline" onClick={() => router.push('/reviews')}>
              View Articles
            </Button>
          </div> */}
        </div>

        {/* <div className="p-16 md:px-64 md:py-32 bg-background text-foreground text-center">
          <HeadingH3>Title</HeadingH3>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </Paragraph>
          <Button variant="outline">Button</Button>
        </div> */}

        <img src={palms} alt="img" />

        <Newsletter />
        <div className="flex justify-center my-4">
          <img src={skull} width={150} alt="skull logo" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;

// use
{
  /* 
<HeadingH1>what up</HeadingH1>
<HeadingH2>what up</HeadingH2>
<HeadingH3>what up</HeadingH3>
<HeadingH4>what up</HeadingH4>
<HeadingH5>what up</HeadingH5>
<Paragraph>what up</Paragraph>
<TypographyLarge>TypographyLarge</TypographyLarge>
<TypographySmall>small</TypographySmall>
<TypographyMuted>small</TypographyMuted>
<Button variant="outline">Button</Button> 
*/
}
