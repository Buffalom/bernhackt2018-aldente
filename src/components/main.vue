<template>
  <div class="main">
    <ul class="nav nav-pills" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="map-tab" data-toggle="tab" href="#mapContainer" role="tab" aria-controls="map" aria-selected="true">MAP</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="challenge-tab" data-toggle="tab" href="#challenge" role="tab" aria-controls="challenge" aria-selected="false">CHALLENGE</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="mapContainer" role="tabpanel" aria-labelledby="map-tab">
        <map-component></map-component>
      </div>
      <div class="tab-pane fade" id="challenge" role="tabpanel" aria-labelledby="challenge-tab">
        <challenge-component></challenge-component>
      </div>
    </div>
  </div>
</template>

<script>
import MapComponent from './mapComponent.vue'
import ChallengeComponent from './challengeComponent.vue'

export default {
  name: 'Main',
  data () {
    return {
    }
  },
  components: {
    MapComponent,
    ChallengeComponent
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";

.main{
  margin-top: 0;
} 

.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    background-color: $primary;
    border-radius: 0;
}

.nav-item {
    flex: 1;
}

#mapContainer {
  height: 80vh;
}
</style>
