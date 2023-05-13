<script>
  import { DateInput } from "date-picker-svelte";
  import { Addtodo } from "./add";
  import { Todofaite } from "./checktodo";
  import { Tododelete } from "./delete";
  import { Todoget } from "./search";


  let title = "";
  let description = "";
  let groupe = "";
  let startdate = new Date();
  let enddate = new Date();

  /**
   * @type {boolean | null}
   */
  let verificationaddtodo = null;

  async function addtodo() {
    try {
      await Addtodo(title, description, startdate, enddate, groupe);
      verificationaddtodo = true;
    } catch (error) {
      verificationaddtodo = false;
    }
  }

  /**
   * @type {boolean | null}
   */
  let verificationsearch = null;

  async function searchtodo() {
    try {
      await Todoget();
      verificationsearch = true;
    } catch (error) {
      verificationsearch = false;
    }
  }
</script>

<div class=" bg-zinc-800 h-screen">
  <div class="navbar bg-zinc-800">
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost normal-case text-xl">To do list</a>
    </div>
    <div class="navbar-center secondary lg:flex">
      <strong>CREATE TODO</strong>
    </div>
    <div class="navbar-end">
      <div class="dropdown dropdown-bottom dropdown-end">
        <label
          for="dropdown-menu"
          tabindex="-1"
          class="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            /></svg
          >
        </label>
        <ul
          tabindex="-1"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-zinc-800"
          id="dropdown-menu"
        >
          <li><a href="/createtodo">Create todo </a></li>
          <li><a href="/calendrier">Calendrier </a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-4 gap-0 h-screen">
    <!-- colonne de gauche-->
    <div class="bg-zinc-500">
      <div class="col-span-2 container mx-auto py-10" />
      <div class="grid grid-cols-1 gap-3">
        <div class="mx-auto">
          <!-- barre de recherche-->
          <div class="form-control">
            <label class="label" for="search-input">
              <span class="label-text">Enter the todo title</span>
            </label>
            <label class="input-group">
              <input
                type="text"
                placeholder="Todo title"
                class="input input-bordered"
              />
              <button class="btn bg-blue-800">Search</button>
            </label>
          </div>
        </div>
        <!-- todo trouvé-->
        <div class="bg-zinc-400">Todo</div>
      </div>
    </div>

    <!-- colonne du centre -->
    <div class="bg-zinc-600 col-span-2" />
    <!-- colonne de droite -->

    <div class="bg-zinc-700">
      <div class="col-span-2 container mx-auto py-10" />
      <!-- input titre -->
      <div class="col-span-1 container mx-auto py-10">
        <div class="flex space-x-2 mb-4">
          <div class="flex-1 mr-2">
            <input
              type="text"
              placeholder="Titre"
              id="todoTitle"
              bind:value={title}
              class="input input-bordered w-full"
            />
          </div>
        </div>
        <!-- input description -->
        <div class="flex space-x-2 mb-4">
          <div class="flex-1 mr-2">
            <input
              type="text"
              placeholder="Description"
              id="todoTitle"
              bind:value={description}
              class="input input-bordered w-full"
            />
          </div>
        </div>
        <!-- date de début-->
        <div class="flex space-x-2 mb-4">
          <label for="datestartinput">
            <span class="label-text">début de la todo</span>
          </label>
          <DateInput bind:value={startdate} />
        </div>
        <!-- date fin-->
        <div class="flex space-x-2 mb-4">
          <label for="datestartinput">
            <span class="label-text">fin de la todo</span>
          </label>
          <DateInput bind:value={enddate} />
        </div>
        <!-- option-->
        <div class="flex space-x-2 mb-4">
          <div class=" grid grid-cols-3 gap-1">
            <div class="col-start-2">
              <button class="btn bg-blue-800" on:click={addtodo}
                >ajout de la todo</button
              >
            </div>
          </div>
        </div>
        <!-- résultat de la requete-->
        <div class="flex space-x-2 mb-4">
          {#if verificationaddtodo !=null}
          {#if verificationaddtodo === true}
		      <p>{title} a été ajouté</p>
	        {:else}
		      <p>{title} n'a pas pu être rajouté</p>
	        {/if}
          {:else}
          <p> ajouté une todo </p>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
