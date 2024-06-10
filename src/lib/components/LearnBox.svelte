<script>
    export let svg;
    export let title;
    export let alttitle;
</script>
<div class="learnBox">
    <div class="iconTitle">
        {@html svg}
        <span>{title}</span>
    </div>
    <div class="alttitle">
        {alttitle}
    </div>
</div>

<style>
.learnBox {
		z-index: 0;
		width: 280px;
		height: 80px;
		border-left: 1px solid rgb(80, 82, 80);
		padding-left: 10px;
		background-size: cover;
		background-position: center;
		gap: 3px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		transition: all .5s;
	}
	.learnBox:hover{
		cursor: pointer;
		background-color:rgba(82, 80, 80, 0.116);
		border-left: 1px solid white;
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
</style>