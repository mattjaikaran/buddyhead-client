/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import { MainLayout } from '@/layouts/layout';
import { HeadingH1 } from '@/components/typography';
import Markdown from 'react-markdown';
import { useEffect } from 'react';
import axios from 'axios';
import useAxios from '@/axios';

const URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const skull = `https://printful.s3-accelerate.amazonaws.com/files/a85/a859285cba0932fe2ffbe736b59bf75f?response-content-disposition=inline%3B%20filename%3D%22skull2.png%22&response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJH7JLGRY6WQHFAZQ%2F20231003%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20231003T012422Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=96918280b2f68dce362cfce09b32f844a18f8e03647bf2f2182f1935d00b7bdf`;
const About: NextPage = () => {
  const api = useAxios();
  // useEffect(() => {
  //   const renderAbout = async () => {
  //     try {
  //       const response = await api.get(`/pages?slug=about`);
  //       console.log('response', response);
  //       return response;
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   };
  //   renderAbout();
  // }, []);
  return (
    <MainLayout>
      {/* TODO: add head */}
      {/* TODO: refactor About into Dynamic Zones */}
      <div className="container">
        <HeadingH1 className="mt-8 mb-8">About</HeadingH1>
        <Markdown></Markdown>
        <p>
          {`Yep, Buddyhead is back. This webzine was established in 1998 so 
          it's kind of poetic for it to reappear on its 25th anniversary. 
          The focus of the site is and has also been to shed light on things that normally wouldn't get the attention they deserve. That includes music, politics, films, art or whatever else that excites us. We are currently accepting applications for designers, writers and content creators who share this vision and would like to contribute to this project.`}
        </p>
        <p>
          If you think you got what it takes and are into not getting paid then
          shoot Travis an email at tmk@buddyhead.com with some examples of your
          work.
        </p>
        <p>
          And yes Buddyhead is still releasing records, new vinyl from The
          Cauterizers and Rathbone coming soon. Please sign up for the email
          list, follow on all socials and email or DM for the invite link to the
          Buddyhead Discord server.
        </p>
        <div className="flex justify-center mt-16">
          <img src={skull} width={150} alt="skull logo" />
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
