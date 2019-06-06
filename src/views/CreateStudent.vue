<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">create a student</h2>
        <form @submit.prevent>
          id
          <input type="text" name="id" v-model="id">
          name
          <input type="text" name="name" v-model="name">
          <button class="btn teal" @click="create">Enter</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "createstudent",
  data() {
    return {
      id: null,
      name: null
    };
  },
  methods: {
    create() {
      this.axios
        .post("http://localhost:3000/api/org.example.education.Student", {
          $class: "org.example.education.Student",
          studentId: this.id,
          name: this.name
        })
        .then(response => {
          if (response.data != null) {
            console.log(response.data);
            this.id = '',
            this.name = '',
            alert("create success!")
            this.$router.push('/list')
          }else{
            alert('create error!!')
          }
        });
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
