<template>
    <div>
        <ul class="list-group m-1">
            <div v-for="(item, index) in achievements" :key="item.index">
                <li @click="description2 = index" class="list-group-item d-flex justify-content-between align-items-center">
                <img src="../assets/img/Badge.png" class="rounded float-left" alt="10X10">
                {{item.name}}
                <span class="badge badge-primary badge-pill">{{ item.points }}</span>
            </li>
            <div v-show="description2 === index">
                {{ item.description }}<br>
            </div>
            </div>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <b>TOTAL</b>
                <span class="badge badge-success badge-pill">{{ totalPoints }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "achievement-component",
  data() {
    return {
      description2: -1,
      achievements: this.$store.getters.achievements
    };
  },
  computed: {
      totalPoints: function () {
        return this.achievements.reduce((total, achievement) => total + achievement.points, 0)
      }
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: auto;
}
</style>
