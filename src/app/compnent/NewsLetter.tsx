import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewsLetter() {
  return (
    <div className='w-full bg-teal-500 h-60 md:flex md:justify-around md:items-center'>
        <div className='p-6 md:px-20  items-center text-white'>
            <h1 className='text-2xl md:text-3xl font-bold'>Newsletter - Stay tune and get the latest update</h1>
            <h1 className='text-lg md:text-xl'>Far far away, behind the word mountains</h1>
        </div>
        <div>
          <Link href={'https://l.facebook.com/l.php?u=https%3A%2F%2Fdiscord.gg%2FfhDFfZcBcq&h=AT0-iCdV5m6nVljhUBTn08vlXcrQuq2GgM0EzuyTXfNe9KWwXh9RFE4nDhanjU9VNKa_V5y6qr-l8usuEakXPBpel9s9bkbbD7VO2Z6JUJJDcs2aIaRGqeDleTPyT9pVYtQtkBQhKbxBbkY3tSgo&__tn__=-UK-R&c[0]=AT2n4DCBUhP-m-XVFnir3OXuUjIPk1MipYZg_1lx8jgIff0hOGC7sT_XVNdj3TpZEyArzePAFr3SiOOPPKdpWA8thL78b6mIpUpDTo4T7Yj_5tgi0kWBOdpcxZcfOlChE8Cen7ljQUcIBHAKLDZeBR5cRhaul6DL9hny13rL6rSyw0sD0wNKgFAlucu4IMX0Q7SPwQEJSQLwTFIUl3tumR5hvgXm-j_Axfz0SXZ64JqBnzpH6E4KyTtBtYCth6bg'}>
          
            <button className='bg-white text-teal-600 font-bold p-4 m-6 hover:bg-teal-600 hover:text-white'>Join Discord Channel Now</button>
          </Link>
        </div>
       
    </div>
  )
}
