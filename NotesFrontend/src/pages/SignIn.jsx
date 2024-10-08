import React from 'react'

const SignIn = () => {
    return (
        /* From Uiverse.io by themrsami */
        <div className="flex flex-col items-center justify-center h-screen dark">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg shadow-gray-500 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
                <form className="flex flex-col">
                    <input placeholder="Email address" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />
                    <input placeholder="Password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="password" />
                    <div className="flex items-center  justify-between flex-wrap">

                        <a className="text-sm text-blue-500 hover:underline mb-0.5" href="#">Forgot password?</a>
                        <p className=" mt-4"> Don't have an account? <a className="text-sm text-blue-500 -200 hover:underline mt-4" href="#">Signup</a></p>
                    </div>
                    <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Login</button>
                </form>
            </div>
        </div>

    )
}

export default SignIn
