<script>
// @ts-nocheck

  import calendarize from "calendarize";
  import { Todofaite } from "./checktodo";
  import { Tododelete } from "./delete";
  import { Todoget, trimbydate, gettodobyid } from "./search";

  //pour le calendrier
  let dateCalendar = new Date();
  export let year = dateCalendar.getFullYear();
  export let month = dateCalendar.getMonth();
  export let offset = 1; // Monday le 1er jour
  export let today = dateCalendar.getDate(); // Date

  export let labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  export let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  $: today_month = today && dateCalendar.getMonth();
  $: today_year = today && dateCalendar.getFullYear();
  $: today_day = today && dateCalendar.getDate();

  let prev = calendarize(new Date(year, month - 1), offset);
  let current = calendarize(new Date(year, month), offset);
  let next = calendarize(new Date(year, month + 1), offset);

  function toPrev() {
    [current, next] = [prev, current];

    if (--month < 0) {
      month = 11;
      year--;
    }

    prev = calendarize(new Date(year, month - 1), offset);
  }

  function toNext() {
    [prev, current] = [current, next];

    if (++month > 11) {
      month = 0;
      year++;
    }

    next = calendarize(new Date(year, month + 1), offset);
  }

  function isToday(day) {
    return (
      today && today_year === year && today_month === month && today_day === day
    );
  }

  //le code musclé

  //recherche todo
  /**
   * @type {boolean | null}
   */
  let verificationsearch = null;
  /**
   * @type {JSON |null}
   */
  let searchresult = null;

  /**
   * @param {Date} day
   */
  async function searchtodo(day) {
    try {
      searchresult = await Todoget();
      verificationsearch = true;
      verificationcheck = null;
      aff = false;
      verificationdelete = null;
      searchresult = trimbydate(day, searchresult);
      searchresult.push("");
      searchresult = searchresult;
    } catch (error) {
      verificationsearch = false;
      verificationcheck = null;
      aff = false;
      verificationdelete = null;
      verificationsearch = null;
    }
  }

  //supprime todo

  /**
   * @type {boolean | null}
   */
  let verificationdelete = null;

  /**
   * @param {string} id
   */
  async function deletetodo(id) {
    try {
      await Tododelete(id);
      if (searchresult != null) {
        for (let i = 0; i < searchresult.length; i++) {
          if (searchresult[i]._id === id) {
            searchresult.splice(i, 1);
            verificationdelete = true;
            aff = false;
            verificationcheck = null;
            verificationsearch = null;
            searchresult.push("");
            searchresult = searchresult;
            break;
          }
        }
      }
    } catch (error) {
      verificationdelete = false;
      aff = false;
      verificationcheck = null;
      verificationsearch = null;
    }
  }

  //checktodo

  /**
   * @type {boolean | null}
   */
  let verificationcheck = null;
  /**
   * @param {string} id
   * @param {boolean} completed
   */
  async function checktodo(id, completed) {
    try {
      await Todofaite(id, !completed);
      verificationcheck = true;
      aff = false;
      verificationdelete = null;
      verificationsearch = null;
    } catch (error) {
      verificationcheck = false;
      aff = false;
      verificationdelete = null;
      verificationsearch = null;
    }
  }

  //aff description
  let aff = false;
  let affdescription = "";

  /**
   * @param {any} todo
   */
  function switchaff(todo) {
    verificationcheck = null;
    verificationdelete = null;
    verificationsearch = null;
    aff = true;
    if (todo != null) {
      affdescription =
        " Description : " +
        todo[0].description +
        " Début : " +
        todo[0].start_date +
        " Fin : " +
        todo[0].end_date +
        " Accomplissement : " +
        todo[0].completed;
    } else {
      affdescription = "pas de description";
    }
  }
</script>

