<script>
  import { doLogin } from "./interactLogin.js";
  import {goto } from "$app/navigation";

  async function clickConnection() {
    try {
      await doLogin(email, mdp);
      goto("/createtodo");
    } catch (error) {
      alert("une erreur a été rencontrée ");
    }
  }

  let email = "";
  let mdp = "";
</script>

<div class=" bg-zinc-800 h-screen">
  <div class="navbar bg-zinc-800">
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost normal-case text-xl">To do list</a>
    </div>
    <div class="navbar-center secondary lg:flex">
      <strong>Sign in</strong>
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
          <li><a href="/signin">Log in </a></li>
          <li><a href="/signup">Sign Up </a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-4 gap-0 h-screen">
    <!-- colonne de Mélenchon -->
    <div class="bg-zinc-500" />
    <!-- colonne de Macron -->
    <div class="bg-zinc-600 col-span-2">
      <div
        class="container py-10 px-10 mx-0 min-w-full grid place-items-center"
      >
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
        <div
          class="container py-10 px-10 mx-0 min-w-full grid place-items-center"
        >
          <button class="btn" on:click={clickConnection}>Connexion</button>
        </div>
      </div>
    </div>
    <!-- colonne de le Pen-->
    <div class="bg-zinc-700" />
  </div>
</div>
