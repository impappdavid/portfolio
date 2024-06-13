<script>
import { page } from '$app/stores';  

let projectName = $page.params.id;

let projects = [
    {
        name: "car-rental",
        title: "Car Rental",
    },
    {
        name: "ai",
        title: "AI",
    },
    
];
let name = "";

for (let i = 0; i < projects.length; i++) {
    if(projects[i].name == projectName){
        console.log(projects[i].name)
        name = projects[i].name;
    }
  }


</script>

<main>
    <div class="content">
        <div class="projectsSection">
            <div class="title">Car-Rental</div>
            <div class="images">
            <img class="widthImage" src="https://i.pinimg.com/736x/1c/d2/5f/1cd25f68d82c3662027539968601c254.jpg" alt="car">
            <div class="two-image">
                <img src="https://images.ctfassets.net/1fvlg6xqnm65/4eR2KJaj3ra3iiftHKpn6C/412204d47bc616b3d7f833334a4bd8bd/Side_LH_header.jpg?w=3840&q=75&fm=webp" alt="car">
                <img src="https://images.ctfassets.net/1fvlg6xqnm65/4eR2KJaj3ra3iiftHKpn6C/412204d47bc616b3d7f833334a4bd8bd/Side_LH_header.jpg?w=3840&q=75&fm=webp" alt="car">
            
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
    .projectsSection {
        font-size: 15px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: #989998;
        line-height: 1.7;
        
    }
    .title {
        font-size: 40px;
        color: white;
        display: flex;
        flex-direction: column;
        gap: 10px;
        animation: loadfromright 1s;
    }
    img{
        border-radius: 10px;
    }
    .widthImage{
        width: 100%;
    }
    .images{
        max-width: 600px;
    }
    .two-image{
        display: flex;
        max-width: 600px;
        gap: 10px;
    }
    .two-image img{
        width: 295px;
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
    
</style>