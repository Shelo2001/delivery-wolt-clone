import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

export const useObject = create(
    devtools((set) => ({
        loading: false,
        companyObjects: [],
        errorObject: null,
        createObject: async (objectData) => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.post(
                    `${
                        import.meta.env.VITE_BASE_API_URL
                    }/company/object/create`,
                    objectData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                window.location.reload();
            } catch (error) {
                set({
                    errorObject:
                        (await error?.response?.data?.error) ||
                        (await error?.response?.data?.message),
                });
                setTimeout(() => {
                    set({
                        errorObject: null,
                    });
                }, 3000);
            }
        },
        getMyObjects: async (id) => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(
                    `${import.meta.env.VITE_BASE_API_URL}/company/object/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                set({ companyObjects: res.data.objects });
            } catch (error) {
                set({
                    errorObject:
                        (await error?.response?.data?.error) ||
                        (await error?.response?.data?.message),
                });
                setTimeout(() => {
                    set({
                        errorObject: null,
                    });
                }, 3000);
            }
        },
        searchByQuery: async (name) => {
            try {
                set({ loading: true });

                const res = await axios.get(
                    `${
                        import.meta.env.VITE_BASE_API_URL
                    }/company/search?q=${name}`
                );
                set({ companyObjects: res.data, loading: false });
            } catch (error) {
                set({
                    errorObject:
                        (await error?.response?.data?.error) ||
                        (await error?.response?.data?.message),
                });
                setTimeout(() => {
                    set({
                        errorObject: null,
                    });
                }, 3000);
            }
        },
    }))
);
