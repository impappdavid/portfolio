<script>
    export let projectThumbnailUrl;
    export let projectName;
    export let projectDescription;
</script>

<div class="news">
    <div class="tag">
        <div class="newsTitle">
            Sample task being processed
        </div>
        <div class="openIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="white" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"/></svg>
        </div>
    </div>
    <img src='{projectThumbnailUrl}' alt="">
    
    <div class="newsalttitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </div>
    <div class="icon">
    <div class="tagContainer">
        <div class="task" id="tagBox">HTML</div>
        <div class="notes" id="tagBox">CSS</div>
        <div class="project" id="tagBox">JS</div>
    </div>
    <div class="postDate">
        June 11, 2024
    </div>
</div>
</div>

<style>
    ::selection {
        background: rgba(75, 75, 75, 0.233);
    }
 .news{
        width: 100%;
        min-height: 200px;
        background-color: #0a0a0a;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: all .5s;
    }
    .tag{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .postDate{
        font-size: 12px;
        color: #989998;
    }
    .tagContainer{
        display: flex;
        gap: 10px;
        color: white;
    }
    #tagBox{
        
        font-size: 11px;
        width: auto;
        padding: 5px;
        aspect-ratio: 6/2;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        border: 1px solid gray;
    }
    
    .icon{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }
   
    
    .newsTitle{
        font-size: 22px;
        color: white;
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .newsalttitle{
        font-size: 15px;
        color: #989998;
        line-height: 1.7;
    }
    img{
        border-radius: 10px;
        filter: grayscale(100);
        transition: all .5s;
    }
    .news:hover{
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.048);
    }
    
svg{
    transition: all .5s;
}
    .news:hover .tag .openIcon svg{
        transform: rotate(-50deg);
    }
    .news:hover img{
        filter: grayscale(0);
    }
</style>