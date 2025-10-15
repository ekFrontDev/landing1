'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ArtName from '../../../components/ArtName/ArtName';

export default function Header({ img, hrefBtn }) {
  const path = usePathname();
  console.log(path);
  const isScribble = path === '/' ? '/assets/icons/menu.svg' : '/assets/icons/cross.svg';
  const isOpen = path === '/' ? '/menu' : '/';
  return (
    <header>
      <div className="navBar">
        <span className="about">
          <a href="#aboutMe">ОБО МНЕ</a>
        </span>
        <Image className="scribble" src="/assets/icons/scribble.svg" width={25} height={25} alt="" />
        <span className="name">ТАТЬЯНА ТАБАЧОК</span>
        {/* <A href={'/menu'} text={'МЕНЮ'} styleVisible="invisibleMenu" /> */}
        <Link className="iconMenu" href={isOpen}>
          <Image className="" src={isScribble} width={25} height={25} alt="" />
        </Link>
      </div>
      <ArtName />
    </header>
  );
}
