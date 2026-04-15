import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const CART_STORAGE_KEY = "cart";

export const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }, [cart]);

    const addToCart = (id, qty = 1) => {
        setCart((prev) => {
            const next = { ...prev };

            if (next[id]) {
                next[id].qty += qty;
            } else {
                next[id] = { qty };
            }

            return next;
        });
    };

    const updateQuantity = (id, qty) => {
        setCart((prev) => {
            const next = { ...prev };

            if (qty <= 0) {
                delete next[id];
            } else {
                next[id] = { qty };
            }

            return next;
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => {
            const next = { ...prev };
            delete next[id];
            return next;
        });
    };

    const clearCart = () => {
        setCart({});
    };

    const uniqueCount = useMemo(() => Object.keys(cart).length, [cart]);

    const value = {
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        uniqueCount,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }

    return context;
}