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
 * @param {String} titre
 * @param {any} result
 */
function trimbytitle(titre, result) {
  if ((titre === "")) {
    //pas de filtrage
    return result;
  } else {
    //filtre par titre
    if (result != null) {
      return result.filter(
        (/** @type {{ title: string; }} */ x) => x.title === titre
      );
    }
  }
}

export { trimbytitle };

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
