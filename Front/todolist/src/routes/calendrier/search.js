async function Todoget() {
  const url = "http://127.0.0.1:3000/todo/get";

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
      (/** @type {{ start_date: Date; }} */ x) => x.start_date === date
    );
  }
}

export { trimbydate };
