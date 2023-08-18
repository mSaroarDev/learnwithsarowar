import Logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full fixed z-50 top-0 bg-[#0A1F33]">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>হোম</a>
                </li>
                <li>
                  <a>আমার সম্পর্কে</a>
                </li>
                <li>
                  <a>পোর্টফোলিও</a>
                </li>
                <li tabIndex={0}>
                  <details>
                    <summary>সার্ভিসেস</summary>
                    <ul className="p-2">
                      <li>
                        <a>ওয়েব ডিজাইন</a>
                      </li>
                      <li>
                        <a>ফ্রন্টএন্ড ডেভেলপমেন্ট</a>
                      </li>
                      <li>
                        <a>ওয়ার্ডপ্রেস</a>
                      </li>
                      <li>
                        <a>ই-কমার্স</a>
                      </li>
                      <li>
                        <a>পোর্টফোলিও ডিজাইন</a>
                      </li>
                      <li>
                        <a>ল্যান্ডিং পেজ ডিজাইন</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>যোগাযোগ</a>
                </li>
              </ul>
            </div>
            <Link href="/">
              <Image src={Logo} alt="Logo" height={100} width={250} />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-fontBn text-base font-semibold text-white hover:text-white ">
              <li>
                <Link href="/" className="hover:underline hover:text-white">
                  হোম
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline hover:text-white">
                  আমার সম্পর্কে
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline hover:text-white">
                  পোর্টফোলিও
                </Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary className="hover:underline hover:text-white">
                    সার্ভিসেস
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/" className="hover:underline text-[#0A1F33]">
                        ওয়েব ডিজাইন
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:underline text-[#0A1F33]">
                        ফ্রন্টএন্ড ডেভেলপমেন্ট
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:underline text-[#0A1F33]">
                        ওয়ার্ডপ্রেস
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:underline text-[#0A1F33]">
                        ই-কমার্স
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:underline text-[#0A1F33]">
                        পোর্টফোলিও ডিজাইন
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="hover:underline text-[#0A1F33]">
                        ল্যান্ডিং পেজ ডিজাইন
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/" className="hover:underline hover:text-white">
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn font-fontBn">টিউটোরিয়ালস</a>
          </div>
        </div>
      </div>
    </>
  );
}
