import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { fetchPageBySlug } from '@/lib/api';

interface SectionProps {
  // Define the structure for each section type
  // Adjust this based on your Strapi setup
}

interface PageProps {
  page: {
    title: string;
    sections: SectionProps[];
  };
}

const Page: NextPage<PageProps> = ({ page }) => {
  const { title, sections } = page;

  return (
    <div>
      <h1>{title}</h1>
      {sections.map((section, index) => (
        <RenderSection key={index} {...section} />
      ))}
    </div>
  );
};

const RenderSection: React.FC<SectionProps> = (props) => {
  // Implement logic to render different section types based on props
  // You can create separate components for each section type
  return <div>{JSON.stringify(props)}</div>;
};

const serverURL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all page slugs from Strapi
  const response = await axios.get(`${serverURL}/pages`);
  const pages = response.data;

  const paths = pages.map((page: any) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: false };
};

// @ts-ignore
export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  // Fetch page data by slug from Strapi
  // @ts-ignore
  const page = await fetchPageBySlug(params.slug as string);

  return {
    props: {
      page,
    },
  };
};

export default Page;
