/**
 * @param {String} titre
 * @param {String} description
 * @param {Date} startdate
 * @param {Date} enddate
 * @param {String} groupe
 */
async function Addtodo(titre, description, startdate, enddate, groupe) {
  const url = "https://aws.tpzcloud.uk/api/todo/add";
  const body = {
    title: titre,
    description: description,
    start_date: startdate,
    end_date: enddate,
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

export { Addtodo };
