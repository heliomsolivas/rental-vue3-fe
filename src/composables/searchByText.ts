interface Object {
  [key: string]: string | number
}

export function useSearchByText(
  array: any,
  filter1: string,
  filter2: string,
  text: string
): Object[] {
  const res = array.filter((obj: { [x: string]: { toString: () => string } }) => {
    const prop1 = obj[filter1]?.toString().toLowerCase() || ''
    const prop2 = obj[filter2]?.toString().toLowerCase() || ''
    return prop1.includes(text.toLowerCase()) || prop2.includes(text.toLowerCase())
  })

  return res
}
