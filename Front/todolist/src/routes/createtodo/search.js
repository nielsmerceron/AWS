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
  let todoList = [
    { id:"",title:"test",description:"",dated:new Date(),datee:new Date(),status:false },
  ];
  if (result != null) {
    let arrayresult = result.parse();
    for (let i = 1; i < arrayresult.lenght; i = i + 7) {
      if (arrayresult.at(i) === titre) {
        todoList = [...todoList, { id:arrayresult.at(i-1),title:arrayresult.at(i),description:arrayresult.at(i+1),dated:arrayresult.at(i+2),datee:arrayresult.at(i+3),status:arrayresult.at(i+4)}];
      }
    }
  }
  return(todoList);
}


export { trimbytitle };
