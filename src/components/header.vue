<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="../assets/img/bernmobil_logo.png"/>
        </a>

        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Challenges</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Achievements</a>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header-component',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";

.navbar {
    background-color: $primary!important;
}

.navbar-brand {
    flex: 1;

    img {
        display: block;
        height: 1.5rem;
    }
} 

.navbar-toggler {
    border: none;
}
</style>
