<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Papp Dávid - Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<div class="content">
		<div class="welcome">
			<div class="title">Hey there</div>
			<div class="altTitle">My name is Papp Dávid ~ Welcome to my portfolio website.</div>
		</div>
		<div class="latestNews">
			<div class="bigTitle">Latest News</div>
			<div class="boxContainer">
				<div class="newsBox">
					<div class="newsTitle">Title</div>
					<div class="newsContent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
				</div>
				<div class="newsBox">
					<div class="newsTitle">Title</div>
					<div class="newsContent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
				</div>
				<div class="newsBox">
					<div class="newsTitle">Title</div>
					<div class="newsContent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
				</div>
			</div>
		</div>
		<div class="learningNow">
			<div class="bigTitle">Learning Now</div>
			<div class="boxContainer">
				<div class="learnBox">
					<div class="littleBox">
						<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="white"><path d="M16.769 3H8.23c-2.163 0-3.245 0-3.84.709s-.421 1.794-.077 3.965l1.375 8.661c.297 1.87.727 2.431 2.493 3.121l2.894 1.131c.704.275 1.056.413 1.424.413s.72-.138 1.424-.413l2.894-1.13c1.766-.69 2.196-1.251 2.493-3.122l1.375-8.661c.344-2.17.517-3.256-.078-3.965C20.015 3 18.933 3 16.769 3"/><path d="M15.5 8h-4.973c-.908 0-1.091.189-1.01 1.093l.181 2.007c.07.762.244.914 1.01.914h3.155c.925 0 1.109.194 1.008 1.112l-.17 1.536c-.068.618-.087.642-.681.842l-1.235.415c-.323.108-.328.108-.651 0l-1.374-.462c-.37-.124-.493-.275-.56-.645"/></g></svg>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</main>


<style>
	main{
		width: 100%;
		min-height: 95vh;
		background-color: #101111;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		overflow-y:hidden;
	}
	.content{
		width: 1200px;
		height: 200px;
		margin-top: 70px;
		display: flex;
		flex-direction: column;
		gap:70px;
	}
	.welcome{
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.title{
		font-size: 90px;
		color: white;
	}
	.altTitle{
		font-size: 15px;
		color: rgb(82, 80, 80);
	}
	.latestNews{
		margin-top: 20px;
	}
	.bigTitle{
		font-size: 20px;
		color: white;
	}
	.boxContainer{
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		margin-top: 20px;
	}
	.newsBox{
		width: 350px;
		height: 150px;
		background-color: rgb(32, 32, 32);
		border-radius: 10px;
		padding: 15px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		
	}
	.learnBox{
		width: 200px;
		height: 200px;
		background-color: rgb(32, 32, 32);
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.newsTitle{
		font-size: 25px;
		color: white;
	}
	.newsContent{
		font-size: 15px;
		color: #979797;
	}
	.littleBox{
		background-color: #f06529;
		border-radius: 10px;
		width: 100px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 1s;
	}
	.learnBox:hover .littleBox{
		cursor: pointer;
		transform: rotate(360deg);
	}
</style>
