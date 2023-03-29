<script>
  let todos = [
    { done: false, text: 'work'}
  ];

  function add() {
    todos = todos.concat({ done: false, text: '' });
  }

  function clear() {
    todos = todos.filter(t => !t.done);
  }

  function signIn() {
    // Ajouter le code pour connecter l'utilisateur ici
    alert('You clicked Sign in');
  }

  $: remaining = todos.filter(t => !t.done).length;
</script>

<main>
  <h1>Todos</h1>
  <div>
    <button on:click={() => alert('You clicked Log in')}>
      Log in
    </button>

    <button on:click={signIn}>
      Sign in
    </button>
  </div>

  {#each todos as todo}
    <div class:done={todo.done}>
      <input type=checkbox bind:checked={todo.done}>
      <input placeholder="What needs to be done?" bind:value={todo.text}>
    </div>
  {/each}

  <p>{remaining} remaining</p>

  <div>
    <button on:click={add}>Add new</button>
    <button on:click={clear}>Clear completed</button>
  </div>
</main><script>
  let todos = [
    { done: false, text: 'work'}
  ];

  function add() {
    todos = todos.concat({ done: false, text: '' });
  }

  function clear() {
    todos = todos.filter(t => !t.done);
  }

  function signIn() {
    // Ajouter le code pour connecter l'utilisateur ici
    alert('You clicked Sign in');
  }

  $: remaining = todos.filter(t => !t.done).length;
</script>

<main>
  <h1>Todos</h1>
  <div>
    <button on:click={() => alert('You clicked Log in')}>
      Log in
    </button>

    <button on:click={signIn}>
      Sign in
    </button>
  </div>

  {#each todos as todo}
    <div class:done={todo.done}>
      <input type=checkbox bind:checked={todo.done}>
      <input placeholder="What needs to be done?" bind:value={todo.text}>
    </div>
  {/each}

  <p>{remaining} remaining</p>

  <div>
    <button on:click={add}>Add new</button>
    <button on:click={clear}>Clear completed</button>
  </div>
</main>