/**
 * @param {string} title
 * @param {string} description
 * @param {boolean} completed
 * @param {Date} createdAt
 */
async function doCreateTodo(title, description,completed,createdAt) {
    const url = 'http://127.0.0.1:3000/user/createtododo';
  
    const body = {
      title : title,
      description : description,
      completed : completed,
      createdAt : createdAt,
    };
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const result = await response.json();
    return result;
  }
  
  export { doCreateTodo };
  