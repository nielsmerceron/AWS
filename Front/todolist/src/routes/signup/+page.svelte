<script>
  import {
    verificationemail,
    verificationmdp,
    verificationpseudo,
    mdp1equalmdp2,
  } from "./validate";
  import { doSign } from "./interac";
  import { navigate } from "svelte-routing";

  async function clickConnection() {
    try {
      const result = await doSign(pseudo, email, mdp1);
      () => console.log(doSign(pseudo, email, mdp1));
      navigate("/");
      location.reload();
    } catch (error) {
      () => console.log(doSign(pseudo, email, mdp1));
    }
  }

  let email = "";
  let mdp1 = "";
  let mdp2 = "";
  let pseudo = "";
</script>

<div class="container py-10 px-10 mx-0 min-w-full grid place-items-center">
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
      <span class="validation-hint"> MOT DE PASSE NON 2GAUX</span>
    {/if}
  </div>
  <div class="container py-10 px-10 mx-0 min-w-full grid place-items-center">
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
