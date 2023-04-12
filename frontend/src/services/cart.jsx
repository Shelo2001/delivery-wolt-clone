import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

export const useCart = create(
    devtools((set) => ({
        items: JSON.parse(localStorage.getItem("cart")) || [],
        addToCart: (item) =>
            set((state) => {
                const items = [...state.items];

                const itemIndex = items.findIndex((i) => i.id === item.id);
                if (itemIndex !== -1) {
                    items[itemIndex].quantity += 1;
                } else {
                    items.push({ ...item, quantity: 1 });
                }

                localStorage.setItem("cart", JSON.stringify(items));

                return { items };
            }),
        removeItemFromCart: (itemId) =>
            set((state) => {
                const updatedItems = state.items.filter(
                    (item) => item.id !== itemId
                );
                localStorage.setItem("cart", JSON.stringify(updatedItems));
                return { items: updatedItems };
            }),
        incrementItemQuantity: (itemId) =>
            set((state) => {
                const updatedItems = state.items.map((item) =>
                    item.id === itemId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                localStorage.setItem("cart", JSON.stringify(updatedItems));
                return { items: updatedItems };
            }),

        decrementItemQuantity: (itemId) =>
            set((state) => {
                const updatedItems = state.items.map((item) =>
                    item.id === itemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
                localStorage.setItem("cart", JSON.stringify(updatedItems));
                return { items: updatedItems };
            }),
    }))
);
