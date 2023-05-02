<script>
  import { doLogin } from "./interactLogin.js";
  import { element } from "svelte/internal";
  import { navigate } from 'svelte-routing';


  async function clickConnection(){
    try {
    const result = await doLogin(email, mdp);
    () => console.log(doLogin(email, mdp));
    navigate('/');
    location.reload();

  } catch (error) {
    () => console.log(doLogin(email, mdp));
  }
  }

  let email = "";
  let mdp = "";
</script>

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
    on:click={clickConnection}
    >Connexion</button>
  </div>
</div>
