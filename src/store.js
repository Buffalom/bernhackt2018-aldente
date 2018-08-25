import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stops: []
  },
  mutations: {
    addStop (state, stop) {
      state.stops.push(stop)
    }
  },
  actions: {
    fetchStops (context) {
      axios.get('http://localhost:3000/stops')
        .then(response => {
          response.data.stops.forEach(stop => {
            stop.type = 'marker'
            console.log([ stop.latitude, stop.longitude ])
            stop.leafletObject = L.marker([ stop.latitude, stop.longitude ]).bindPopup(
              stop.name
            )
            context.commit('addStop', stop)
          })
        })
    }
  },
  getters: {
    stops: state => state.stops
  }
})
