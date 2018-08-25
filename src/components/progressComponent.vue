<template>
    <div>
        <!-- ALERT -->
        <div v-show="alertOpen" class="alert alert-success fade show" role="alert">
            <button type="button self-align-center" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            Sehenswürdigkeiten Challenge abgeschlossen! <br>
            <b>+ 500 Punkte</b>
        </div>

        <!-- CARD -->
        <div class="card m-2">
            <div class="card-body">
                <del v-if="fullBar">
                    <h5 @click="description = !description" class="card-title">Sehenswürdigkeiten Challenge</h5>
                    <p v-show="description" class="card-text">Erlebe Bern im öV. Fahre an folgenden Sehenswürdigkeiten vorbei: <br>
                        <ul>
                            <li class="text-justify">Welle 7</li>
                            <li class="text-justify">Zytglogge</li>
                            <li class="text-justify">Rosengarten</li>
                            <li class="text-justify">Rathaus</li>
                            <li class="text-justify">Kunsthalle</li>
                            <li class="text-justify">Westside</li>
                        </ul>
                        <i>500 PUNKTE</i>
                    </p>
                </del>
                <div v-else>
                    <h5 @click="description = !description" class="card-title">Sehenswürdigkeiten Challenge</h5>
                    <p v-show="description" class="card-text">Erlebe Bern im öV. Fahre an folgenden Sehenswürdigkeiten vorbei: <br>
                        <ul>
                            <li class="text-justify">Welle 7</li>
                            <li class="text-justify">Zytglogge</li>
                            <li class="text-justify">Rosengarten</li>
                            <li class="text-justify">Rathaus</li>
                            <li class="text-justify">Kunsthalle</li>
                            <li class="text-justify">Westside</li>
                        </ul>
                        <i>500 PUNKTE</i>
                    </p>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{width: calculatePercentage() + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button v-if="!fullBar" type="button" class="btn btn-warning m-2">Abbrechen</button>
                <button v-if="fullBar" type="button" class="btn btn-info m-2" data-toggle="modal" data-target="#resultModal">Resultat</button>
            </div>
        </div>

        <!-- MODAL FOR RESULTS -->
        <div class="modal" id="resultModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Sehenswürdigkeiten Challenge</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>
                Du hast mit BernMobil 6 Sehenswürdigkeiten gesehen!
              </p>
              <table class="table">
                <tr>
                  <th scope="col">Datum</th>
                  <td>26. August 2018</td>
                </tr>
                <tr>
                  <th scope="col">Station Start</th>
                  <td>Bern Bundesplatz</td>
                </tr>
                <tr>
                  <th scope="col">Station Ende</th>
                  <td>Helvetiaplatz</td>
                </tr>
                <tr>
                  <th scope="col">Belohnung</th>
                  <td>500 Punkte</td>
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
  name: 'demo-component',
  data () {
    return {
        value: 20,
        description: false,
        timer: null,
        fullBar: false,
        alertOpen: false
    }
  },
  methods: {
      calculatePercentage() {
        return this.value
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.value = this.value + 10
      if (this.value >= 100) {
        this.fullBar = true
      }
      if (this.fullBar) {
        this.alertOpen = true
      }
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>

<style scoped>
</style>