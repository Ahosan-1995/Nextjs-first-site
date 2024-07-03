"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';


const Navbar = () => {
    const pathName=usePathname();
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        }
    ]

    // For handle login button to redirect to login page
    const router = useRouter();
    const handler =()=>{
        router.push('/login');
    }
    return (
        <nav className="bg-blue-900 px-6 py-4 flex gap-x-4 text-white justify-between">
          <h6 className='text-3xl'>Next <span className='text-cyan-500'>Hero</span></h6>
          <ul className="flex gap-x-4">

           {/*Dynamic Link and Active Link  */}
          {
            links.map(link=><Link className={`${pathName===link.path && 'text-red-400'}`} key={link.path} href={link.path}>{link.title}</Link>)
          }
            
          </ul>
          <button onClick={handler} className='bg-white text-black text-xl font-bold px-3 rounded-lg'>Login</button>
        </nav>
    );
};

export default Navbar;