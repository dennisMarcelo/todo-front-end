const headers = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

const createRequestData = (method, body) => ({
  method,
  body: JSON.stringify(body),
  headers,
});

export async function getToken(email, password) {
  const url = process.env.REACT_APP_URL_LOGIN;
  const requestData = createRequestData('POST', { email, password });

  const res = await fetch(url, requestData);
  return res.json();
}

export async function createNewUser(newUser) {
  const url = process.env.REACT_APP_URL_SIGNUP;
  const requestData = createRequestData('POST', newUser);

  const res = await fetch(url, requestData);
  return res.json();
}
