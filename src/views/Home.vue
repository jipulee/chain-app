<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Student</h2>
        <form @submit.prevent>
          <label for="name">Enter your id</label>
          <input type="text" name="name" v-model="id">
          <button class="btn teal" @click="login">Enter</button>
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
    login(){
      this.axios.get('http://localhost:3000/api/org.example.education.Student/'+this.id).then(response=>{
        console.log(response.data.name)
        if(response != null){
          localStorage.id = this.id
          this.$router.push('/student')
        }else{
          alert('not exist!')
        }
      })
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
