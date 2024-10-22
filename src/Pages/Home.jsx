import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    {/* Hero Section */}
    <header className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-6xl font-bold leading-tight">
          Welcome to Medium
        </h1>
        <p className="mt-6 text-lg font-light">
          A place where products sold the best price. Buy your dream, live your passion.
        </p>
        <Link to='/products' className="mt-10 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
          Explore Now
        </Link>
      </header>
    </>
  )
}

export default Home