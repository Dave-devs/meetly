import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from 'next/image'
// import { VideoContext } from '../context/VideoContext';

export default function Navbar() {
  // const { logo } = useContext(VideoContext);

  return (
    <nav className="flex justify-between items-center fixed z-50 w-full bg-dark1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image src={"/./logo.png"} alt="Meetly Logo" width={32} height={32} className='max-sm:size-10' />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Meetly</p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk - User Management */}

        <MobileNav />
      </div>
    </nav>
  )
}