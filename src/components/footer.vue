<template>
    <footer class="footer">
      <div class="container">
        <span class="text-muted">(C) Aldente | 2018</span>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'footer-component',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.footer {
    position: fixed;
    left: 0;
    bottom: 5px;
    width: 100%;
    text-align: center;
}
</style>
