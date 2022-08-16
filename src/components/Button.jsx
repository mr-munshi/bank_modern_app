import React from 'react'

const Button = ({ styles }) => {
    return (
        <a href={`#get-started`}>
            <button type='button' className={`${styles} font-poppins font-medium text-[18px] text-primary bg-blue-gradient py-4 px-6 outline-none rounded-full`}>
                Get Started
            </button>
        </a>
    )
}

export default Button