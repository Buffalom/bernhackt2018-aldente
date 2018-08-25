import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stops: [],
    achievements: []
  },
  mutations: {
    addStop (state, stop) {
      state.stops.push(stop)
    },
    addAchievement (state, achievement) {
      state.achievements.push(achievement)
    }
  },
  actions: {
    fetchStops (context) {
      axios.get('http://localhost:3000/stops')
        .then(response => {
          response.data.stops.forEach(stop => {
            stop.type = 'marker'
            stop.leafletObject = L.marker([ stop.latitude, stop.longitude ]).bindPopup(
              stop.name
            )
            context.commit('addStop', stop)
          })
        })
    },
    fetchAchievements (context) {
      axios.get('http://localhost:3000/challenges')
        .then(response => {
          response.data.challenges.forEach(achievement => {
            console.log(response)
            context.commit('addAchievement', achievement)
          })
        })
    }
  },
  getters: {
    stops: state => state.stops,
    achievements: state => state.achievements
  }
})
