/**
 * @param {string} pseudo
 * @param {string} email
 * @param {string} mdp
 */
async function doSign(pseudo, email, mdp) {
  const url = "https://aws.tpzcloud.uk/api/user/signup";
  const body = {
    username: pseudo,
    email: email,
    password: mdp,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result;
}

export { doSign };
