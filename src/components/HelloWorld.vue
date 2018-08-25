<template>
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="map-tab" data-toggle="tab" href="#map" role="tab" aria-controls="map" aria-selected="true">MAP</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="challenge-tab" data-toggle="tab" href="#challenge" role="tab" aria-controls="challenge" aria-selected="false">CHALLENGE</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="map" role="tabpanel" aria-labelledby="map-tab">
        HERE COMES MAP-COMPONENT
      </div>
      <div class="tab-pane fade" id="challenge" role="tabpanel" aria-labelledby="challenge-tab">
        HERE COMES CHALLENGE-COMPONENT
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<style scoped></style>
