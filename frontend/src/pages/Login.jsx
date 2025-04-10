import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    return (
        <>
            <section>
                <div className="bg-[#242424] min-h-screen py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <h1 className="text-3xl font-bold text-center mb-6">Login to Your Account</h1>

                                <form className="space-y-6">
                                    {/* Email Field */}
                                    <div className="relative">
                                        <input
                                            autoComplete="email"
                                            id="email"
                                            name="email"
                                            type="email"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-sky-600"
                                            placeholder="Email address"
                                            required
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Email Address
                                        </label>
                                    </div>

                                    {/* Password Field */}
                                    <div className="relative">
                                        <input
                                            autoComplete="current-password"
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-sky-600"
                                            placeholder="Password"
                                            required
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >
                                            Password
                                        </label>
                                    </div>

                                    {/* Remember Me & Forgot Password */}
                                    <div className="flex items-center justify-between text-sm">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2" />
                                            Remember me
                                        </label>
                                        <a href="#" className="text-sky-600 hover:underline">
                                            Forgot password?
                                        </a>
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded transition duration-200"
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </form>

                                {/* Divider */}
                                <div className="my-6 flex items-center">
                                    <hr className="flex-grow border-gray-300" />
                                    <span className="mx-4 text-gray-400 text-sm">or</span>
                                    <hr className="flex-grow border-gray-300" />
                                </div>

                                {/* Google Sign In */}
                                <div className="flex justify-center">
                                    <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        <svg
                                            className="h-6 w-6 mr-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="-0.5 0 48 48"
                                        >
                                            <g fill="none">
                                                <path fill="#FBBC05" d="M9.8,24C9.8,22.5 10.1,21 10.5,19.6L2.6,13.6C1.1,16.7 0.2,20.3 0.2,24C0.2,27.7 1.1,31.3 2.6,34.4L10.5,28.3C10.1,26.9 9.8,25.5 9.8,24" />
                                                <path fill="#EB4335" d="M23.7,10.1C27,10.1 30,11.3 32.4,13.2L39.2,6.4C35,2.8 29.7,0.5 23.7,0.5C14.4,0.5 6.4,5.8 2.6,13.6L10.5,19.6C12.4,14.1 17.5,10.1 23.7,10.1" />
                                                <path fill="#34A853" d="M23.7,37.9C17.5,37.9 12.4,33.9 10.5,28.4L2.6,34.4C6.4,42.2 14.4,47.5 23.7,47.5C29.4,47.5 34.9,45.4 39,41.6L31.5,35.8C29.4,37.1 26.7,37.9 23.7,37.9" />
                                                <path fill="#4285F4" d="M46.1,24C46.1,22.6 45.9,21.1 45.6,19.7H23.7V28.8H36.3C35.7,31.9 34,34.3 31.5,35.8L39,41.6C43.3,37.6 46.1,31.6 46.1,24" />
                                            </g>
                                        </svg>
                                        Continue with Google
                                    </button>
                                </div>

                                {/* Sign up link */}
                                <p className="mt-6 text-sm text-center text-gray-600">
                                    Don’t have an account?{' '}
                                    <a href="#" className="text-sky-600 hover:underline" onClick={()=>navigate('/register')}>
                                        Sign up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
