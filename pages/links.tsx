import { NextPage } from 'next';
import { MainLayout } from '@/layouts/layout';
import { HeadingH1 } from '@/components/typography';
import { links } from '@/lib/links';
import { Button } from '@/components/ui/button';

const Links: NextPage = () => {
  return (
    <MainLayout>
      {/* TODO: add head */}
      {/* TODO: refactor Links into Dynamic Zones */}
      <div className="container mt-8">
        <HeadingH1 className="mt-8 mb-8">Links</HeadingH1>
        <div className="">
          {links.map((link) => {
            return (
              <div className="mt-4" key={link.id}>
                <Button variant="outline">
                  <a href={link.url} target="_blank">
                    {link.title}
                  </a>
                </Button>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Links;
