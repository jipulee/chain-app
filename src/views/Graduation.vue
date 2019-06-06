<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Graduation</h2>
        <form @submit.prevent>
          degreeId
          <input type="text" name="id" v-model="degreeId">
          studentId
          <input type="text" name="name" v-model="studentId">
          
          <button class="btn teal" @click="graduate">Enter</button>
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
      studentId: '',
      degreeId: ''
    };
  },
  methods: {
    graduate() {
      this.axios
        .post("http://localhost:3000/api/org.example.education.Degree", {
          $class: "org.example.education.Degree",
          degreeId: this.degreeId,
          information: "Congratulation！ You graduated from ajou",
          uni: "resource:org.example.education.University#111",
          student: "resource:org.example.education.Student#"+this.studentId
        })
        .then(response => {
          console.log(response.data)
          alert('graduate success!')
          this.$router.push('/list')
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
