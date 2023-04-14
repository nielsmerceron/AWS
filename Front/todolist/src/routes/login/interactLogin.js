/**
 * @param {string} email
 * @param {string} mdp
 */
async function doLogin(email, mdp) {
  const url = 'http://127.0.0.1:3000/user/login'; // to be updated by db url 
  const body = {
    email: email,
    password: mdp,
  };

  const response = await fetch(url, {
    method: 'GET', // get list of connexion items (email, mdp) from db 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  // check if email and mpd exist in the result list 
  return Boolean;
}

export {doLogin}