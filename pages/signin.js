import Link from 'next/link'
import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'

import { signIn, useSession } from 'next-auth/react'
import { getError } from '../utils/error'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function SigninScreen() {

  const {
    handleSubmit,
    register,
    formState: { errors },
    } = useForm()

    
  const { data: session } = useSession()
  const router = useRouter()
  const { redirect } = router.query

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/')
    }
  }, [router, session, redirect])

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })
      if (result, errors) {
        toast.error(result.error)
      }
    } catch (err){
      toast.error(getError(err))
    }
  }


  return (
    <Layout title="Sign In">
      <form className="mx-auto max-w-screen-md"
      onSubmit={handleSubmit(submitHandler)}>
        <h1 className="mb-4 text-xl">통합 로그인</h1>
        <div className="mb-4">
          <label htmlFor="email">이메일</label>
          <input type="email"
            {...register('email', {
              required: '이메일을 입력하세요.',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: '이메일을 형식을 지켜주세요.',
                },
              })}
            className="w-full" id="email" autoFocus />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}

        </div>
        <div className="mb-4">
          <label htmlFor="password">비밀번호</label>
          <input type="password" 
            {...register('password', {
            required: '비밀번호를 입력하세요.',
            minLength: { value: 3, message: '비밀번호를 3글자 이상으로 입력하세요.' },
            })}
          className="w-full" id="password" autoFocus />
          {errors.password && (
            <div className="text-red-500 ">{errors.password.message}</div>
          )}

        </div>
        <div className="mb-4">
          <button className="primary-button">로그인</button>
        </div>

        <div className="mb-4 grid place-items-center ">    
          <p className="py-2 px-4" >아직 계정이 없으십니까? &nbsp;
            <a href="/"  className="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded border
            border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700
            focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white 
            dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              회원가입
            </a>
          </p>
          
        </div>
      </form>
    </Layout>
  )
}
