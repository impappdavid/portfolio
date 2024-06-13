<script>
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
	import LearnBox from "../lib/components/LearnBox.svelte";
</script>

<svelte:head>
	<title>Papp Dávid - Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<div class="content">
		<div class="welcome">
			<div class="title">Hey there</div>
			<div class="altTitle">
				My name is Papp Dávid ~ Welcome to my portfolio website.
			</div>
		</div>
		<div class="latestNews">
			<div class="sectionTitle">
			<div class="bigTitle">News</div>
			<a href="" class="viewall">View all</a>
			</div>
			<div class="boxContainer">
				<div class="newsBox">
					<div class="newsTexts">
						<div class="newsTitle">
							Starting the car rental website project
						</div>
					</div>
					<div class="newsTexts">
						<div class="newsContent">Jun 2024</div>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg>
					</div>
				</div>
				<div class="newsBox">
					<div class="newsTexts">
						<div class="newsTitle">
							Starting the online webshop project
						</div>
					</div>
					<div class="newsTexts">
						<div class="newsContent">June 9,2024</div>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg>
					</div>
				</div>
				<div class="newsBox">
					<div class="newsTexts">
						<div class="newsTitle">
							Starting a new project for an AI website
						</div>
					</div>
					<div class="newsTexts">
						<div class="newsContent">June 9,2024</div>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg>
					</div>
				</div>
			</div>
		</div>

		<div class="learningNow">
			<div class="sectionTitle">
				<div class="bigTitle">Learning</div>
				<a href="" class="viewall">View all</a>
				</div>
			<div class="learnboxContainer">
				<div class="activelearnBox">
					<div class="leftSide">
						<div class="iconTitle">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="white"><path d="M16.769 3H8.23c-2.163 0-3.245 0-3.84.709s-.421 1.794-.077 3.965l1.375 8.661c.297 1.87.727 2.431 2.493 3.121l2.894 1.131c.704.275 1.056.413 1.424.413s.72-.138 1.424-.413l2.894-1.13c1.766-.69 2.196-1.251 2.493-3.122l1.375-8.661c.344-2.17.517-3.256-.078-3.965C20.015 3 18.933 3 16.769 3"/><path d="M15.5 8h-4.973c-.908 0-1.091.189-1.01 1.093l.181 2.007c.07.762.244.914 1.01.914h3.155c.925 0 1.109.194 1.008 1.112l-.17 1.536c-.068.618-.087.642-.681.842l-1.235.415c-.323.108-.328.108-.651 0l-1.374-.462c-.37-.124-.493-.275-.56-.645"/></g></svg>
							<span>Title</span>
						</div>
						<div class="alttitle">
							Jun 2024
						</div>
					</div>
					<div class="openIcon">
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><path fill="white" fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/></svg>
					</div>
				</div>
				<LearnBox svg='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="white"><path d="M8 12C8 6.477 9.79 2 12 2s4 4.477 4 10s-1.79 10-4 10s-4-4.477-4-10"/><path d="M9.975 8.62c4.842-2.762 9.674-3.45 10.792-1.537s-1.9 5.703-6.742 8.464s-9.674 3.45-10.792 1.536c-1.118-1.913 1.9-5.702 6.742-8.464"/><path d="M14.025 8.62c4.842 2.76 7.86 6.55 6.742 8.463c-1.118 1.914-5.95 1.226-10.792-1.536s-7.86-6.55-6.742-8.464C4.35 5.17 9.183 5.858 14.025 8.62"/><path d="M13.5 12a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"/></g></svg>' title="Test" alttitle="Next up"/>
				<LearnBox svg='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="white"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/><path d="M11.732 12v4A2 2 0 0 1 8 17m10.467-4a2 2 0 0 0-1.733-1h-.5a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-.5a2 2 0 0 1-1.732-1"/></g></svg>' title="Test" alttitle="Next up"/>
				<LearnBox svg='<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M12 4c-4.879 0-9 4.121-9 9s4.121 9 9 9s9-4.121 9-9s-4.121-9-9-9m0 16c-3.794 0-7-3.206-7-7s3.206-7 7-7s7 3.206 7 7s-3.206 7-7 7"/><path fill="white" d="M13 12V8h-2v6h6v-2zm4.284-8.293l1.412-1.416l3.01 3l-1.413 1.417zm-10.586 0l-2.99 2.999L2.29 5.294l2.99-3z"/></svg>' title="Test" alttitle="Next up"/>
			</div>
		</div>


		<div class="projectSection" >
			<div class="sectionTitle">
				<div class="bigTitle">My Favorite Projects</div>
				<a href="" class="viewall">View all</a>
				</div>
			<div class="projectboxContainer">
				<div class="projectBox">
					<div class="front">
						<div class="projectNumber">01</div>
						<div class="projectTitle">Car Rental</div>
					</div>
					<div class="middle">
						
					</div>
					<div class="end">
						<div class="icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg>
						</div>
					</div>
					
				</div>

				<div class="projectBox">
					<div class="front">
						<div class="projectNumber">02</div>
						<div class="projectTitle">Online webshop</div>
					</div>
					<div class="middle">
						
					</div>
					<div class="end">
						<div class="icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg>
						</div>
					</div>
					
				</div>

				<div class="projectBox">
					<div class="front">
						<div class="projectNumber">03</div>
						<div class="projectTitle">Web3 project</div>
					</div>
					<div class="middle">
						
					</div>
					<div class="end">
						<div class="icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg>
						</div>
					</div>
					
				</div>
				<div class="projectBox">
					<div class="front">
						<div class="projectNumber">04</div>
						<div class="projectTitle">Upcoming</div>
					</div>
					<div class="middle">
						
					</div>
					<div class="end">
						<div class="icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		width: 100%;
		min-height: 95vh;
		background-color: #101111;
		
		border-radius: 10px;
		display: flex;
		justify-content: center;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	::selection {
  background: rgba(75, 75, 75, 0.233);
}

	main::-webkit-scrollbar {
  width: 4px;
  border-radius: 5px;
}

