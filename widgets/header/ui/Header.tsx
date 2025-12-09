'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import NavBarLapTop from '@/shared/ui/navBarLapTop/NavBarLapTop';

export default function Header() {
  const path = usePathname();
  const isScribble =
    path === '/' ? '/assets/icons/menu.svg' : '/assets/icons/cross.svg';
  const isOpen = path === '/' ? '/menu' : '/';
  return (
    <header>
      <div className="navBar">
        <span className="name">( ТАТЬЯНА ТАБАЧОК )</span>
        <ThemeSwitcher />
        <Link className="iconMenu" href={isOpen}>
          <Image className="" src={isScribble} width={25} height={25} alt="" />
        </Link>
        <NavBarLapTop />
      </div>
    </header>
  );
}
