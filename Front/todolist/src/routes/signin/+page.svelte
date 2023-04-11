<script>
  import {
    verificationemail,
    verificationmdp,
    verificationpseudo,
    mdp1equalmdp2,
  } from "../signin/validate";
  import {doSign} from "../signin/interac"
    import { element } from "svelte/internal";



  let emails = "";
  let mdp1 = "";
  let mdp2 = "";
  let pseudo = "";

</script>

<html data-theme="light" lang="fr" />

<div class="navbar">
  <div class="navbar-start">
    <a class=" normal-case text-xl">To do list</a>
  </div>
  <div class="navbar-center secondary lg:flex">Sign in process</div>
  <div class="navbar-end">
    <a class="btn" href="/">Home</a>
  </div>
</div>

<div class="container py-10 px-10 mx-0 min-w-full grid place-items-center">
  <div class="form-control">
    <label class="label">
      <span class="label-text">Pseudo</span>
    </label>
    <label class="input-group">
      <span>Pseudo</span>
      <input
        class="input input-bordered"
        type="text"
        bind:value={pseudo}
        placeholder="Pseudo"
        class:field-danger={!verificationpseudo(pseudo)}
        class:field-success={verificationpseudo(pseudo)}
      />
    </label>
    {#if !verificationpseudo(pseudo)}
      <span class="validation-hint"> PSEUDO INVALID</span>
    {/if}
  </div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Email</span>
    </label>
    <label class="input-group">
      <span>Email</span>
      <input
        class="input input-bordered"
        type="text"
        bind:value={emails}
        placeholder="Email"
        class:field-danger={!verificationemail(emails)}
        class:field-success={verificationemail(emails)}
      />
    </label>
    {#if !verificationemail(emails)}
      <span class="validation-hint"> ADRESSE MAIL INVALID </span>
    {/if}
  </div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Mot de passe</span>
    </label>
    <label class="input-group">
      <span>Mot de passe</span>
      <input
        class="input input-bordered"
        type="text"
        bind:value={mdp1}
        placeholder="Mot de passe"
        class:field-danger={!verificationmdp(mdp1)}
        class:field-success={verificationmdp(mdp1)}
      />
    </label>
    {#if !verificationmdp(mdp1)}
      <span class="validation-hint"> MOT DE PASSE INVALID</span>
    {/if}
  </div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Mot de passe </span>
    </label>
    <label class="input-group">
      <span> Réécrivez votre mot de passe </span>
      <input
        class="input input-bordered"
        type="text"
        bind:value={mdp2}
        placeholder="Mot de passe "
        class:field-danger={!mdp1equalmdp2(mdp1, mdp2)}
        class:field-success={mdp1equalmdp2(mdp1, mdp2)}
      />
    </label>
    {#if !mdp1equalmdp2(mdp1, mdp2)}
      <span class="validation-hint"> MOT DE PASSE NON 2GAUX</span>
    {/if}
  </div>
  <div class="container py-10 px-10 mx-0 min-w-full grid place-items-center">
    <button
      class="btn"
      on:click={()=>alert(doSign(pseudo,emails,mdp1))}
      disabled={!(verificationemail(emails) &&
        verificationmdp(mdp1) &&
        verificationpseudo(pseudo) &&
        mdp1equalmdp2(mdp1, mdp2))} id="bconfirmation">Validez votre inscription</button
    >
  </div>
</div>
