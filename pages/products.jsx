import React, { useEffect, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Loader } from '../components'
import { SweetStoreContext } from '../constants/context/ContextStore'

const products = () => {
    const { sweets, setSweets } = useContext(SweetStoreContext)

    console.log(sweets)
    return (
        <div className='container mx-auto px-4'>
            <Head>
                <title>Sweets | Novelty Sweets</title>
            </Head>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Buy fresh & tasty sweets
                            </h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap m-4">
                        {sweets?.length === 0 ? <Loader /> :
                            sweets?.map(product => (
                                <div key={product.attributes.Slug} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <Image
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src={`http://localhost:1337${product.attributes.imgURL.data.attributes.url}`}
                                            layout='fill'
                                        />
                                    </a>
                                    <div className="mt-3 ml-1">
                                        <Link href={`/sweet/${product.attributes.Slug}`}>
                                            <h3 className="text-gray-900 text-lg font-medium title-font mb-1 cursor-pointer PoppinsFont inline">
                                                {product.attributes.sweetName}
                                            </h3>
                                        </Link>
                                        <h2 className="text-gray-400 title-font text-xs">
                                            {product.attributes.sweetDescrip.substring(0, 30)}....
                                        </h2>
                                        <div className="mt-[5px] text-xs font-medium text-white flex justify-start items-center">
                                            <p className='p-1 bg-orange-500 tracking-wide mr-[6px] rounded-[5px]'>₹{product.attributes.price}/piece</p>
                                            {product.attributes.availableqty > 10 ? (
                                                <p className='p-1 mr-[5px] rounded-[5px] bg-green-700'>AVL</p>
                                            ) : (
                                                <p className='p-1 mr-[5px] rounded-[5px] bg-red-600'>N/A</p>
                                            )}
                                            {product.attributes.availableqty > 10 ? (
                                                <Link href={`/sweet/${product.attributes.Slug}`}>
                                                    <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2.5 py-1.5 pb-2 mt-1.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-orange-600 dark:focus:ring-red-900">
                                                        Buy Now
                                                    </button>
                                                </Link>) : (
                                                <button className="bg-red-300 text-white font-bold p-2 rounded opacity-50 cursor-not-allowed">
                                                    Buy Now
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default products