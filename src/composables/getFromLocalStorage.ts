export function getFromLocalStorage(key: string, defaultValue = null) {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : defaultValue
}
