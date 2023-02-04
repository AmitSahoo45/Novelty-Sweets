import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Badge, Button } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import { SweetStoreContext } from '../constants/context/ContextStore'

const Navbar = () => {
    const { cart } = useContext(SweetStoreContext);
    let isLoggedIn = true
    return (
        <header className="text-gray-600 body-font border-b-[2px] shadow-navShadow">
            <div className="container sm:mb-2 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:m-auto md:items-center">
                    <Link href='/'><a className="mr-5 hover:text-gray-900 sm:mr-0 mx-3">Home</a></Link>
                    <Link href='/about'><a className="mr-5 hover:text-gray-900 sm:mr-0 mx-3">About</a></Link>
                    <Link href='/products'><a className="mr-5 hover:text-gray-900 sm:mr-0 mx-3">Sweets</a></Link>
                </nav>
                <Link href='/'>
                    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                        <Image src="/assets/logo.svg" alt='Logo' width={50} height={50} />
                        <span className="ml-3 text-base">Novelty Sweets</span>
                    </a>
                </Link>
                <div className="mt-2 lg:w-2/5 inline-flex items-center lg:justify-end ml-5 lg:ml-0 lg:mt-2 sm:ml-0 sm:mt-4">
                    <Link href='/checkout'>
                        <Badge count={cart?.length} showZero className='mr-4 hover:cursor-pointer'>
                            <ShoppingCartOutlined style={{ fontSize: '22px' }} />
                        </Badge>
                    </Link>
                    {isLoggedIn ? (<Button size="middle">Sign In</Button>) : (<UserOutlined />)}
                </div>
            </div>
        </header>
    )
}

export default Navbar