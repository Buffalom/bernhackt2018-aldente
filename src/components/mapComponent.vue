<template>
  <div class="row">
      <div class="col-md-9">
          <div id="map" class="map"></div>
      </div>
      <div class="col-md-3">
        <p class="mt-3"><span class="font-weight-light">Nächste Station:</span> {{ station.name }}</p>
          <div class="form-check" v-for="layer in layers" :key="layer.id">
              <label class="form-check-label">
                  <input class="form-check-input"
                    type="checkbox"
                    v-model="layer.active"
                    @change="layerChanged(layer.id, layer.active)"
                  />
                  {{ layer.name }}
                </label>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "map-component",
  data() {
    return {
      map: null,
      center: {
        lat: "46.94647",
        lng: "7.44427"
      },
      station: this.$store.getters.closestStop,
      tileLayer: null,
      layers: [
        {
          id: 0,
          name: "Haltestellen (Bis 500 Meter)",
          active: false,
          features: this.$store.getters.stops
        },
        {
          id: 1,
          name: "Fahrzeuge (Bis 750 Meter)",
          active: false,
          features: this.$store.getters.vehicles
        }
      ]
    };
  },
  mounted() {
    this.initMap();
    this.locateCenter();
  },
  methods: {
    initMap() {
      this.map = L.map("map").setView([this.center.lat, this.center.lng], 16);
      this.tileLayer = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
        {
          maxZoom: 20,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      );
      this.tileLayer.addTo(this.map);
    },
    layerChanged(layerId, active) {
      const layer = this.layers.find(layer => layer.id === layerId);
      layer.features.forEach(feature => {
        if (active) {
          feature.leafletObject.addTo(this.map);
        } else {
          feature.leafletObject.removeFrom(this.map);
        }
      });
    },
    locateCenter() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.center.lat = position.coords.latitude;
          this.center.lng = position.coords.longitude;
          this.map.setView([this.center.lat, this.center.lng]);
          console.log(position.coords);
          let yourPosMarker = L.circle([ position.coords.latitude, position.coords.longitude ], { radius: 20 }).bindPopup('Deine Position')
          yourPosMarker.addTo(this.map);

          let options = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
          this.$store.dispatch("fetchClosestStop", options)
            .then(stop => {
              this.station = stop
              this.station.leafletObject.options.icon = L.icon({
                iconUrl: 'https://cdn2.iconfinder.com/data/icons/location-map-simplicity/512/rail_station-512.png',
                iconSize: [40, 40],
                iconAnchor: [20, 40],
                popupAnchor: [0, -35]
              });
              this.station.leafletObject.addTo(this.map)
              this.layers[0].features = this.layers[0].features.filter(stop => stop.name !== this.station.name)
            })
        });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.map,
.col-md-9 {
  height: 70vh;
}
</style>
