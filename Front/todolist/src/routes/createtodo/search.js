async function Todoget() {
  const url = "http://127.0.0.1:3000/todo/get";
  const body = {};

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

export { Todoget };

/**
 * @param {String} titre
 * @param {any} result
 */
function trimbytitle(titre, result) {
  if (result != null && titre != "") {
    let arrayresult = result.parse();
    for (let i = 1; i < arrayresult.lenght; i = i + 7) {
      if (arrayresult.at(i) != titre) {
        //je dégage les valeurs que je ne veux pas
        arrayresult.fill(" ", i - 1, i + 5);
      }
    }
    return arrayresult;
  }
}

export { trimbytitle };
