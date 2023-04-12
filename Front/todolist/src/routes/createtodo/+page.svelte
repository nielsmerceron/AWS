<script>
  let todos = [];
  let option = 0;
  let todo = {};

  import { DateInput } from 'date-picker-svelte'
  let dateCalendar = new Date()


  function addTodo() {

      const title = document.getElementById('todoTitle').value;
      const description = document.getElementById('todoDescription').value;
      const date = dateCalendar.getDate() +"/"+ dateCalendar.getMonth() +"/"+ dateCalendar.getFullYear();

      if (title && description) {
          const todo = { title, description, date }
          if (isObjectif) {
              todo.objectif = document.getElementById('todoObjectif').value;
          }
          if (isGroupe) {
              todo.groupe = document.getElementById('todoGroupe').value;
          }
          if (isPeriodique) {
              todo.periodique = document.getElementById('todoPeriodique').value;
          }
          todos.push(todo);
          document.getElementById('todoTitle').value = '';
          document.getElementById('todoDescription').value = '';
          document.getElementById('todoDate').value = '';
          document.getElementById('todoObjectif').value = '';
          document.getElementById('todoGroupe').value = '';
          document.getElementById('todoPeriodique').value = '';
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
      isObjectif ? isObjectif = false : isObjectif = true;
  }

  let isGroupe = false;

  function groupeClick() {
      isGroupe ? isGroupe = false : isGroupe = true;
  }

  let isPeriodique = false;

  function periodiqueClick() {
      isPeriodique ? isPeriodique = false : isPeriodique = true;
  }

</script>


    <html data-theme="cmyk" lang="fr"></html>
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
        <button class="btn btn-accent" on:click={clickOption}>Option</button>
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
      <div class="flex space-x-2 mb-4">
        <h1> Jour et heure de la fin de la todolist : </h1>
        <DateInput bind:date={dateCalendar} class="input input-bordered w-full datepicker-input" />
      </div>
      {#if isObjectif === true} 
      <div class="flex space-x-2 mb-4">
          <div class="flex-1 mr-2">
            <input
              type="text"
              placeholder="Objectif"
              id="todoObjectif"
              class="input input-bordered w-full"
            />
          </div>
        </div>        
      {/if}
      {#if isGroupe === true} 
      <div class="flex space-x-2 mb-4">
          <div class="flex-1 mr-2">
            <input
              type="text"
              placeholder="Avec ..."
              id="todoGroupe"
              class="input input-bordered w-full"
            />
          </div>
        </div>        
      {/if}
      {#if isPeriodique === true} 
      <div class="flex space-x-2 mb-4">
          <div class="flex-1 mr-2">
            <input
              type="text"
              placeholder="Tous les ..."
              id="todoPeriodique"
              class="input input-bordered w-full"
            />
          </div>
        </div>        
      {/if}
      <button class="btn btn-accent" on:click={addTodo}>Ajouter dans Brouillon</button>
      {#if todos.length === 0}
        <p>No to-dos added yet.</p>
      {:else}
        <ul class="divide-y divide-gray-400">
          {#each todos as todo, i}
            <li class="py-4 flex">
              <div class="flex-1">
                <h3 class="text-lg font-bold">{todo.title}</h3>
                <p class="text-gray-500">{todo.description}</p>
                <p class="text-gray-500">{todo.date}</p>
                <p class="text-gray-500">{todo.objectif}</p>
                <p class="text-gray-500">{todo.groupe}</p>
                <p class="text-gray-500">{todo.periodique}</p>
              </div>
              <button class="btn btn-warning" on:click={() => removeTodo(i)}>Remove</button>
            </li>
          {/each}
        </ul>
      {/if}
    </div>





    {:else}
    <div class="container mx-auto py-10">
      <div class="flex space-x-2 mb-4">
          <h1 class="text-5xl font-bold">Option</h1>
          <button class="btn btn-circle btn-primary" on:click={unclickOption}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
      </div>
      <div class="flex space-x-2 mb-4">
          <button class={isObjectif ? "btn btn-secondary" : "btn btn-primary"} on:click={objectifClick}> Objectif </button> 
          <h1> Ajout d'un objectif</h1>
      </div>   
      <div class="flex space-x-2 mb-4">
          <button class={isGroupe ? "btn btn-secondary" : "btn btn-primary"} on:click={groupeClick}> Groupe </button>
          <button class={isGroupe ? "btn btn-primary" : "btn btn-secondary"} on:click={groupeClick}> Solo </button>  
          <h1> Est ce un todo de groupe où un todo simple?</h1>
      </div>     
      <div class="flex space-x-2 mb-4">
          <button class={isPeriodique ? "btn btn-secondary" : "btn btn-primary"} on:click={periodiqueClick}> Periodique </button>
          <h1> Est ce un todo periodique?</h1>
      </div>
      </div>
    
    
    {/if}
    