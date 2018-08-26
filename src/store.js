import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stops: [],
    vehicles: [],
    achievements: [],
    closestStop: {}
  },
  mutations: {
    addStop (state, stop) {
      state.stops.push(stop)
    },
    setClosestStop(state, stop) {
      state.closestStop = stop;
    },
    addVehicle (state, vehicle) {
      state.vehicles.push(vehicle)
    },
    addAchievement (state, achievement) {
      state.achievements.push(achievement)
    }
  },
  actions: {
    fetchStops (context, options) {
      axios.get(`http://localhost:3000/stops?lat=${options.lat}&lon=${options.lon}&rad=${options.rad}`)
        .then(response => {
          response.data.stops.forEach(stop => {
            stop.type = 'marker'
            stop.leafletObject = L.marker([ stop.latitude, stop.longitude ]).bindPopup(stop.name)
            context.commit('addStop', stop)
          })
        })
    },
    fetchClosestStop (context, options) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/stops?lat=${options.lat}&lon=${options.lon}`)
          .then(response => {
            response.data.stops.forEach(stop => {
              stop.type = 'marker'
              stop.leafletObject = L.marker([ stop.latitude, stop.longitude ]).bindPopup(stop.name)
              context.commit('setClosestStop', stop)
              resolve(stop)
            })
          })
      })
    },
    fetchVehicles (context, options) {
      axios.get(`http://localhost:3000/vehicles?lat=${options.lat}&lon=${options.lon}&rad=${options.rad}`)
        .then(response => {
          let sum = 0
          response.data.vehicles.forEach(vehicle => {
            vehicle.type = 'marker'
            let vehicleIcon = L.icon({
              iconUrl: 'https://www.shareicon.net/download/2016/06/11/586702_tram_512x512.png',
              iconSize: L.point(30, 30),
              iconAnchor: L.point(15, 15)
            })
            vehicle.leafletObject = L.marker([ vehicle.latitude, vehicle.longitude ], { icon: vehicleIcon })
            context.commit('addVehicle', vehicle)
            sum += vehicle.latitude + vehicle.longitude
          })
          console.log('VEHICLE POSITION CHECKSUM:', sum)
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
    vehicles: state => state.vehicles,
    achievements: state => state.achievements,
    closestStop: state => state.closestStop
  }
})
