// @ts-nocheck
async function Todoget() {
  const url = "https://aws.tpzcloud.uk/api/todo/get";

  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result;
}

export { Todoget };

/**
 * @param {Date} date
 * @param {any | null} result
 */
function trimbydate(date, result) {
  //filtre par titre
  if (result != null) {
    return result.filter(
      (x) =>
        x.start_date.substring(0, 10) === date.toISOString().substring(0, 10)
    );
  }
}

export { trimbydate };

/**
 * @param {any} id
 * @param {any[] | null} result
 */
function gettodobyid(id, result) {
  if (result != null) {
    return result.filter((j) => j._id === id);
  }
}

export { gettodobyid };
