const navbar =() =>{
    return ` <div id="navigationDiv">
    <div id="navContent">
        <!-- Instagram icon -->

        <div id="topDiv">
            <div id="instagramLogoDiv">
                <div id="instagramLogoIcon">
                   <a href="../instagram-clone/index.html">
                       <img src="./allPictures/instagramLogo.png" alt="">
                   </a> 
                    
                </div>
            </div>

        </div>

        <div id="middleDiv">
            <a href="">
            <div id="homeDiv">
                <div id="homeIcon">
                    <i class="fa-solid fa-house"></i>
                    <span>Home</span>
                </div>
            </div>
        </a>

        <a href="">
            <div id="searchDiv">
                <div id="searchIcon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  
                    <span>Search</span>
                    
                </div>
            </div>
        </a>

        <a href="">
            <div id="exploreDiv">
                <div id="exploreIcon">
                    <i class="fa-regular fa-compass"></i>
                    <span>Explore</span>
                </div>
            </div>
        </a>

        <a href="">
            <div id="messageDiv">
                <div id="messageIcon">
                    <i class="fa-brands fa-facebook-messenger"></i>
                    <span>Messeges</span>
                </div>
            </div>
        </a>

        <a href="">
            <div id="notificationDiv">
                <div id="notificationIcon">
                    <i class="fa-regular fa-heart"></i>
                    <span>Notification</span>
                </div>
            </div>
        </a>

        <a href="">
            <div id="createDiv">
                <div id="createIcon">
                    <i class="fa-regular fa-square-plus"></i>
                    <span>Create</span>
                </div>
            </div>
        </div>
    </a>

        <div id="bottomDiv">

            <a href="">
            <div id="burderIconDiv">
                <div id="burgerIcon">
                    <i class="fa-solid fa-bars"></i>
                    <span>More</span>
                </div>
            </div>
        </a>
        </div>
    </div>
</div>
<div id="contentDiv"></div>`
}

export {navbar};