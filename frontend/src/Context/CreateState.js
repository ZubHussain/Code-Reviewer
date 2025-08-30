import {create} from 'zustand'

export const useUserStore = create((set)=>({
    code:``,
    response:``,
    isLoading:false,

    setCode: (newCode)=>set({code:newCode}),
    setResponse: (newResponse)=>set({response:newResponse}),
    setLoading: (loading) => set({ isLoading: loading }),
}))