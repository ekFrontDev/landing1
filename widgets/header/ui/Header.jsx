import Image from 'next/image';
import Link from 'next/link';
import ArtName from '../../../components/ArtName/ArtName';

export default function Header({ img, hrefBtn }) {
  return (
    <header>
      <div className="navBar">
        <span className="about">
          <a href="#aboutMe">ОБО МНЕ</a>
        </span>
        <Image
          className="scribble"
          src="/scribble.svg"
          width={45}
          height={45}
          alt=""
        />
        <span className="name">ТАТЬЯНА ТАБАЧОК</span>
        {/* <A href={'/menu'} text={'МЕНЮ'} styleVisible="invisibleMenu" /> */}
        <Link className="iconMenu" href={hrefBtn}>
          <Image className="" src={img} width={45} height={45} alt="" />
        </Link>
      </div>
      <ArtName />
    </header>
  );
}
