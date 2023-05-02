<svelte:head>
	<title>TODO</title>
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<script>
  import "../app.postcss";
</script>

<html data-theme="dracula" lang="fr" />
<div class="navbar">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost normal-case text-xl">To do list</a>
  </div>
  <div class="navbar-center secondary lg:flex">
    <strong>CREATE TODO</strong>
  </div>
  <div class="navbar-end">
    <div class="dropdown dropdown-bottom dropdown-end">
      <label for="dropdown-menu" tabindex="-1" class="btn btn-ghost btn-circle">
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
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        id="dropdown-menu"
      >
        <li><a href="/signin">Log in </a></li>
        <li><a href="/signup">Sign Up </a></li>
        <li><a href="/createtodo">Create todo </a></li>
        <li><a href="/calendrier">Calendrier </a></li>
      </ul>
    </div>
  </div>
</div>

<slot />
