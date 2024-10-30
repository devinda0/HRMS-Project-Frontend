import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer w-full flex flex-row justify-between items-center bg-custompurple text-base-content p-10">
        <nav>
            <h2>© 2024 All Right Reserved</h2>
        </nav>
        <nav>
            <div className="grid grid-flow-col gap-4">
                <Link to={'/privacy'} >Privacy Policy</Link>
                <Link to={'/terms'} >Terms of Service</Link>
                <Link to={'/problem'} >Report a Problem</Link>
            </div>
        </nav>
    </footer>
  )
}

export default Footer