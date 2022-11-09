import Head from 'next/head';
import Styles from '../styles/Layout.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut, useSession } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import Cookies from 'js-cookie';

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
        <link
          rel="icon"
          href="/festival_decoration_party_celebration_holiday_flag_carnival_icon_150775.ico"
        />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className={Styles.bar}>
        <header>
          <nav className="flex flex-row h-12 items-center px-4 justify-between shadow-md">
            <div className={Styles.gitimgbox}>
              <img className={Styles.gitimg} src="images/logo.png"></img>
            </div>
            <a href="/" className="text-lg font-bold absolute pl-14">
              Let's Festival
            </a>
            <div>
              <a href="/" className="p-2">
                공지사항
              </a>
              <a href="/intro" className="p-2">
                축제소개
              </a>
              <a href="/" className="p-2">
                커뮤니티
              </a>
              <a href="/" className="p-2">
                개발자 연결
              </a>

              {status === 'loading' ? (
                '연결중..'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button
                    className="inline-flex w-full justify-center rounded-md
                  bg-black bg-opacity-30 px-4 py-2 text-sm font-medium
                  text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2
                  focus-visible:ring-white focus-visible:ring-opacity-75"
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
                          <button
                            className={`${
                              active
                                ? 'bg-violet-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/"
                          >
                            설정
                          </button>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active
                                ? 'bg-violet-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="logout"
                            onClick={logoutClickHandler}
                          >
                            로그아웃
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Menu>
              ) : (
                <a href="/signin" className="p-2">
                  로그인
                </a>
              )}
            </div>
          </nav>
        </header>
      </div>

      <main className="container m-auto mt-4">{children}</main>

      <br />
      <footer className="flex h-10 justify-center items-center shadow-inner bg-green-200">
        <p className={Styles.footer}>
          Copyright &copy; 2022 Powered by Team FallGuys
        </p>
      </footer>
    </>
  );
}
