<template>
    <div>
      <div class="card m-2">
        <div class="card-body">
          <h5 class="card-title">Ostkürvler Challenge</h5>
          <p class="card-text">Fahre innerhalb von 7 Tagen 5 Mal mit dem YB-Tram. <br>
            (Tipp: benutze die Karte um das YB-Tram zu lokalisieren.)
          </p>
          <button type="button" class="btn btn-success">Start</button>
        </div>
      </div>

      <div class="card m-2">
        <div class="card-body">
          <h5 class="card-title">1 Mio Meter Challenge</h5>
          <p class="card-text">Fahre 1000km im Berner öV Netz.</p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <button type="button" class="btn btn-warning m-2">Abbrechen</button>
        </div>
      </div>

      <div class="card m-2">
        <div class="card-body">
          <h5 class="card-title">Dampftram Challenge</h5>
          <p class="card-text">Fahre mindestens eine Stunde im Dampftram. <br>
            (Tipp: benutze die Karte um das Dampftram zu lokalisieren.)
          </p>
          <button type="button" class="btn btn-info" @click="toggleResults">Resultate</button>
        </div>
        <div class="card-body" v-show="toggleResult">
          <table class="table">
            <tr>
              <th scope="col">Datum</th>
              <td>26. August 2018</td>
            </tr>
            <tr>
              <th scope="col">Station Start</th>
              <td>Guisanplatz</td>
            </tr>
            <tr>
              <th scope="col">Station Ende</th>
              <td>Bern Bahnhof</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'challenge-component',
  data () {
    return {
      toggleResult: false
    }
  },
  methods: {
    toggleResults(){
      this.toggleResult = !this.toggleResult
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
