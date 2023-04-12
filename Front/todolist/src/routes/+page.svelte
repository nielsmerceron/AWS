<svelte:head>
	<title>TODO</title>
  <link rel="icon" href="/favicon.svg" />
</svelte:head>
<html data-theme="dracula" lang="fr" />
<div class="navbar">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost normal-case text-xl">To do list</a>
  </div>
  <div class="navbar-center secondary lg:flex">Log in process</div>
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
        <li><a href="/signin">Sign in </a></li>
        <li><a href="/login">Log in </a></li>
        <li><a href="/createtodo">Create todo </a></li>
      </ul>
    </div>
  </div>
</div>
<div class="container py-10 px-10 mx-0 min-w-full grid place-items-center">
  <p>
    Ce site a pour but de vous accompagner dans vos tâches journalières et vous
    aider a être organiser
  </p>
  (insérer un exemple d'interface du site)
  <div class="artboard artboard-horizontal phone-1">568×320</div>
  <div class="container py-10 px-10 mx-0 min-w-full grid place-items-center">
    Ce site vous offrira une interface épuré au design minimaliste pour vous
    ordonner.
    <p>
      Nous avons plusieurs features qui pourront vous intéreresser tel que des
      rappels de tache,
    </p>
    <p>
      un classement pour se motiver a égaler les personnes effectuant leur tache
      et bien d'autre
    </p>
    <p>feature que vous découvrirez lors de l'utilisation de notre site.</p>
  </div>
</div>
