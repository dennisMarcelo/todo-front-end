export async function getToken(name, password) {
  const url = process.env.REACT_APP_URL_LOGIN;
  const requestData = {
    method: 'POST',
    body: JSON.stringify({ email: name, password }),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  const res = await fetch(url, requestData);
  return res.json();
}
