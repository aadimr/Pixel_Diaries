import Image from 'next/image';
import React from 'react'

function IntroSection() {
    return (
        <div className='h-screen flex justify-center items-center gap-20'>
                <Image
                    src="/heroBanner3.png"
                    alt="hero"
                    fill
                />
            {/* <section className='w-full h-full border border-black-2 flex items-center justify-center'>section 1</section>
            <section className='w-full h-full border border-black-2 flex items-center justify-center'>section 2</section> */}
        </div>
    )
}

export default IntroSection;