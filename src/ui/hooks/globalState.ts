import create from 'zustand'

type GlobalLoading = {
	globalLoading: boolean
	setGlobalLoading: (globalLoading: boolean) => void
}

export const useGlobalLoading = create<GlobalLoading>((set) => ({
	globalLoading: false,
	setGlobalLoading: () =>
		set((state) => ({ globalLoading: !state.globalLoading }))
}))
