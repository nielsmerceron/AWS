<script>
  let todos = [];
  let option = 0;
  let todo = {};

  import { DateInput } from "date-picker-svelte";
  let dateCalendar = new Date();

  function addTodo() {
    const title = document.getElementById("todoTitle").value;
    const description = document.getElementById("todoDescription").value;
    const date =
      dateCalendar.getDate() +
      "/" +
      dateCalendar.getMonth() +
      "/" +
      dateCalendar.getFullYear();

    if (title && description) {
      const todo = { title, description, date };
      if (isObjectif) {
        todo.objectif = document.getElementById("todoObjectif").value;
      }
      if (isGroupe) {
        todo.groupe = document.getElementById("todoGroupe").value;
      }
      if (isPeriodique) {
        todo.periodique = document.getElementById("todoPeriodique").value;
      }
      todos.push(todo);
      document.getElementById("todoTitle").value = "";
      document.getElementById("todoDescription").value = "";
      document.getElementById("todoDate").value = "";
      document.getElementById("todoObjectif").value = "";
      document.getElementById("todoGroupe").value = "";
      document.getElementById("todoPeriodique").value = "";
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
</script>

<div class="p-8">
  <div class="grid grid-cols-4 gap-4">
    <div>
      <form>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              /></svg
            >
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Todos"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Search</button
          >
        </div>
      </form>
      <div class="p-3">
        <div class="flex mb-4 items-center">
          <p class="w-full">Todo1</p>
          <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded"
            >Done</button
          >
          <button class="flex-no-shrink p-2 ml-2 border-2 rounded"
            >Remove</button
          >
          <button class="flex-no-shrink p-2 ml-2 border-2 rounded"
            >Informations</button
          >
        </div>
        <div class="flex mb-4 items-center">
          <p class="w-full line-through">Todo2</p>
          <button class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded"
            >Not Done</button
          >
          <button class="flex-no-shrink p-2 ml-2 border-2 rounded"
            >Remove</button
          >
          <button class="flex-no-shrink p-2 ml-2 border-2 rounded"
            >Informations</button
          >
        </div>
      </div>
    </div>
    <div class="col-span-2 container mx-auto py-10">01</div>
    {#if option === 0}
      <div class="col-span-1 container mx-auto py-10">
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
          <h1>Jour et heure de la fin de la todolist :</h1>
          <DateInput
            bind:date={dateCalendar}
            class="input input-bordered w-full datepicker-input"
          />
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
        <button class="btn btn-accent" on:click={addTodo}
          >Ajouter dans Brouillon</button
        >
        {#if todos.length === 0}
          <p>No to-dos added yet.</p>
        {:else}
          <ul class="divide-y divide-gray-400">
            {#each todos as todo, i}
              <li class="py-4 flex">
                <div class="flex-1">
                  <h3 class="text-lg font-bold">{todo.title}</h3>
                  {#if todo.description != null}<p class="text-gray-500">
                      {todo.description}
                    </p>{/if}
                  {#if todo.date != null}<p class="text-gray-500">
                      {todo.date}
                    </p>{/if}
                  {#if todo.objectif != null}<p class="text-gray-500">
                      {todo.objectif}
                    </p>{/if}
                  {#if todo.groupe != null}<p class="text-gray-500">
                      {todo.groupe}
                    </p>{/if}
                  {#if todo.periodique != null}<p class="text-gray-500">
                      {todo.periodique}
                    </p>{/if}
                </div>
                <button class="btn btn-warning" on:click={() => removeTodo(i)}
                  >Remove</button
                >
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              /></svg
            >
          </button>
        </div>
        <div class="flex space-x-2 mb-4">
          <button
            class={isObjectif ? "btn btn-secondary" : "btn btn-primary"}
            on:click={objectifClick}
          >
            Objectif
          </button>
          <h1>Ajout d'un objectif</h1>
        </div>
        <div class="flex space-x-2 mb-4">
          <button
            class={isGroupe ? "btn btn-secondary" : "btn btn-primary"}
            on:click={groupeClick}
          >
            Groupe
          </button>
          <button
            class={isGroupe ? "btn btn-primary" : "btn btn-secondary"}
            on:click={groupeClick}
          >
            Solo
          </button>
          <h1>Est ce un todo de groupe où un todo simple?</h1>
        </div>
        <div class="flex space-x-2 mb-4">
          <button
            class={isPeriodique ? "btn btn-secondary" : "btn btn-primary"}
            on:click={periodiqueClick}
          >
            Periodique
          </button>
          <h1>Est ce un todo periodique?</h1>
        </div>
      </div>
    {/if}
  </div>
</div>
