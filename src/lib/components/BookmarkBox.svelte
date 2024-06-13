<script>
    export let icon;
    export let name;
    export let link;
</script>


<a href="{link}" target="_blank" class="projectBox">
    <div class="front">
        <div class="projectNumber">
            {@html icon}
        </div>
        <div class="projectTitle">{name}</div>
    </div>
    
    <div class="end">
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg>
        </div>
    </div>
    
</a>

<style>
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
		display: flex;
        align-items: center;
		color: #979797;
	}
	.projectTitle{
		font-size: 30px;
		color: white;
		transition: all .5s;
	}
    
	.icon{
		padding-right: 10px;
	}
	.projectBox:hover .icon svg{
		transform: rotate(-50deg);
	}
    svg{
        transition: all .5s;
    }
    a:hover{
        text-decoration: none;
    }

</style>