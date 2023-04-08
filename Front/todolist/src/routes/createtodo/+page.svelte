    <script>
        let todos = [];
        let option = 0;
      
        function addTodo() {
          const title = document.getElementById('todoTitle').value;
          const description = document.getElementById('todoDescription').value;
      
          if (title && description) {
            todos = [...todos, { title, description }];
            document.getElementById('todoTitle').value = '';
            document.getElementById('todoDescription').value = '';
          }
        }
      
        function removeTodo(index) {
          todos = todos.filter((_, i) => i !== index);
        }

        function clickOption(){
            option = 1;
        }

        function unclickOption(){
            option = 0;
        }

        const myButton = document.getElementById("myButton");

        let isClicked = false;

        function handleClick() {
            isClicked ? isClicked = false : isClicked = true;
        }

        
      </script>

      <html data-theme="luxury" lang="fr"></html>
    <div class="navbar ">
      <div class="navbar-start">
        <a class=" normal-case text-xl">To do list</a>
      </div>
      <div class="navbar-center secondary lg:flex">Create your next todo</div>
      <div class="navbar-end">
        <a class="btn" href="/">Home</a>
      </div>
    </div>
      
    {#if option === 0}
      <div class="container mx-auto py-10">
        <div class="flex space-x-2 mb-4">
          <div class="flex-1 mr-2">
            <input
              type="text"
              placeholder="Title"
              id="todoTitle"
              class="input input-bordered w-full"
            />
          </div>
          <button class="btn btn-primary" on:click={clickOption}>Option</button>
        </div>
        <div class="flex space-x-2 mb-4">
          <div class="flex-1 mr-2">
            <input
              type="text"
              placeholder="Description"
              id="todoDescription"
              class="input input-bordered w-full"
            />
          </div>
        </div>
        <button class="btn btn-primary" on:click={addTodo}>Ajouter dans Brouillon</button>
        {#if todos.length === 0}
          <p>No to-dos added yet.</p>
        {:else}
          <ul class="divide-y divide-gray-400">
            {#each todos as todo, i}
              <li class="py-4 flex">
                <div class="flex-1">
                  <h3 class="text-lg font-bold">{todo.title}</h3>
                  <p class="text-gray-500">{todo.description}</p>
                </div>
                <button class="btn btn-primary" on:click={() => removeTodo(i)}>Remove</button>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
      {:else}
      <div class="container mx-auto py-10">
        <div class="flex space-x-2 mb-4">
            <h1 class="text-5xl font-bold">Option</h1>
            <button class="btn btn-circle btn-accent" on:click={unclickOption}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
        <div class="flex space-x-2 mb-4">
            <button class="btn btn-primary" on:click={addTodo}>Objectif </button>
            <h1> Ajout d'un objectif</h1>
        </div>
        <button class={isClicked ? "btn btn-primary" : "btn btn-secondary"} on:click={handleClick}> Click me! </button>      
        </div>
      
      
      {/if}