<template>
    <div>
        <l-map class="leaflet-container" :zoom='zoom' style="height: 90%" :center='center'>
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        </l-map>
    </div>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
  name: 'map-component',
  components: { LMap, LTileLayer },
  data () {
    return {
        zoom: 15,
        center: {
        lat: '46.81',
        lng: '8.23',
      },
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
  },
  beforeCreate() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.isLoading = false
        this.position = position.coords;
        this.center.lat = position.coords.latitude
        this.center.lng = position.coords.longitude
        console.log(position.coords)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
    @import "../../node_modules/leaflet/dist/leaflet.css";
</style>
