<script>
	import calendarize from 'calendarize';
	
	let dateCalendar = new Date();
	export let year = dateCalendar.getFullYear();
	export let month = dateCalendar.getMonth(); 
	export let offset = 1; // Monday le 1er jour
	export let today = dateCalendar.getDate(); // Date
	
	export let labels = [ 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	
	$: today_month = today && dateCalendar.getMonth();
	$: today_year = today && dateCalendar.getFullYear();
	$: today_day = today && dateCalendar.getDate();
	
	let prev = calendarize(new Date(year, month-1), offset);
	let current = calendarize(new Date(year, month), offset);
	let next = calendarize(new Date(year, month+1), offset);
	
	function toPrev() {
		[current, next] = [prev, current];
		
		if (--month < 0) {
			month = 11;
			year--;
		}
		
		prev = calendarize(new Date(year, month-1), offset);
	}
	
	function toNext() {
		[prev, current] = [current, next];
		
		if (++month > 11) {
			month = 0;
			year++;
		}
		
		next = calendarize(new Date(year, month+1), offset);
	}
	
	function isToday(day) {
		return today && today_year === year && today_month === month && today_day === day;
	}
	
</script>

<div class="flex items-center justify-center mb-8">
	<button class="btn btn-link" on:click={toPrev}>	&#8592</button>
	<h4 class="text-lg font-semibold">{months[month]} {year}</h4>
	<button class="btn btn-link" on:click={toNext}>	 &#8594 </button>
</div>

<div class="grid grid-cols-7 gap-4 text-center">
	{#each labels as txt, idx (txt)}
		<span class="text-xs font-semibold text-gray-500 uppercase">{ labels[(idx + offset) % 7] }</span>
	{/each}

	{#each { length:6 } as w,posLigne (posLigne)}
		{#if current[posLigne]}
			{#each { length:7 } as d,posColonne (posColonne)}
				{#if current[posLigne][posColonne] != 0}
                    <button class={isToday(current[posLigne][posColonne])?"btn btn-primary":"btn btn-accent "}>	{ current[posLigne][posColonne] }</button>
				{:else if (posLigne < 1)}
					<span class="text-lg opacity-50">{ prev[prev.length - 1][posColonne] }</span>
				{:else}
					<span class="text-lg opacity-50">{ next[0][posColonne] }</span>
				{/if}
			{/each}
		{/if}
	{/each}
</div>
