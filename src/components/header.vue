<template>
  <div>
    <nav v-click-outside="collapseNav" class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" tag="a" to="/">
            <img src="../assets/img/bernmobil_logo.png">
        </router-link>

        <button @click="showNav = !showNav" class="navbar-toggler ml-auto" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link @click.native="collapseNav" tag="li" to="/">
                        <a class="nav-link">Home</a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link @click.native="collapseNav" tag="li" to="/levels">
                        <a class="nav-link">Achievements</a>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
    name: 'header-component',
    data () {
        return {
            showNav: false
        }
    },
    methods: {
        collapseNav () {
            this.showNav = false
        }
    },
    watch: {
        showNav () {
            $('#navbarSupportedContent').collapse(this.showNav ? 'show' : 'hide')
        }
    },
    directives: {
        ClickOutside
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
