<script>

  import Login from "./Login.svelte";
  import 'daisyui'

	let todos = [
		{ done: false, text: 'work'}
	];

	function add() {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter(t => !t.done);
	}

	$: remaining = todos.filter(t => !t.done).length;
</script>
<main>
	<Login />
</main>

