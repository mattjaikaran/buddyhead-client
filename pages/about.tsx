/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import { MainLayout } from '@/layouts/layout';
import { HeadingH1 } from '@/components/typography';

const url = 'https://buddyhead-app-xvgeb.ondigitalocean.app';
const skull = `${url}/uploads/skull_828339ea73.PNG`;

const About: NextPage = () => {
  return (
    <MainLayout>
      {/* TODO: add head */}
      {/* TODO: refactor About into Dynamic Zones */}
      <div className="container">
        <HeadingH1 className="mt-8 mb-8">About</HeadingH1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          corrupti cum odit nam eius consequuntur, accusantium tenetur error
          dolor facilis culpa nisi eligendi, soluta recusandae necessitatibus
          aperiam illum id quis.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          omnis nam voluptatem maxime aperiam! Nobis repudiandae pariatur iusto
          magnam asperiores commodi, accusantium quaerat, inventore,
          consequuntur voluptates tempore. Cum, possimus? Voluptas.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
          omnis nam voluptatem maxime aperiam! Nobis repudiandae pariatur iusto
          magnam asperiores commodi, accusantium quaerat, inventore,
          consequuntur voluptates tempore. Cum, possimus? Voluptas.
        </p>
        <div className="flex justify-center mt-16">
          <img src={skull} width={150} alt="skull logo" />
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
