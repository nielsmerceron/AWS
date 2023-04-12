<script>
  import{addTodo,removeTodo,clickOption,unclickOption,objectifClick,groupeClick,isPeriodique,periodiqueClick} from "../createtodo/todo"
  /**
   * @type {todo}
   */
  let todos = [];
  let option = 0;
  let todo = {};

  let title = "";
  let description = "";
  /**
   * @type {any}
   */
  let date = null;
  let objectif = "";
  let groupe = "";
  let periode = "";


</script>

<html data-theme="light" lang="fr" />
<div class="navbar">
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
          class="input input-bordered w-full"
          type="text"
          placeholder="Title"
          bind:value={title}
        />
      </div>
      <button class="btn btn-primary" on:click={clickOption}>Option</button>
    </div>
    <div class="flex space-x-2 mb-4">
      <div class="flex-1 mr-2">
        <input
          class="input input-bordered w-full"
          type="text"
          bind:value={description}
          placeholder="Description"
        />
      </div>
    </div>
    <div class="flex space-x-2 mb-4">
      <div class="flex-1 mr-2">
        <input
          class="input input-bordered w-full"
          type="text"
          bind:value={date}
          placeholder="Date DD/MM/YY"
        />
      </div>
      <button class="btn btn-primary" on:click={clickOption}>Calendrier</button>
    </div>
    {#if isObjectif === true}
      <div class="flex space-x-2 mb-4">
        <div class="flex-1 mr-2">
          <input
            class="input input-bordered w-full"
            type="text"
            bind:value={objectif}
            placeholder="Objectif"
          />
        </div>
      </div>
    {/if}
    {#if isGroupe === true}
      <div class="flex space-x-2 mb-4">
        <div class="flex-1 mr-2">
          <input
            class="input input-bordered w-full"
            type="text"
            bind:value={groupe}
            placeholder="Avec ..."
          />
        </div>
      </div>
    {/if}
    {#if isPeriodique === true}
      <div class="flex space-x-2 mb-4">
        <div class="flex-1 mr-2">
          <input
            class="input input-bordered w-full"
            type="text"
            bind:value={periode}
            placeholder="Tous les ..."
          />
        </div>
      </div>
    {/if}
    <button class="btn btn-primary" on:click={addTodo}
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
              <p class="text-gray-500">{todo.description}</p>
              <p class="text-gray-500">{todo.date}</p>
              <p class="text-gray-500">{todo.objectif}</p>
              <p class="text-gray-500">{todo.groupe}</p>
              <p class="text-gray-500">{todo.periodique}</p>
            </div>
            <button class="btn btn-primary" on:click={() => removeTodo(i)}
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
      <button class="btn btn-circle btn-accent" on:click={unclickOption}>
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
        class={isObjectif ? "btn btn-secondary" : "btn btn-accent"}
        on:click={objectifClick}
      >
        Objectif
      </button>
      <h1>Ajout d'un objectif</h1>
    </div>
    <div class="flex space-x-2 mb-4">
      <button
        class={isGroupe ? "btn btn-secondary" : "btn btn-accent"}
        on:click={groupeClick}
      >
        Groupe
      </button>
      <button
        class={isGroupe ? "btn btn-accent" : "btn btn-secondary"}
        on:click={groupeClick}
      >
        Solo
      </button>
      <h1>Est ce un todo de groupe où un todo simple?</h1>
    </div>
    <div class="flex space-x-2 mb-4">
      <button
        class={isPeriodique ? "btn btn-secondary" : "btn btn-accent"}
        on:click={periodiqueClick}
      >
        Periodique
      </button>
      <h1>Est ce un todo periodique?</h1>
    </div>
  </div>
{/if}
