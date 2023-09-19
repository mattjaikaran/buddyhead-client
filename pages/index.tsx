/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';

import { MainLayout } from '@/layouts/layout';
import { Button } from '@/components/ui/button';
import { HeadingH1, HeadingH3, Paragraph } from '@/components/typography';
import Newsletter from '@/components/newsletter';

const url = 'https://buddyhead-app-xvgeb.ondigitalocean.app'
const skull = `${url}/uploads/skull_f0f5fb11c0.PNG`;
const sunset = `${url}/uploads/sunset_ae67ddae90.JPG`;
const palms = `${url}/uploads/palms_06b808ac51.JPG`;
('');
const Home: NextPage = () => {
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
          }}
          className="px-24 pt-8 pb-24 sm:p-16 md:p-32 text-center heroImg"
        >
          <HeadingH1 className="text-white pt-8 sm:pt-0">buddyhead</HeadingH1>
        </div>

        <div className="p-16 sm:px-32 md:px-48 md:py-32 text-center">
          <HeadingH3>Title</HeadingH3>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </Paragraph>
          <Button variant="outline">Button</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <div className="pink-bg p-24 text-center">
            <HeadingH3>what up</HeadingH3>
            <Paragraph>here is a one liner</Paragraph>
            <Button variant="outline">Button</Button>
          </div>
          <div className="p-24 bg-zinc-700 text-foreground text-center">
            <HeadingH3>haha oh hell yeah</HeadingH3>
            <Paragraph>here is a one liner</Paragraph>
            <Button variant="outline">Button</Button>
          </div>
        </div>

        <div className="p-16 md:px-64 md:py-32 bg-foreground text-center">
          <HeadingH3 className="text-background">Title</HeadingH3>
          <Paragraph className="text-background">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </Paragraph>
          <Button variant="outline">Button</Button>
        </div>

        <div className="pink-bg p-24 text-center">
          <HeadingH3>what up</HeadingH3>
          <Button className="bg-foreground text-background">Click Here</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          <div className="bg-background text-foreground p-24 text-center">
            <HeadingH3>what up</HeadingH3>
            <Paragraph>here is a one liner</Paragraph>
            <Button variant="outline">Button</Button>
          </div>
          <div className="p-24 bg-zinc-700 text-foreground text-center">
            <HeadingH3>haha oh hell yeah</HeadingH3>
            <Paragraph>here is a one liner</Paragraph>
            <Button variant="outline">Button</Button>
          </div>
        </div>

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
