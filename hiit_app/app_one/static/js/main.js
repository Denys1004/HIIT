// making usable array from users input:
function delete_quotes(ex_string){
  let newstr = ex_string.replace(/&#39;/g, "")
  newstr = newstr.replace("[", "")
  newstr = newstr.replace("]", "")
  newstr = newstr.split(", ")
  return newstr
}
training_exercises = delete_quotes(training_exercises)

// Countdown
function countDown(count_time, status, exersise){
  return new Promise((resolve) =>{
    let timerNumber = setInterval(() => {
      count_time--;
      document.getElementById("timerNumber").innerHTML = count_time;
      document.getElementById("workout_status").innerHTML = status;
      if (status == "WORKOUT"){
          document.getElementById("timerNumber").style.color = "red";
          document.getElementById("workout_status").style.color = "red";
      }else if(status == "REST" || status == "PREPARE" || status == "BREAK"){
        document.getElementById("timerNumber").style.color = "green";
        document.getElementById("workout_status").style.color = "green";
      }
      document.getElementById('exercise_photo_container').innerHTML = `<img id='exersise' src='static/images/${exersise}.gif'>`
      if (count_time <= 0){
        clearInterval(timerNumber);
        resolve();
      } 
    }, 1000);
  })
} 
// Training
async function training(){
  await countDown(restTime, 'PREPARE', training_exercises[0])
  for(let i=0; i<18; i++){
      if(i % 6==0 && i !=0){
          await countDown(breakTime, "BREAK", training_exercises[0])
      }
      await countDown(workoutTime, "WORKOUT", training_exercises[i%6])
      if(i != 5 && i !=11 && i !=17){
          await countDown(restTime, 'REST', training_exercises[i%6+1])
      }
  }
  await countDown(restTime, "DONE", 'finish')
}

window.onload = () =>{
  training();
}