<div class=" bg-zinc-800 h-screen">
  <div class="navbar bg-zinc-800">
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost normal-case text-xl">To do list</a>
    </div>
    <div class="navbar-center secondary lg:flex">
      <strong>Calendar</strong>
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
    <div class="bg-zinc-500">
      <div class="col-span-2 container mx-auto py-10" />
      <div class="grid grid-cols-1 gap-3">
        <div class="mx-auto">
          <!--titre-->
          <div>todo du jour</div>
          <!-- réussite de la recherche-->
          <div>
            <div class="flex space-x-2 mb-4">
              {#if verificationsearch != null}
                {#if verificationsearch === true}
                  <p>Des todo ont été trouvé</p>
                {:else}
                  <p>erreur rencontré ou aucune todo trouvé</p>
                {/if}
              {:else}<p />
              {/if}
            </div>
          </div>
        </div>
        <!-- todo trouvé-->
        {#if searchresult != null}
          {#each searchresult as todoitem}
            {#if todoitem != ""}
              <div class="bg-zinc-400">
                <li>
                  <div class="p-4">{todoitem.title}</div>
                  <div class="grid grid-cols-3 gap-4 p-2">
                    <div class="col-auto">
                      <button
                        class="btn btn-block bg-blue-800"
                        on:click={() =>
                          switchaff(gettodobyid(todoitem._id, searchresult))}
                        >Description</button
                      >
                    </div>
                    <div class="col-auto">
                      <button
                        class="btn btn-block bg-emerald-600"
                        on:click={() =>
                          checktodo(todoitem._id, todoitem.completed)}
                        >Fait</button
                      >
                    </div>
                    <div class="col-auto">
                      <button
                        class="btn btn-block bg-red-800"
                        on:click={() => deletetodo(todoitem._id)}>Supp</button
                      >
                    </div>
                  </div>
                </li>
              </div>
            {/if}
          {/each}
        {:else}
          <div class="bg-zinc-400">
            <p>aucune todo</p>
          </div>
        {/if}
      </div>
    </div>
    <!-- colonne du centre -->
    <div class="bg-zinc-600 col-span-2">
      <div class="flex items-center justify-center mb-8">
        <button class="btn btn-link" on:click={toPrev}> &#8592</button>
        <h4 class="text-lg font-semibold">{months[month]} {year}</h4>
        <button class="btn btn-link" on:click={toNext}> &#8594 </button>
      </div>

      <div class="grid grid-cols-7 gap-4 text-center">
        {#each labels as txt, idx (txt)}
          <span class="text-xs font-semibold text-gray-500 uppercase"
            >{labels[(idx + offset) % 7]}</span
          >
        {/each}

        {#each { length: 6 } as w, posLigne (posLigne)}
          {#if current[posLigne]}
            {#each { length: 7 } as d, posColonne (posColonne)}
              {#if current[posLigne][posColonne] != 0}
                <button
                  class={isToday(current[posLigne][posColonne])
                    ? "btn bg-blue-950"
                    : "btn bg-blue-800 "}
                  on:click={() =>
                    searchtodo(
                      new Date(
                        year +
                          "-" +
                          (month + 1) +
                          "-" +
                          current[posLigne][posColonne]
                      )
                    )}
                >
                  {current[posLigne][posColonne]}</button
                >
              {:else if posLigne < 1}
                <span class="text-lg opacity-50"
                  >{prev[prev.length - 1][posColonne]}</span
                >
              {:else}
                <span class="text-lg opacity-50">{next[0][posColonne]}</span>
              {/if}
            {/each}
          {/if}
        {/each}
      </div>
    </div>
    <!-- colonne de droite -->
    <div class="bg-zinc-700">
      <div class="col-span-2 container mx-auto py-10" />
      <!-- message de réussite ou non du delete d'une todo -->
      <div class="flex space-x-2 mb-4">
        {#if verificationdelete != null}
          {#if verificationdelete === true}
            <p>La todo a été supprimé avec succès</p>
          {:else}
            <p>Une erreur a été rencontré lors de la suppression</p>
          {/if}
        {:else}
          <p />
        {/if}
      </div>
      <!-- message de réussite ou non d'avoir complété une todo -->
      <div class="flex space-x-2 mb-4">
        {#if verificationcheck != null}
          {#if verificationcheck === true}
            <p>La todo a a été complété</p>
          {:else}
            <p>
              Une erreur a été rencontré lors du changement d'état de la todo
            </p>
          {/if}
        {:else}
          <p />
        {/if}
      </div>
      <!-- affichage de la description -->
      <div class="flex space-x-2 mb-4">
        {#if aff != null}
          {#if aff === true}
            <p>{affdescription}</p>
          {:else}
            <p />
          {/if}
        {:else}
          <p />
        {/if}
      </div>
    </div>
  </div>
</div>
