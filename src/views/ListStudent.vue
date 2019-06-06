<template>
  <div class="chat container">
    <h2 class="center teal-text">List Students</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li v-for="student in students" :key="student.studentId">
            <span class="teal-text">student name:{{student.name}}</span>
            <br>
            <span class="grey-text text-dark-3">id:{{student.studentId}}</span>
          </li>
        </ul>
      </div>
    </div>
    <h2 class="center teal-text">Graduated Students</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li v-for="degree in degrees" :key="degree.degreeId">
            <span class="teal-text">student name:{{degree.information}}</span>
            <br>
            <span class="grey-text text-dark-3">degree id:{{degree.degreeId}}</span>
            <br>
            <span class="grey-text text-dark-3">student id:{{degree.student}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "liststudent",
  data() {
    return {
      students: [],
      degrees: []
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/api/org.example.education.Student")
      .then(response => {
        console.log(response.data);
        this.students = response.data;
      });
    this.axios
      .get("http://localhost:3000/api/org.example.education.Degree")
      .then(response => {
        console.log(response.data);
        this.degrees = response.data;
      });
  }
};
</script>


<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 0.8em;
}
.messages {
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  widows: 3px;
}
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>