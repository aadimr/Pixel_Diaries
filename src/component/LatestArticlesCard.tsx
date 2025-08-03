import Image from 'next/image';
import React, { JSX } from 'react'

interface data {
    heading: string,
    image: string,
    shortCont: string
}

function LatestArticlesCard({ heading, image, shortCont }: data): JSX.Element {
    return (
        <div className='border-1 rounded-[1rem] p-7'>
            <div className="relative w-full h-50 mb-2">
                <Image
                    src={image}
                    alt={heading}
                    fill
                    sizes="200px"
                    style={{ objectFit: 'cover' }}
                    className="rounded-[1rem]"
                />
            </div>
            <h3 className="text-lg font-semibold mb-2">{heading}</h3>
            <p className="text-sm break-words">{shortCont}</p>
            <p>Read more...</p>
        </div>
    )
}

export default LatestArticlesCard;