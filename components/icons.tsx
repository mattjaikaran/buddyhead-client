/* eslint-disable @next/next/no-img-element */
import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  Instagram,
  // @ts-ignore
  type Icon as LucideIcon,
} from 'lucide-react';

const url = 'https://buddyhead-app-xvgeb.ondigitalocean.app';
const logo = `${url}/uploads/logo_white_926f3e45c6.PNG`;
const logoPink = `${url}/uploads/logo_pink_6604f4c54b.PNG`;

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  instagram: Instagram,
  logo: (props: any) => <img src={logo} width={100} alt="logo" {...props} />,
  logoPink: (props: any) => (
    <img src={logoPink} width={100} alt="logo pink" {...props} />
  ),
};
