<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";

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
                
                
                <ProjectCard projectThumbnailUrl="https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1707905204/fom-website/2023/Mercedes/W15%20launch/Mercedes-AMG%20W15%20E%20PERFORMANCE%20-%20George%20Russell%20-%20Front%20Quarter.jpg.transform/9col/image.jpg" projectName="AI"  projectDescription="This website gives a minimalist and modern look"/>
                <ProjectCard projectThumbnailUrl="https://images.ace.de/bilder/autoclub/polestar-2-heck-licht.jpg" projectName="Car Rental"  projectDescription="This website gives a minimalist and modern look"/>
                <ProjectCard projectThumbnailUrl="https://www.protagonist.nl/blog/wp-content/uploads/2016/03/webshop.jpg" projectName="E-commerce"  projectDescription="This website gives a minimalist and modern look"/>
                
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
        width: 700px;
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
        gap: 20px;
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
