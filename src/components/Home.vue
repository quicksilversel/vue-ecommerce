<template>
    <div class="home">
        <!-- navigation -->
        <nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href=#>Services</a>
                </li>    
                <li class="nav-item">
                    <a class="nav-link" href="#">How it works</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>  
        </nav>
        <!-- contents -->
        <div>
            <div class="row" id="first-section">
                <div class="col-lg-8 col-sm-12">
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Start now</button>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <img src='../assets/sample1.jpg'>
                </div>
            </div>
            <div class="row" id="second-section">
                <div class="col-lg-3 col-xs-12">
                    <h1>our services</h1>
                </div>
                <div class="col-lg-3 col-xs-12">
                    <p>service name</p>
                    <p>service name</p>
                </div>
                <div class="col-lg-3 col-xs-12">
                    <p>service name</p>
                    <p>service name</p>
                </div>
                <div class="col-lg-3 col-xs-12">
                    <p>service name</p>
                    <p>service name</p>
                </div>
            </div>
            <div class="row" id="third-section">
                <div class="col">
                    <h1 class="text-center">reviews</h1>
                </div>
            </div>
            <div id="footer">
                <div class="row">
                    <div class="col">
                        <h1 class="text-center">Studio</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2 col-xs-4">
                        <p class="text-center">terms of service</p>
                    </div>
                    <div class="col-lg-2 col-xs-4">
                        <p class="text-center">app</p>
                    </div>
                    <div class="col-lg-2 col-xs-4">
                        <p class="text-center">contact us</p>
                    </div>
                    <div class="col-lg-2 col-xs-4">
                        <p class="text-center">newsletter</p>
                    </div>
                    <div class="col-lg-2 col-xs-4">
                        <p class="text-center">follow us</p>
                    </div>
                    <div class="col-lg-2 col-xs-4">
                        <p class="text-center">privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>

#first-section {
    padding-top:5%;
    padding-bottom:5%;
    align-content: center;
    justify-content: center;
}

#second-section {
    background-color: #e7e7e7;
    padding-top:5%;
    padding-bottom:5%;
}

#third-section {
    padding-top:5%;
    padding-bottom:5%;
}

#footer {
    background-color: black;
    color: white;
    padding-top:5%;
    padding-bottom:5%;
}

img {
    width: 100%;
    height: auto;
    object-fit: cover;
    padding:7%;
}

</style>