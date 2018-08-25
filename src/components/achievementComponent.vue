<template>
    <div>
        <ul class="list-group m-1">
            <li @click="description =!description" class="list-group-item d-flex justify-content-between align-items-center">
                <img src="" class="rounded float-left" alt="10X10">
                Linie 10x10
                <span class="badge badge-primary badge-pill">100</span>
            </li>
            <div v-show="description">
                Fahre 10 Stationen mit der Linie 10. <br>
            </div>
            <li @click="description1 =!description1" class="list-group-item d-flex justify-content-between align-items-center">
                <img src="" class="rounded float-left" alt="10km">
                10km Fahren
                <span class="badge badge-primary badge-pill">500</span>
            </li>
            <div v-show="description1">
                Fahre 10km im berner öV Netz. <br>
            </div>
            <li @click="description2 =!description2" class="list-group-item d-flex justify-content-between align-items-center">
                <img src="" class="rounded float-left" alt="D.Tram">
                Dampftram Challenge
                <span class="badge badge-primary badge-pill">1000</span>
            </li>
            <div v-show="description2">
                Fahre mindestens eine Stunde im Dampftram. <br>
            </div>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <b>TOTAL</b>
                <span class="badge badge-success badge-pill">1600</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'achievement-component',
  data () {
    return {
        description: false,
        description1: false,
        description2: false
    }
  }
}
</script>

<style scoped>

</style>
