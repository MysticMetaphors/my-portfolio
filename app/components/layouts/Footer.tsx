import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black-primary border-t-3 border-blue-primary/70">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-15">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-3 items-center z-110">
            <Image height={800} width={800} src="/bryan.png" alt="Arvo Logo" className="h-10 w-fit rounded-full" />
            <div>
              <h1 className="font-semibold text-white">Von Bryan</h1>
              <p className="text-gray-300 text-sm font-light">Junior Web Developer</p>
            </div>
          </div>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link href="https://www.facebook.com/vonbryan.banal.1/" className="text-gray-400 hover:text-blue-primary">
              <i className="fab fa-facebook-f text-md"></i>
              <span className="sr-only">Facebook page</span>
            </Link>

            {/* <Link href="#" className="text-gray-400 hover:text-blue-primary ms-5">
              <i className="fab fa-discord text-md"></i>
              <span className="sr-only">Discord community</span>
            </Link> */}

            <Link href="https://github.com/MysticMetaphors" className="text-gray-400 hover:text-blue-primary ms-5">
              <i className="fab fa-github text-md"></i>
              <span className="sr-only">GitHub account</span>
            </Link>

            <Link href="https://www.linkedin.com/in/von-bryan-ba%C3%B1al-1a1188314/" className="text-gray-400 hover:text-blue-primary ms-5">
              <i className="fab fa-linkedin-in text-md"></i>
              <span className="sr-only">LinkedIn account</span>
            </Link>

          </div>
        </div>
        <div className="mt-4">
          <span className="text-sm text-gray-400 sm:text-center">© 2025 <Link href="#" className="hover:underline font-normal" >VonBryan™</Link>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>

  )
}