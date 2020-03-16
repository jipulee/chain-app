<template>
  <div class="chat container">
    <h2 class="center teal-text">my edu</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages" >
          <li >
            <span class="teal-text">my degree is: {{myDegree.degreeId}}</span><br>
            <span class="grey-text text-dark-3">my degree information is: {{myDegree.information}}</span>
            <span class="grey-text time"></span>
          </li>
        </ul>
      </div>
      <div class="card-action">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'student',
  data(){
    return{
      myDegree:''
    }
  },
  created(){
    this.axios.get('http://localhost:3000/api/org.example.education.Degree').then(response=>{
      console.log(response.data)
      var deg = response.data 
      for (let index = 0; index < deg.length; index++) {
        if(deg[index].student == "resource:org.example.education.Student#"+localStorage.id){
          this.myDegree = deg[index]
          break
        }
        
      }
    })
  }
}
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
.messages{
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar{
  widows: 3px;
}
.messages::-webkit-scrollbar-track{
  background: #ddd;
}
.messages::-webkit-scrollbar-thumb{
  background: #aaa;
}
</style>