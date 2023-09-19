import { SiteHeader } from '@/components/site-header';

export function MainLayout({ children, ...props }: any) {
  return (
    <div {...props}>
      <SiteHeader />
      <div>{children}</div>
    </div>
  );
}
