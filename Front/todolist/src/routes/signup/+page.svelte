<script>
  import {
    verificationemail,
    verificationmdp,
    verificationpseudo,
    mdp1equalmdp2,
  } from "./validate";
  import { doSign } from "./interac";
  import {goto } from "$app/navigation";


  async function clickConnection() {
    try {
      await doSign(pseudo, email, mdp1);
      goto("/");
    } catch (error) {
      alert("une erreur a été rencontrée ");
    }
  }

  let email = "";
  let mdp1 = "";
  let mdp2 = "";
  let pseudo = "";
</script>

<div class=" bg-zinc-800 h-screen">
  <div class="navbar bg-zinc-800">
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost normal-case text-xl">To do list</a>
    </div>
    <div class="navbar-center secondary lg:flex">
      <strong>Sign up</strong>
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
    <!-- colonne de gauche -->
    <div class="bg-zinc-500"></div>
    <!-- colonne du centre -->
    <div class="bg-zinc-600 col-span-2">
      <div
        class="container py-10 px-10 mx-0 min-w-full grid place-items-center"
      >
        <div
          class="container py-10 px-10 mx-0 min-w-full grid place-items-center"
        >
          <div class="form-control">
            <label class="label" for="pseudo-input">
              <span class="label-text">Pseudo</span>
            </label>
            <label class="input-group">
              <span>Pseudo</span>
              <input
                class="input input-bordered"
                type="text"
                bind:value={pseudo}
                class:field-danger={!verificationpseudo(pseudo)}
                class:field-success={verificationpseudo(pseudo)}
                id="pseudo-input"
              />
            </label>
            {#if !verificationpseudo(pseudo)}
              <span class="validation-hint"> PSEUDO INVALID</span>
            {/if}
          </div>
          <div class="form-control">
            <label class="label" for="email-input">
              <span class="label-text">Email</span>
            </label>
            <label class="input-group">
              <span>Email</span>
              <input
                class="input input-bordered"
                type="email"
                bind:value={email}
                class:field-danger={!verificationemail(email)}
                class:field-success={verificationemail(email)}
                id="email-input"
              />
            </label>
            {#if !verificationemail(email)}
              <span class="validation-hint"> ADRESSE MAIL INVALID </span>
            {/if}
          </div>
          <div class="form-control">
            <label class="label" for="password-input">
              <span class="label-text">Mot de passe</span>
            </label>
            <label class="input-group">
              <span>Mot de passe</span>
              <input
                class="input input-bordered"
                type="password"
                bind:value={mdp1}
                class:field-danger={!verificationmdp(mdp1)}
                class:field-success={verificationmdp(mdp1)}
                id="password-input"
              />
            </label>
            {#if !verificationmdp(mdp1)}
              <span class="validation-hint"> MOT DE PASSE INVALID</span>
            {/if}
          </div>
          <div class="form-control">
            <label class="label" for="password-input">
              <span class="label-text">Mot de passe </span>
            </label>
            <label class="input-group">
              <span> Réécrivez votre mot de passe </span>
              <input
                class="input input-bordered"
                type="password"
                bind:value={mdp2}
                class:field-danger={!mdp1equalmdp2(mdp1, mdp2)}
                class:field-success={mdp1equalmdp2(mdp1, mdp2)}
                id="password-input"
              />
            </label>
            {#if !mdp1equalmdp2(mdp1, mdp2)}
              <span class="validation-hint"> MOT DE PASSE NON ÉGAUX</span>
            {/if}
          </div>
          <div
            class="container py-10 px-10 mx-0 min-w-full grid place-items-center"
          >
            <button
              class="btn"
              on:click={clickConnection}
              disabled={!(
                verificationemail(email) &&
                verificationmdp(mdp1) &&
                verificationpseudo(pseudo) &&
                mdp1equalmdp2(mdp1, mdp2)
              )}
              id="bconfirmation">Validez votre inscription</button
            >
          </div>
        </div>
      </div>
    </div>
    <!-- colonne de droite -->
    <div class="bg-zinc-700"></div>
  </div>
</div>
