<script>
  function testsignin() {
    var pseudo = document.getElementById("pseudo").value;
    var email = document.getElementById("email").value;
    var mdp1 = document.getElementById("mdpas1").value;
    var mdp2 = document.getElementById("mdpas2").value;
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    let missingChars = [];
    if(!(strongRegex.test(mdp1))){
      if (!/(?=.*[a-z])/.test(mdp1)) {
        missingChars.push('une lettre minuscule');
      }
      if (!/(?=.*[A-Z])/.test(mdp1)) {
        missingChars.push('une lettre majuscule');
      }
      if (!/(?=.*\d)/.test(mdp1)) {
        missingChars.push('un chiffre');
      }
      if (!/(?=.*[@$!%*?&])/.test(mdp1)) {
        missingChars.push('un caractère spécial (@$!%*?&)');
      }
      alert("mot de passe faible il manque " + missingChars);
    } 

    if (mdp1 != mdp2) {
      alert("mot de passe 1 et 2 différent");
    }
    if (!pseudo) {
      alert("pseudo non rentrer");
    }
    if (
      !email.match(
        /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
      )
    ) {
      alert("ce n'est pas une adresse");
    }
  }
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
    <button on:click={testsignin} class="btn">Validez votre inscription</button>
  </div>
</div>
