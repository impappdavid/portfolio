<script>
</script>

<svelte:head>
    <title>Papp Dávid - Projects</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
    <div class="content">
        <div class="projectsSection">
            <div class="title">Projects</div>
            <div class="projectContainer">
                <div class="project">
                    <div class="left">
                        <img
                            src="https://img.freepik.com/photos-premium/femme-visage-metal-tete-couverte-fils_900775-2333.jpg"
                            alt=""
                        />
                        <div class="infos">
                            <div class="protitle">AI</div>
                            <div class="alttitle">
                                This website gives a minimalist and modern look
                            </div>
                        </div>
                    </div>
                    
                    <div class="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            ><path
                                fill="white"
                                d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                            /></svg
                        >
                    </div>
                </div>
                <div class="project">
                    <div class="left">
                        <img
                            src="https://images.ace.de/bilder/autoclub/polestar-2-heck-licht.jpg"
                            alt=""
                        />
                        <div class="infos">
                            <div class="protitle">Car Rental</div>
                            <div class="alttitle">
                                This website gives a minimalist and modern look
                            </div>
                        </div>
                    </div>
                    <div class="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            ><path
                                fill="white"
                                d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                            /></svg
                        >
                    </div>
                </div>

                <div class="project">
                    <div class="left">
                        <img
                            src="https://www.protagonist.nl/blog/wp-content/uploads/2016/03/webshop.jpg"
                            alt=""
                        />
                        <div class="infos">
                            <div class="protitle">E-commerce</div>
                            <div class="alttitle">
                                This website gives a minimalist and modern look
                            </div>
                        </div>
                    </div>
                    <div class="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 24 24"
                            ><path
                                fill="white"
                                d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                            /></svg
                        >
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
        background: #101111; /* color of the tracking area */
    }

    main::-webkit-scrollbar-thumb {
        background-color: #101111; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */
        border: 3px solid rgb(54, 54, 54); /* creates padding around scroll thumb */
    }
    .content {
        width: 800px;
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
    .projectsSection {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: #989998;
        line-height: 1.7;
    }
    .projectContainer {
        display: flex;
        flex-direction: column;
        animation: loadfromdown 1.5s;
    }
    .project {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: auto;
        border-top: 1px solid rgb(80, 82, 80);
        padding: 10px;
        transition: all 0.5s;
    }
    .project:hover {
        cursor: pointer;
        border-top: 1px solid rgb(255, 255, 255);
        background-color: rgba(82, 80, 80, 0.116);
    }
    .left {
        display: flex;
        align-items: center;
    }
    .project:hover .icon svg {
        transform: rotate(-50deg);
    }
    
    img {
        width: 80px;
        height: 80px;
        border-radius: 10px;
    }
    .infos {
        padding-left: 20px;
        display: flex;
        flex-direction: column;
    }
    .protitle {
        font-size: 25px;
        color: white;
        
    }
    .alttitle {
        font-size: 13px;
    }

    .icon {
        display: flex;
        align-items: center;
        padding-right: 10px;
    }
    svg {
        transition: all 0.5s;
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
