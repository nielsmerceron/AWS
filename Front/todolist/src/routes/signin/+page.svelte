<script>
  import { emailValidator, requiredValidator } from './validators.js'
  import { createFieldValidator } from './validation.js'

</script>

<html data-theme="luxury" lang="fr" />

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
        type="text"
        placeholder="cortex91lespiramides"
        class="input input-bordered"
        id="pseudo"
      />
    </label>
  </div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Email</span>
    </label>
    <label class="input-group">
      <span>Email</span>
      <input
        type="text"
        placeholder="blabla@lala.com"
        class="input input-bordered"
        id="email"
      />
    </label>
  </div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Mot_de_passe</span>
    </label>
    <label class="input-group">
      <span>Mot de passe</span>
      <input
        type="text"
        placeholder=""
        class="input input-bordered"
        id="mdpas1"
      />
    </label>
  </div>
  <div class="form-control">
    <label class="label">
      <span class="label-text">Mot_de_passe_2</span>
    </label>
    <label class="input-group">
      <span> Réécrivez votre mot de passe </span>
      <input
        type="text"
        placeholder=""
        class="input input-bordered"
        id="mdpas2"
      />
    </label>
  </div>
  <div class="container py-10 px-10 mx-0 min-w-full grid place-items-center">
    <button class="btn">Validez votre inscription</button>
  </div>
</div>