main::-webkit-scrollbar-track {
	border-radius: 5px;
  background: #101111;        /* color of the tracking area */
}

main::-webkit-scrollbar-thumb {
  background-color: #101111;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid rgb(54, 54, 54);  /* creates padding around scroll thumb */
}
	a{
		color: #979797;
	}
	.content {
		width: 1200px;
		height: 200px;
		margin-top: 70px;
		display: flex;
		flex-direction: column;
		gap: 70px;
	}
	.welcome {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.title{
		font-size: 90px;
		color: white;
		animation: loadfromright 1s;
	}
	
	.altTitle {
		font-size: 15px;
		color: rgb(82, 80, 80);
		animation: loadfromright 1.5s;
	}
	.latestNews {
		margin-top: 20px;
		animation: loadfromdown 2s;
	}
	.learningNow{
		animation: loadfromdown 2.5s;
	}
	.projectSection{
		animation: loadfromdown 3s;
	}
	.bigTitle {
		font-size: 20px;
		color: white;
	}
	.boxContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 20px;
	}
	.learnboxContainer {
		display: flex;
		flex-wrap: wrap;
		margin-top: 20px;
	}
	.newsBox {
		width: 369px;
		height: 100%;
		
		border-left: 1px solid rgb(80, 82, 80);
		padding: 15px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		transition: all 0.5s;
	}
	.newsBox:hover {
		cursor: pointer;
		background-color:rgba(82, 80, 80, 0.116);
		border-left: 1px solid rgb(255, 255, 255);
	}
	.newsTexts {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
	}
	svg{
		transition: all .5s;
	}
	.newsBox:hover .newsTexts svg{
		transform: rotate(-50deg);
	}
	
	.iconTitle{
		display: flex;
		align-items: center;
		gap: 10px;
		color: white;
		font-weight: bold;
	}
	.alttitle{
		color: rgb(80, 82, 80);
		font-size: 13px;
	}
	.newsTitle {
		font-size: 20px;
		color: white;
	}
	.newsContent {
		font-size: 13px;
		color: #979797;
	}
	.activelearnBox {
		z-index: 0;
		width: 289px;
		height: 80px;
		border-left: 1px solid rgb(55, 87, 59);
		gap: 3px;
		padding-left: 10px;
		background-size: cover;
		background-position: center;
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: all .5s;
	}
	.activelearnBox:hover{
		cursor: pointer;
		background-color:rgba(82, 80, 80, 0.116);
		border-left: 1px solid rgb(0, 255, 34);
	}
	.openIcon{
		min-width: 30px;
		min-height: 30px;
		border-radius: 50%;
		margin-right: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #2c2c2c;
		transition: all .5s;
	}
	.activelearnBox:hover .openIcon{
		
		box-shadow: rgba(255, 255, 255, 0.753) 0px 0px 0px 2px;
		opacity: 0.5;
	}
	.sectionTitle{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #979797;
	}
	.viewall{
		font-size: 13px;
		transition: all .5s;
	}
	.projectboxContainer{
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}
	.projectBox{
		width: 100%;
		min-height: 70px;
		border-top: 1px solid rgb(80, 82, 80);
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: all .5s;
	}
	.projectBox:hover{
		cursor: pointer;
		background-color:rgba(82, 80, 80, 0.116);
		
	}
	.projectBox:hover .projectTitle{
		letter-spacing: .2rem;
		
	}

	
	.front{
		display: flex;
		gap: 20px;
		align-items: center;
		padding-left: 10px;
	}
	.projectNumber{
		font-size: 32px;
		color: #979797;
	}
	.projectTitle{
		font-size: 40px;
		color: white;
		transition: all .5s;
	}
	.middle{
		display: flex;
		align-items: center;
	}
	
	.icon{
		padding-right: 10px;
	}
	.projectBox:hover .icon svg{
		transform: rotate(-50deg);
	}
	
	

	@keyframes loadfromright{
		0%{
			opacity: 0;
			transform: translateX(200px);
		}
		100%{
			opacity: 1;
			transform: translateX(0px);
		}
	}
	@keyframes loadfromdown{
		0%{
			opacity: 0;
			transform: translateY(100px);
		}
		100%{
			opacity: 1;
			transform: translateY(0px);
		}
	}
	
</style>
