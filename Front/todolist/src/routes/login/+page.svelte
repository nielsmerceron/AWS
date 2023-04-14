<svelte:head>
	<title>TODO</title>
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<script>
  import { doLogin } from "../login/interactLogin.js";
  import { element } from "svelte/internal";

  let email = "";
  let mdp = "";
</script>

<html data-theme="dracula" lang="fr" />
<div class="navbar">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost normal-case text-xl">To do list</a>
  </div>
  <div class="navbar-center secondary lg:flex"><strong>LOG IN</strong></div>
  <div class="navbar-end">
    <div class="dropdown dropdown-bottom dropdown-end">
      <label for="dropdown-menu" tabindex="-1" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
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
  <div class="form-control">
    <label class="label" for="email-input">
      <span class="label-text">Identifiant</span>
    </label>
    <label class="input-group">
      <span>Email</span>
      <input 
        type="email" 
        bind:value={email}
        class="input input-bordered"
        id="email-input" 
      />
    </label>
  </div>
  <div class="form-control">
    <label class="label" for="password-input">
      <span class="label-text">Mot de passe</span>
    </label>
    <label class="input-group">
      <span>Mot de passe</span>
    <input
      type="password" 
      bind:value={mdp}
      class="input input-bordered"
      id="password-input"
    />
    </label>
  </div>
  <div class="container py-10 px-10 mx-0 min-w-full grid place-items-center">
    <button class="btn" 
    on:click={() => console.log(doLogin(email, mdp))}
    >Connexion</button>
  </div>
</div>
