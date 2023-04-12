
  /**
   * @param {string} title
   * @param {string} description
   * @param {any} date
   * @param {string} objectif
   * @param {string} groupe
   * @param {string} periode
   */
  function addTodo(title, description,date,objectif,groupe,periode) {
    
    if (title && description) {
      const todo = { title, description, date };
      if (isObjectif) {
        todo.objectif = objectif;
      }
      if (isGroupe) {
        todo.groupe = groupe;
      }
      if (isPeriodique) {
        todo.periodique = periode;
      }
      todos.push(todo);
    }
  }

  function removeTodo(index) {
    todos = todos.filter((_, i) => i !== index);
  }

  function clickOption() {
    option = 1;
  }

  function unclickOption() {
    option = 0;
  }

  let isObjectif = false;

  function objectifClick() {
    isObjectif ? (isObjectif = false) : (isObjectif = true);
  }

  let isGroupe = false;

  function groupeClick() {
    isGroupe ? (isGroupe = false) : (isGroupe = true);
  }

  let isPeriodique = false;

  function periodiqueClick() {
    isPeriodique ? (isPeriodique = false) : (isPeriodique = true);
  }

export{addTodo,removeTodo,clickOption,unclickOption,objectifClick,groupeClick,isPeriodique,periodiqueClick,isGroupe,isObjectif}