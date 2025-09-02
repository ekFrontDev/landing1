import Image from 'next/image';
import Link from 'next/link';
import ArtName from '../../../components/ArtName/ArtName';
import A from '../../../shared/ui/link/A';

export default function Header() {
  return (
    <header>
      <div className="navBar">
        <span className="about">
          <a href="#aboutMe">ОБО МНЕ</a>
        </span>
        <Image
          className="scribble"
          src="/scribble.svg"
          width={60}
          height={60}
          alt=""
        />
        <span className="name">ТАТЬЯНА ТАБАЧОК</span>
        <A href={'/menu'} text={'МЕНЮ'} styleVisible="invisibleMenu" />
        <Link className="iconMenu" href={'/'}>
          <Image className="" src="/menu.svg" width={50} height={50} alt="" />
        </Link>
      </div>
      <ArtName />
    </header>
  );
}
