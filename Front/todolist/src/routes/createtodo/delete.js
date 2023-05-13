
/**
 * @param {string} id
 */
async function Tododelete(id) {
  const url = "http://127.0.0.1:3000/todo/del/"+id;
  const body = {
  };

  const response = await fetch(url, {
    method: "POST",
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

export { Tododelete };