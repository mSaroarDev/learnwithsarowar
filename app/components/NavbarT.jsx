import Logo from "../../public/logo2.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full bg-white shadow-sm fixed z-50 top-0">
        <div className="navbar">
          <div className="flex-1">
            <Link href="/">
              <Image width={250} height={100} src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/html">HTML</Link>
              </li>
              <li>
                <Link href="/css">CSS</Link>
              </li>
              <li>
                <Link href="/bootstrap">Bootstrap</Link>
              </li>
              <li>
                <Link href="/tailwind">Tailwind CSS</Link>
              </li>
              <li>
                <Link href="/javascript">JavaScript</Link>
              </li>
              <li>
                <Link href="/react">React</Link>
              </li>
              <li>
                <Link href="/nextjs">Next JS</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
