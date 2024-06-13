<script>
    import Sidebar from './Sidebar.svelte';
import './styles.css';

</script>

<div class="app">
	
	<main>
		<Sidebar/>
		<slot />
	</main>

	
</div>

<style>
	.app {
		display: flex;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		padding: 10px;
		gap: 10px;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	

	@media (min-width: 480px) {
		
	}
</style>
