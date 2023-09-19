import * as React from 'react';
import Link from 'next/link';

import { NavItem } from '@/types/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { useTheme } from 'next-themes';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  // const { theme } = useTheme();
  return (
    <div className="hidden md:flex md:pl-4 gap-6 md:gap-10">
      {/* <Link href="/" className="flex items-center space-x-2">
        {theme === 'light' ? <Icons.logoPink /> : <Icons.logo />}
        <span className="sr-only">{siteConfig.name}</span>
      </Link> */}
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  );
}
