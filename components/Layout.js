import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut, useSession } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import Cookies from 'js-cookie';
import { ArrowUturnRightIcon, Cog6ToothIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    signOut({ callbackUrl: '/signin' });
  };

  return (
    <>
      <Head>
        <title>{title ? title + " - Let's Festival" : "Let's Festival"}</title>
        <meta name="description" content="Nextjs" />
        <link rel="icon" href="/head.png" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <header
        aria-label="Site Header"
        className="border-b border-gray-100 z-20 fixed bg-white w-full shadow-lg"
      >
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <div className="flex items-center">
            <button type="button" className="p-2 sm:mr-4 lg:hidden">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Link href="/" className="flex">
              <div>
                <img src="/logo.png" className="h-16"></img>
              </div>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <nav
              aria-label="Site Nav"
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
            >
              <Link
                href="/Fmain"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-400 mx-4"
              >
                축제 소개
              </Link>

              <Link
                href="/Boardindex"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-400 mx-4"
              >
                게시판
              </Link>

              <Link
                href="/contact"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-400 mx-4"
              >
                문의하기
              </Link>

              <Link
                href="/about"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-400 mx-4"
              >
                개발자
              </Link>
              <Link
                href="/crypto/jwt"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-orange-400 mx-4"
              >
                Jwt
              </Link>
            </nav>

            <div className="ml-8 flex items-center">
              <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                <span>
                  {status === 'loading' ? (
                    <a
                      className="p-2 inline-flex justify-center rounded-md
            bg-orange-400 bg-opacity-80 px-4 py-2 text-sm font-medium
            text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2
            focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      연결중..
                    </a>
                  ) : session?.user ? (
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button
                        className="inline-flex w-full justify-center rounded-md
            bg-orange-400 bg-opacity-80 px-4 py-2 text-sm font-medium
            text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2
            focus-visible:ring-white focus-visible:ring-opacity-75
            "
                      >
                        {session.user.name}
                      </Menu.Button>

                      <Menu.Items
                        className="absolute right-0 mt-2 w-56 origin-top-right divide-y
            divide-gray-100 rounded-md bg-white shadow-lg ring-1
            ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className={`${
                                  active
                                    ? 'bg-orange-400 text-white'
                                    : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                href="/accountsetting"
                              >
                                {active ? (
                                  <Cog6ToothIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <Cog6ToothIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                                계정 설정
                              </Link>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? 'bg-orange-400 text-white'
                                    : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                href="/logout"
                                onClick={logoutClickHandler}
                              >
                                {active ? (
                                  <ArrowUturnRightIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <ArrowUturnRightIcon
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                                로그아웃
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Menu>
                  ) : (
                    <Link
                      href="/signin"
                      className="p-2 inline-flex justify-center rounded-md
            bg-orange-400 bg-opacity-80 px-4 py-2 text-sm font-medium
            text-white hover:bg-opacity-100 focus:outline-none focus-visible:ring-2
            focus-visible:ring-white focus-visible:ring-opacity-75"
                    >
                      로그인
                    </Link>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="">{children}</main>

      <footer className="bg-orange-100">
        <div className="py-3 uk-link-reset">
          <div className="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
            <div className="flex space-x-2 text-gray-700 uppercase">
              <Link href="/about">About</Link>
            </div>
            <p className="capitalize">
              Copyright &copy; 2022 Powered by Team FallGuys
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
