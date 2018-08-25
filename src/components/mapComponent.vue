<template>
    <div>
        <l-map style="height: 90%" :zoom="zoom" :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker :lat-lng="marker"></l-marker>
        </l-map>
    </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: 'map-component',
  components: { LMap, LTileLayer, LMarker },
  data () {
    return {
      zoom:15,
      center: L.latLng(47.413220, -1.219482),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      marker: L.latLng(47.413220, -1.219482),
    }
  }
}
</script>

<style lang='sccs' scoped>
    @import "~leaflet/dist/leaflet.css";
</style>
