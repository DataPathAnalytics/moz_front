import store from '../redux/store/store'

export const getMapByKey = (key) => {
  const storeData = store.getState()
  return storeData.mappingsStore.allMappings[key]
}