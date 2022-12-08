import Link from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';

export default function RegisterScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <div
      className="h-screen w-screen overflow-auto bg-[url('../public/images/HomeIntro.png')]"
      title="Create Account"
    >
      <Head>
        <title>Sign In - Let's Festival</title>
        <meta name="description" content="Nextjs" />
        <link
          rel="icon"
          href="/festival_decoration_party_celebration_holiday_flag_carnival_icon_150775.ico"
        />
      </Head>
      <div className="py-32 mx-auto max-w-screen-sm text-center">
        <a href="/" className="text-white text-6xl">
          Let's Festival
        </a>
      </div>
      <form
        className="mx-auto max-w-screen-sm mb-20"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="bg-white text-center border-white border-8 px-12 py-4">
          <h1 className="mb-4 text-3xl">계정 만들기</h1>
          <div className="mb-4">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              className="w-full"
              id="name"
              autoFocus
              {...register('name', {
                required: '이름을 입력해주세요.',
              })}
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              {...register('email', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: '이메일을 형식을 지켜주세요.',
                },
              })}
              className="w-full"
              id="email"
            ></input>
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              {...register('password', {
                required: '비밀번호를 입력하세요.',
                minLength: {
                  value: 6,
                  message: '비밀번호를 5글자 이상 입력하세요.',
                },
              })}
              className="w-full"
              id="password"
              autoFocus
            ></input>
            {errors.password && (
              <div className="text-red-500 ">{errors.password.message}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              className="w-full"
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: '비밀번호를 한번더 입력해주세요.',
                validate: (value) => value === getValues('password'),
                minLength: {
                  value: 3,
                  message: '비밀번호를 2글자 이상 입력하세요.',
                },
              })}
            />
            {errors.confirmPassword && (
              <div className="text-red-500 ">
                {errors.confirmPassword.message}
              </div>
            )}
            {errors.confirmPassword &&
              errors.confirmPassword.type === 'validate' && (
                <div className="text-red-500 ">
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
          </div>

          <div className="mb-4 ">
            <button className="primary-button">회원가입</button>
          </div>

          <div className="mb-4 grid place-items-center">
            <div>
              계정이 있으십니까? &nbsp;
              <Link
                href={`/signin?redirect=${redirect || '/'}`}
                className="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded border
            border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white 
            dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                로그인
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
