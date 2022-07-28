export const request = (url: string, options?: any) => {
  const newOptions = {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(options?.headers ? options.headers : {}),
    },
  }

  return fetch(url, newOptions)
    .then((response) => response.json())
}
