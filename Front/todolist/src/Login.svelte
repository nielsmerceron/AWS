<script>
    let email = '';
    let password = '';
    
    function handleSubmit() {
      console.log(`Email: ${email}, Password: ${password}`);
    }
  </script>
  
  <style>

    .seConnecter {
      margin-top: 100px;
      font-size: 32px;
    }
    .input-label {
      color: #374151;
      font-weight: 500;
      font-size: 32px;
      margin-bottom: 8px;
    }
  
    .input-field {
      border: 1px solid #e5e7eb;
      padding: 8px 12px;
      font-size: 32px;
      width: 40%;
      border-radius: 8px;
      display: flex; 
    }

    .login {
      background-color: #33FFBB;
      float: right;
      width:60%;
      height:200%;
      border-radius: 16px;
    }

    .image {
      width:35%;
      height:100%;
      float:left;
      margin-top: 150px;
      margin-left: 50px;
      border: 2px solid;
    }
  
    .button {
      background-color: #eba625;
      color: #fff;
      font-weight: 600;
      font-size: 32px;
      border: none;
      border-radius: 8px;
      padding: 12px 24px;
      cursor: pointer;
      margin-bottom: 150px;
      margin-left: 15px;
      margin-top: 60px;
    }

    .imag {
      border: 2px solid;
    }

    .interne {
      margin-left: 70px;
    }
  </style>

  <div class="image">
    <img src="./src/assets/ToDoList.JPG" alt="To do list">
  </div>
  
  <div class="login">
    <div class = "interne">
      <h2 class="seConnecter text-2xl font-bold text-gray-800 mb-8">Se connecter</h2>
    
      <label for="email" class="input-label">Email</label>
      <input type="email" id="email" class="input-field" bind:value={email}><br>
    
      <label for="password" class="input-label">Mot de passe</label> 
      <input type="password" id="password" class="input-field" bind:value={password}> 
      <a href=""> mot de passe oublié !</a>
      
      <button type="button" class="button" on:click={handleSubmit}>Se connecter</button>
    </div>
  </div>
 
  