<template>
    <div>
      <div class="card m-2">
        <div class="card-body">
          <h5 @click="description = !description" class="card-title">Ostkürvler Challenge</h5>
          <p v-show="description" class="card-text">Fahre innerhalb von 7 Tagen 5 Mal mit dem YB-Tram. <br>
            (Tipp: benutze die Karte um das YB-Tram zu lokalisieren.) <br>
            <i>500 PUNKTE</i>
          </p>
          <div v-if="starting" class="progress">
            <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <button v-show="!starting" type="button" class="btn btn-success" @click="startChallenge">Start</button>
          <button v-if="starting" type="button" class="btn btn-warning m-2">Abbrechen</button>
        </div>
      </div>

      <div class="card m-2">
        <div class="card-body">
          <h5 @click="description2 = !description2" class="card-title">Westside Challenge</h5>
          <p v-show="description2" class="card-text">Fahre vom Bahnhof mit der Line 8 zur Westside.<br>
            <i>100 PUNKTE</i>
          </p>
          <div v-if="starting1" class="progress">
            <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <button v-show="!starting1" type="button" class="btn btn-success" @click="startChallenge2">Start</button>
          <button v-if="starting1" type="button" class="btn btn-warning m-2">Abbrechen</button>
        </div>
      </div>

      <div class="card m-2">
        <div class="card-body">
          <h5 @click="description3 = !description3" class="card-title">1 Mio Meter Challenge</h5>
          <p v-show="description3" class="card-text">Fahre 1000km im Berner öV Netz. <br>
            <i>750 PUNKTE</i>
          </p>
          <div v-if="!startButton" class="progress">
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <button v-if="startButton" type="button" class="btn btn-success">Start</button>
          <button v-else type="button" class="btn btn-warning m-2" data-toggle="modal" data-target="#cancelModal">Abbrechen</button>
        </div>
      </div>

      <div class="modal" id="cancelModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">1 Mio Meter Challenge</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Willst du die Challenge wirklich abbrechen?
                (du verlierst den für die Challenge gesammelten Fortschritt)
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Nein</button>
              <button type="button" class="btn btn-secondary" @click="buttonChange" data-dismiss="modal">Ja</button>
            </div>
          </div>
        </div>
      </div>

      <div class="card m-2">
        <div class="card-body">
          <h5 @click="description4 = !description4" class="card-title"><del>Dampftram Challenge</del></h5>
          <p v-show="description4" class="card-text"><del>Fahre mindestens eine Stunde im Dampftram. </del><br>
            <del>(Tipp: benutze die Karte um das Dampftram zu lokalisieren.)</del>
          </p>
          <button type="button" class="btn btn-info" data-toggle="modal" data-target="#resultModal">Resultate</button>
        </div>
      </div>

      <div class="modal" id="resultModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Dampftram Challenge</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>
                Du bist 1 Stunde mit dem Dampftram gefahren.
              </p>
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
                <tr>
                  <th scope="col">Belohnung</th>
                  <td>1000 Punkte</td>
                </tr>
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Schliessen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'challenge-component',
  data () {
    return {
      startButton: false,
      starting: false,
      starting1: false,
      description: false,
      description2: false,
      description3: false,
      description4: false,
    }
  },
  methods: {
    buttonChange() {
      this.startButton = !this.startButton
    },
    startChallenge() {
      this.starting = !this.starting
    },
    startChallenge2() {
      this.starting1 = !this.starting1
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
