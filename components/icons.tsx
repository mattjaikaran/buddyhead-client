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
// import logoPink from '@/public/images/logo-pink.png';
// import logoWhite from '@/public/images/logo-white.png';
// const url = 'https://buddyhead-app-xvgeb.ondigitalocean.app';
// const logoWhite = `https://printful.s3-accelerate.amazonaws.com/files/3e5/3e501553c5e31d2518ab7f96d6d8e82a?response-content-disposition=inline%3B%20filename%3D%22CFC46F21-8CCD-41BE-BA07-FDE6497C9213.png%22&response-content-type=image%2Fpng&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJH7JLGRY6WQHFAZQ%2F20231004%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20231004T032101Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=c1ff888198180f4c1c9885343c5c826313c4dbf500e072039e11c061e551ff74`;
// const logoPink = `https://live.staticflickr.com/65535/53230455709_e7c7cf46ec_k.jpg`;

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  instagram: Instagram,
  logo: (props: any) => (
    <img src="/images/logo-white.png" width={100} alt="logo white" {...props} />
  ),
  logoPink: (props: any) => (
    <img src="/images/logo-pink.png" width={100} alt="logo pink" {...props} />
  ),
};
