/**
 * @param {string} id
 */
async function Tododelete(id) {
  const url = "https://aws.tpzcloud.uk/api/todo/del/" + id;

  const response = await fetch(url, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result;
}

export { Tododelete };
