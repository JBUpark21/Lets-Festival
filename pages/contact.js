import React from 'react';
import Layout from '../components/Layout';
import Styles from '../styles/intro.module.css';

export default function Form() {
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/send', {
      body: JSON.stringify({
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500">
        {/* <img className={StyleSheet.asd} src="images/mail.png"></img> */}
        <div className="p-6 border-2 h-screen grid grid-cols-2 divide-x">
          <div className="p-4 h-6/7 flex-col flex items-start  border-opacity-60 rounded-lg overflow-hidden">
            <h1 className="pt-6 text-4xl text-white font-bold mb-8">
              <br />
              <br />
              개발자와 연락
            </h1>
            <br />
            <br />
            <br />
            <h1 className="pt-6 text-5xl text-white font-bold mb-8">
              문의사항을
              <br />
              <br />
              이메일로 문의 해주세요.
            </h1>
            <br />
            <br />
            <br />
            <h1 className="pt-6 text-5xl text-white font-bold mb-8">
              wodnsj1234@gmail.com
            </h1>
            <br />
            <br />
            <br />
          </div>
          <form onSubmit={registerUser}>
            <div className="float-right p-4 h-full w-full flex-col flex items-start grid justify-items-center  bg-black opacity-70 rounded-lg overflow-hidden items-center">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="name"
                  name="name"
                  id="name"
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  이름을 입력해주세요.
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  발신자 메일을 입력하세요. ex) name@example.com
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="message"
                  name="message"
                  id="message"
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  rows="5"
                  required
                />
                <label
                  for="message"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  문의사항을 입력하세요
                </label>
              </div>
              <button type="submit" className="mb-4 primary-button">
                전송
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
