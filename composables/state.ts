const initParams = new URLSearchParams(location.search)

export const input = ref(initParams.get('s')?.toString() || '')
export const selectIndex = ref(0)
export const isSearching = ref(false)
export const isModalOpen = ref(true)
export const currentTab = ref<'search' | 'config'>('search')
export const searchResult = shallowRef([])
