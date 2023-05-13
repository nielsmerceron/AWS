/**
 * @param {String} titre
 * @param {String} description
 * @param {string} id
 */
async function Todofaite(titre, description, id) {
  const url = "http://127.0.0.1:3000/todo/modify/" + id;
  const body = {
    title: titre,
    description: description,
  };

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result;
}

export { Todofaite };
