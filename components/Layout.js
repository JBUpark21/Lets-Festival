import Head from 'next/head';
import Styles from '../styles/Layout.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut, useSession } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import Cookies from 'js-cookie';
import {
  BeakerIcon,
  HomeIcon,
  CakeIcon,
  ChatBubbleLeftRightIcon,
  IdentificationIcon,
  CalendarDaysIcon,
  StarIcon,
  InformationCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  PaperAirplaneIcon,
  ArrowUturnRightIcon,
  Cog6ToothIcon,
} from '@heroicons/react/20/solid';

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
              <Menu as="div" className="relative inline-block text-left p-2">
                <Menu.Button>
                  <HomeIcon
                    className="mr-2 h-5 w-5 float-left"
                    aria-hidden="true"
                  />
                  홈페이지 소개
                </Menu.Button>
                <Menu.Items
                  className="absolute right-0 mt-2 w-56 origin-top-right divide-y
                  divide-gray-100 rounded-md bg-white shadow-lg ring-1
                  ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          href="HomeIntro"
                        >
                          {active ? (
                            <BeakerIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <BeakerIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          개발 이유
                        </a>
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
                          href=""
                          onClick=""
                        >
                          {active ? (
                            <IdentificationIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <IdentificationIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          개발자 소개
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>

              <Menu as="div" className="relative inline-block text-left p-2">
                <Menu.Button>
                  <CakeIcon
                    className="mr-2 h-5 w-5 float-left"
                    aria-hidden="true"
                  />
                  축제 정보
                </Menu.Button>
                <Menu.Items
                  className="absolute right-0 mt-2 w-56 origin-top-right divide-y
                  divide-gray-100 rounded-md bg-white shadow-lg ring-1
                  ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`${
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          href="intro"
                        >
                          {active ? (
                            <CalendarDaysIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <CalendarDaysIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          축제 일정/장소
                        </a>
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
                          href=""
                          onClick=""
                        >
                          {active ? (
                            <StarIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <StarIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          축제 참여 이벤트
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>

              <Menu as="div" className="relative inline-block text-left p-2">
                <Menu.Button>
                  <ChatBubbleLeftRightIcon
                    className="mr-2 h-5 w-5 float-left"
                    aria-hidden="true"
                  />
                  커뮤니티
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
                          href="intro"
                        >
                          {active ? (
                            <InformationCircleIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <InformationCircleIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          공지사항
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
                          href="#"
                          onClick=""
                        >
                          {active ? (
                            <ChatBubbleLeftEllipsisIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChatBubbleLeftEllipsisIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          자유 게시판
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
                          href="#"
                          onClick=""
                        >
                          {active ? (
                            <PaperAirplaneIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <PaperAirplaneIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          문의 게시판
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>

              {status === 'loading' ? (
                <a
                  className="p-2 inline-flex justify-center rounded-md
                  bg-black bg-opacity-30 px-4 py-2 text-sm font-medium
                  text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2
                  focus-visible:ring-white focus-visible:ring-opacity-75 "
                >
                  연결중..
                </a>
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button
                    className="inline-flex w-full justify-center rounded-md
                  bg-black bg-opacity-30 px-4 py-2 text-sm font-medium
                  text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2
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
                          <button
                            className={`${
                              active
                                ? 'bg-violet-500 text-white'
                                : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            href="/"
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
                <a
                  href="/signin"
                  className="p-2 inline-flex justify-center rounded-md
                  bg-black bg-opacity-30 px-4 py-2 text-sm font-medium
                  text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2
                  focus-visible:ring-white focus-visible:ring-opacity-75 "
                >
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
