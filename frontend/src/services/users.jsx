import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

export const useUsers = create(
    devtools((set) => ({
        user: {},
        token: null,
        loading: false,
        errorRegister: null,
        errorLogin: null,
        login: async (data) => {
            try {
                const res = await axios.post(
                    `${import.meta.env.VITE_BASE_API_URL}/login`,
                    data
                );
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                set({ user: await res.data.user, token: await res.data.token });
                window.location.href = "/";
            } catch (error) {
                set({
                    errorLogin:
                        (await error?.response?.data?.error) ||
                        (await error?.response?.data?.message),
                });
                setTimeout(() => {
                    set({
                        errorLogin: null,
                    });
                }, 3000);
            }
        },
        register: async (userData) => {
            try {
                const res = await axios.post(
                    `${import.meta.env.VITE_BASE_API_URL}/register`,
                    userData
                );
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                window.location.href = "/";
            } catch (error) {
                set({
                    errorRegister:
                        (await error?.response?.data?.error) ||
                        (await error?.response?.data?.message),
                });
                setTimeout(() => {
                    set({
                        errorRegister: null,
                    });
                }, 3000);
            }
        },
        logout: async (data) => {
            const token = localStorage.getItem("token");
            const res = await axios.get(
                `${import.meta.env.VITE_BASE_API_URL}/logout`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/";
        },
    }))
);
