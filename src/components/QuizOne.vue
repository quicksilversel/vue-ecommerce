<template>
    <div class="QuizOne">
        <!-- navigation -->
        <nav class="navbar navbar-expand-sm navbar-light fixed-top">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href=#>Menu</a>
                </li>    
            </ul>  
        </nav>
        <!-- contents -->
        <div class="home-wrapper">
             <h1 class="question">Question 1</h1>
             <div class="answer"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuizOne'
}
</script>

<style scoped>

.QuizOne {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
    background: transparent;
}

</style>