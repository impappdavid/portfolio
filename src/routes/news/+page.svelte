<script>

</script>

<main>
    <div class="content">
        <div class="newsSection">
            <div class="title">News</div>
        </div>
        <div class="newsContainer">
            <div class="news">
                <div class="tag">
                    <div class="tagContainer">
                        <div class="task" id="tagBox">Tasks</div>
                        <div class="notes" id="tagBox">Notes</div>
                        <div class="project" id="tagBox">Project</div>
                    </div>
                    <div class="postDate">
                        June 11, 2024
                    </div>
                </div>
                <div class="newsTitle">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256"><path fill="#5795d4" d="M220.07 176.94C214.41 167.2 206 139.73 206 104a78 78 0 1 0-156 0c0 35.74-8.42 63.2-14.08 72.94A14 14 0 0 0 48 198h42.48a38 38 0 0 0 75 0H208a14 14 0 0 0 12.06-21.06ZM128 218a26 26 0 0 1-25.29-20h50.58A26 26 0 0 1 128 218m81.71-33a1.9 1.9 0 0 1-1.7 1H48a1.9 1.9 0 0 1-1.7-1a2 2 0 0 1 0-2c7.57-13 15.7-43.31 15.7-79a66 66 0 1 1 132 0c0 35.68 8.14 65.95 15.71 79a2 2 0 0 1 0 2"/></svg>
                    </div>
                    Sample task being processed
                </div>
                <div class="newsalttitle">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
                
                <div class="dropdown">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#989998" d="m212.24 100.24l-80 80a6 6 0 0 1-8.48 0l-80-80a6 6 0 0 1 8.48-8.48L128 167.51l75.76-75.75a6 6 0 0 1 8.48 8.48"/></svg>
                    </div>
                    12 tasks (0/12 completed)
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
        background: #101111; /* color of the tracking area */
    }

    main::-webkit-scrollbar-thumb {
        background-color: #101111; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */
        border: 3px solid rgb(54, 54, 54); /* creates padding around scroll thumb */
    }
    .content {
        width: 600px;
        height: 200px;
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .title {
        font-size: 40px;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 10px;
        animation: loadfromright 1s;
    }
    .newsContainer{
        display: flex;
        flex-direction: column;
        
        animation: loadfromdown 1.5s;
    }
    .news{
        width: 100%;
        min-height: 200px;
        background-color: #0a0a0a;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
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
        gap: 5px;
        color: white;
    }
    #tagBox{
        
        font-size: 13px;
        width: auto;
        padding: 5px;
        aspect-ratio: 4/1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }
    .task{
        background-color: rgba(128, 255, 128, 0.562);
    }
    .icon{
        display: flex;
        align-items: center;
    }
    .notes{
        background-color: #c09f4be3;
    }
    .project{
        background-color: #cb82d4b2;
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
    
    .dropdown{
        padding-top: 15px;
        width: 100%;
        min-height: 30px;
        color: #989998;
        border-top: 1px solid #1b1b1b;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: all .5s;
    }
    .dropdown:hover{
        cursor: pointer;
        color: white;
    }
    @keyframes loadfromright {
        0% {
            opacity: 0;
            transform: translateX(200px);
        }
        100% {
            opacity: 1;
            transform: translateX(0px);
        }
    }
    @keyframes loadfromdown {
        0% {
            opacity: 0;
            transform: translateY(200px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
</style>