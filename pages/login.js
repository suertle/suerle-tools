import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useAuth } from '../contexts/AuthContext'

const Login = () => {
  const router = useRouter()

  const { user, login } = useAuth()

  const [data, setData] = useState({
    email: 'admin@suertle.com',
    password: '',
  })

  const handleEmailChanged = (event) => {
    setData({
      ...data,
      email: event.target.value
    })
  }

  const handlePasswordChanged = (event) => {
    setData({
      ...data,
      password: event.target.value
    })
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      await login(data.email, data.password)
      router.push(router.query.redirect ? router.query.redirect : '/')
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-500">
        <div className="flex justify-center items-center flex-wrap h-full g-6">
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={ handleLogin }>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center text-3xl font-semibold mx-4 mb-5">Login</p>
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  placeholder="Email address"
                  value={ data.email }
                  onChange={ handleEmailChanged }
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  placeholder="Password"
                  value={ data.password }
                  onChange={ handlePasswordChanged }
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
