<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">University</h2>
        <form @submit.prevent>
          <button class="btn teal" @click="list">list students</button><br>
          <button class="btn teal" @click="graduate">graduate</button><br>
          <button class="btn teal" @click="create">create student</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      id: null
    };
  },
  methods: {
    list(){
      this.$router.push('/list')
    },
    graduate(){
      this.$router.push('/graduation')
    },
    create(){
      this.$router.push('/create')
    }
  }
};
</script>

<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
}
.welcome button {
  margin: 30px auto;
}
</style>
