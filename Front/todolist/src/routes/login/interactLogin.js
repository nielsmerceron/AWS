/**
 * @param {string} email
 * @param {string} password
 */
async function doLogin(email, password) {
  const url = 'http://127.0.0.1:3000/user/logup';

  const body = {
    email: email,
    password: password,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result;
}

export {doLogin};