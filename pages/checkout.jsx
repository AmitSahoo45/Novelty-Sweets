import Head from 'next/head'
import React, { useContext, useState } from 'react'
import { SweetStoreContext } from '../constants/context/ContextStore';

const checkout = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });
    const { cart } = useContext(SweetStoreContext);
    let total = cart.reduce((accumulator, item) => accumulator + (item.qty * item.price), 0);
    total += 100

    const handleSubmit = (e) => {}

    return (
        <div>
            <Head>
                <title>Checkout | Novelty Sweets</title>
            </Head>
            <div className="container mx-auto px-4 mt-4">
                {cart?.length > 0 ? (
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Product
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Price/piece
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Quantity
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Total
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {cart.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {item.name}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">Rs {item.price}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {item.qty}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        Rs {item.price * item.qty}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="ml-4">
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <h1 className="text-2xl font-bold">Total</h1>
                                            <p className="text-gray-500">Rs {total}</p>
                                        </div>
                                    </div>
                                    <h5 className="text-ellipsis text-lg mt-4">Your Details</h5>
                                    <form>
                                        <div>
                                            <label for="full_name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                                            <input
                                                type="text"
                                                id="full_name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Full Name"
                                                required
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="mb-1">
                                            <label for="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="Email"
                                                required
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="mb-1">
                                            <label for="phone" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                            <input
                                                type="tel"
                                                id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                required
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="mb-1">
                                            <label for="message" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
                                            <textarea
                                                id="message"
                                                rows="4"
                                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Your Address"
                                                required
                                                value={form.address}
                                                onChange={(e) => setForm({ ...form, address: e.target.value })}
                                            ></textarea>
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-5 rounded-lg"
                                                onClick={handleSubmit}
                                            >
                                                Place Order
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-screen">
                        <h1 className="text-2xl font-bold">Your cart is empty</h1>
                        <p className="text-gray-500">Add some items to your cart to checkout</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default checkout