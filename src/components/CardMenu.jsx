import React from 'react'

export default function CardMenu({
    target = "",
    imgSrc = "",
    imgAlt = "",
    title = "",
    description = "",
}) {
    return (
        <>
            <a href={target}
                className='mt-8 flex flex-col items-center px-8 py-4 text-black rounded-lg gap-2 bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] transition-shadow duration-300'
            >
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    width={150}
                />
                <div className='font-semibold text-xl'>
                    {title}
                </div>
                <div className='text-gray-500'>
                    {description}
                </div>
            </a>
        </>
    )
}
