import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { SweetStoreContext } from '../../constants/context/ContextStore';

const colorPicker = (rating) => {
    if (rating < 2) return 'red'
    else if (rating < 3) return 'yellow'
    else if (rating < 4) return 'orange'
    else return 'green'
}

const Sweet = ({ product }) => {
    const router = useRouter();
    const { slug } = router.query
    const { attributes: { sweetName, sweetDescrip, price, availableqty, rating, imgURL: { data: { attributes: { url } } } } } = product
    const { addToCart, removeFromCart, cart } = useContext(SweetStoreContext);

    let itemInCart = cart.filter((item) => item.id === product.id)
    const [counter, setCounter] = useState(itemInCart.length > 0 ? itemInCart[0].qty : 0)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = `${sweetName} | Novelty Sweets`
        itemInCart = cart.filter((item) => item.id === product.id)
        setCounter(itemInCart.length > 0 ? itemInCart[0].qty : 0)
    }, [slug, cart]);

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <Head>
                <title>{sweetName} | Novelty Sweets</title>
            </Head>
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap col-revr">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                            {sweetName}
                        </h1>
                        <div className="flex mb-4">
                            <p className="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">Description</p>
                        </div>
                        <p className="leading-relaxed mb-4">{sweetDescrip}</p>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Price per piece</span>
                            <span className="ml-auto text-gray-900">{price}</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Availability</span>
                            <span className="ml-auto text-gray-900">
                                {availableqty > 10 ? (
                                    <span className="text-green-500">In Stock</span>
                                ) : (
                                    <span className="text-red-500">Out of Stock</span>
                                )}</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Rating</span>
                            <span className={`ml-auto text-${colorPicker(rating)}-500 font-semibold`}>
                                {rating}
                            </span>
                        </div>
                        <div className="flex justify-center items-center flex-col">
                            <div className='w-24 flex justify-center items-center mb-4'>
                                <Button
                                    className='cursor-pointer shadow-buttonShadow rounded-full p-2 pt-[1px]'
                                    onClick={() => addToCart({
                                        id: product.id,
                                        name: sweetName,
                                        price
                                    })}
                                    disabled={counter === 30}
                                >
                                    <PlusOutlined />
                                </Button>
                                <p className='mx-3'>{counter}</p>
                                <Button
                                    className='cursor-pointer shadow-buttonShadow rounded-full p-2 pt-[1px]'
                                    onClick={() => removeFromCart({ id: product.id, name: sweetName, price: price })}
                                    disabled={counter === 0}
                                >
                                    <MinusOutlined />
                                </Button>
                            </div>
                            {availableqty > 10 ? <div className="flex justify-center items-center">
                                <button
                                    onClick={() => router.push('/checkout')}

                                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 mr-2 focus:outline-none hover:bg-red-600 rounded">
                                    Buy Now
                                </button>
                                <button type="button" className="flex ml-auto bg-white border-0 py-2 px-6 mr-2 focus:outline-none hover:text-white hover:bg-red-600 rounded text-red-500">
                                    Add To Cart
                                </button>
                            </div> :
                                <button
                                    className="flex ml-auto text-red-400 bg-slate-300 border-0 py-2 px-6 mr-2 opacity-50 rounded w-full cursor-not-allowed justify-center">
                                    UnAvailable
                                </button>
                            }
                        </div>
                    </div>
                    <div className="lg:w-1/2 md:w-full p-4 w-full">
                        {isLoading && <p>Loading...</p>}
                        <div className="block relative h-96 rounded overflow-hidden">
                            <Image
                                alt="ecommerce"
                                src={`http://localhost:1337${url}`}
                                onLoad={() => setIsLoading(false)}
                                onError={() => setIsLoading(false)}
                                layout="fill"
                                className="object-cover object-center w-full h-full block"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps(context) {
    let pdt = await fetch(`http://localhost:1337/api/sweets?filters[slug]=` + context.query.slug + `&populate=*`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: process.env.BEARER_TOKEN
            }
        })
    let product = await pdt.json()

    return {
        props: {
            product: product.data[0]
        },
    }
}


export default Sweet
