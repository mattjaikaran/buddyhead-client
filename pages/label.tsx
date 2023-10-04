import { NextPage } from 'next';
import { MainLayout } from '@/layouts/layout';
import { HeadingH1 } from '@/components/typography';
import { links } from '@/lib/links';
import { Button } from '@/components/ui/button';

const Label: NextPage = () => {
  return (
    <MainLayout>
      {/* TODO: add head */}
      {/* TODO: refactor Links into Dynamic Zones */}
      <div className="container mt-8">
        <HeadingH1 className="mt-8 mb-8">Label</HeadingH1>
      </div>
    </MainLayout>
  );
};

export default Label;
