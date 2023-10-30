import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from './icons';
import { MainNav } from './main-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

export function SiteHeader() {
  const { theme } = useTheme();
  const router = useRouter();
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-0 justify-between">
        <span onClick={() => router.push('/')}>
          {theme === 'light' ? <Icons.logoPink /> : <Icons.logo />}
        </span>
        <MainNav items={siteConfig.mainNav} />
        <span className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => router.push('/blog')}>
                Zine
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="https://buddyheadstore.myshopify.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Store
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/label')}>
                Label
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/about')}>
                About
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/contact')}>
                Contact
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/links')}>
                Links
              </DropdownMenuItem>
              {/* <DropdownMenuItem>Instagram</DropdownMenuItem>
            <DropdownMenuItem>Twitter</DropdownMenuItem> */}
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: 'icon',
                    variant: 'ghost',
                  })}
                >
                  <Icons.instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: 'icon',
                    variant: 'ghost',
                  })}
                >
                  <Icons.twitter className="h-5 w-5 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <ThemeToggle />
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
        <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
