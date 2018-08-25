<template>
  <div class="row">
      <div class="col-md-9">
          <div id="map" class="map"></div>
      </div>
      <div class="col-md-3">
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
      tileLayer: null,
      layers: [
        {
          id: 0,
          name: "Haltestellen",
          active: false,
          features: this.$store.getters.stops
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch('fetchStops') 
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = L.map("map").setView([46.94331, 7.44235], 18);
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
    }
  }
};
</script>

<style lang='scss' scoped>
  .map, .col-md-9 {
    height: 80vh;
  }
</style>
