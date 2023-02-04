import { createContext, useState } from 'react'

const SweetStoreContext = createContext()

const ProviderContext = ({ children }) => {
    const [sweets, setSweets] = useState([]);
    const [cart, setCart] = useState([
        { "id": 6, "name": "Modak", "price": 5, "qty": 5 },
        { "id": 3, "name": "Barfi", "price": 5, "qty": 17 }
    ]);
    const [alert, setAlert] = useState({
        open: 'true', message: '', type: 'success'
    });

    const addToCart = (item) => {
        let index = cart.findIndex((cartItem) => cartItem.id === item.id)
        if (index === -1) setCart([...cart, { ...item, qty: 1 }])
        else {
            cart[index].qty += 1
            setCart([...cart])
        }
    }

    const removeFromCart = (item) => {
        let index = cart.findIndex((cartItem) => cartItem.id == item.id)
        if (index !== -1) {
            cart[index].qty -= 1
            if (cart[index].qty === 0)
                cart.splice(index, 1)
            setCart([...cart])
        }
    }

    const clearCart = () => setCart([])

    return <SweetStoreContext.Provider
        value={{
            sweets, setSweets,
            cart, addToCart, removeFromCart, clearCart,
            alert, setAlert
        }}>
        {children}
    </SweetStoreContext.Provider>
}

export { SweetStoreContext, ProviderContext };
