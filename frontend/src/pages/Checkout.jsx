import React from "react";
import { useCart } from "../services/cart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {
        items,
        removeItemFromCart,
        incrementItemQuantity,
        decrementItemQuantity,
    } = useCart();
    const prices = items.map((item) => item.quantity * item.price);

    const total = prices.reduce((acc, cur) => acc + cur, 0);

    const deleteFromCart = (id) => {
        removeItemFromCart(id);
    };

    const incrementHandler = (id) => {
        incrementItemQuantity(id);
    };
    const decrementHandler = (id) => {
        decrementItemQuantity(id);
    };

    return (
        <div class="bg-gray-100 py-8">
            <div class="w-full p-6 mx-auto">
                <h1 class="text-2xl font-bold mb-4">Checkout</h1>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full md:w-3/4 md:pr-4 mb-4 md:mb-0">
                        {items.map((item) => (
                            <div class="bg-white my-1 p-4 shadow-md">
                                <div class="flex items-center justify-between mb-4">
                                    <Link
                                        to={`/object/${item.company_object_id}`}
                                    >
                                        <h2 class="text-lg font-bold">
                                            {item.title}
                                        </h2>
                                    </Link>
                                    <div class="flex bg-gray-100 p-2 rounded-3xl items-center gap-[25px]">
                                        <button
                                            onClick={
                                                item.quantity === 1
                                                    ? () =>
                                                          deleteFromCart(
                                                              item.id
                                                          )
                                                    : () =>
                                                          decrementHandler(
                                                              item.id
                                                          )
                                            }
                                            className="btn btn-primary bg-white hover:text-white text-primary rounded-full border-none"
                                        >
                                            <AiOutlineMinus size={15} />
                                        </button>
                                        <p className="text-primary text-lg font-bold">
                                            {item.quantity}
                                        </p>
                                        <button
                                            onClick={() =>
                                                incrementHandler(item.id)
                                            }
                                            className="btn btn-primary bg-white hover:text-white text-primary rounded-full border-none"
                                        >
                                            <AiOutlinePlus size={15} />
                                        </button>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center">
                                        <img
                                            src={`${
                                                import.meta.env
                                                    .VITE_SHOW_IMAGE_PATH
                                            }/upload/${item.image}`}
                                            alt="Product Image"
                                            class=" w-20 h-20 object-contain rounded-lg mr-4"
                                        />
                                        <div>
                                            <h3 class="text-lg font-bold">
                                                {item.title}
                                            </h3>
                                            <p class="text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    <p class="text-lg font-bold">
                                        {item.quantity}x{item.price} ={" "}
                                        {item.quantity * item.price} ₾
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div class="w-full md:w-1/4">
                        <div class="bg-white p-4 shadow-md mb-4">
                            <h2 class="text-lg font-bold mb-4">
                                Order Summary
                            </h2>
                            <div class="flex items-center justify-between mb-2">
                                <p class="text-gray-600">Subtotal</p>
                                <p class="text-lg font-bold">₾ {total}</p>
                            </div>
                            <div class="flex items-center justify-between mb-2">
                                <p class="text-gray-600">Tax</p>
                                <p class="text-lg font-bold">₾ 5</p>
                            </div>
                            <hr class="my-2" />
                            <div class="flex items-center justify-between">
                                <p class="text-gray-600 font-bold">Total</p>
                                <p class="text-lg font-bold">₾ {total + 5}</p>
                            </div>
                            <button class="w-full mt-4 btn-primary text-white font-bold py-2 px-4 rounded-lg">
                                Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
