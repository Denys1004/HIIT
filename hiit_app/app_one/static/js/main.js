var restTime
var workoutTime
var breakTime
var training_exercises

window.onload = () =>{
    
    getSession();
    training();
}

// making usable array from users input:
// function delete_quotes(ex_string){
//   let newstr = ex_string.replace(/&#39;/g, "")
//   newstr = newstr.replace("[", "")
//   newstr = newstr.replace("]", "")
//   newstr = newstr.split(", ")
//   return newstr
// }
// training_exercises = delete_quotes(training_exercises)
// Adding finish image to the training
// training_exercises.push('finish')
console.log(training_exercises);

// 3. Countdown
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

async function getSession()
{
    $.ajax({
        type: 'GET',
        url: '/passSession',
        success: function(response)
        {
            console.log(response);
            restTime=response.restTime
            workoutTime=response.workoutTime
            breakTime=response.breakTime
            training_exercises=response.training_exercises
        }
    })
}

    






















// WHOLE TRAINING
// async function training(){
//   await countDown(restTime, "PREPARE", ex1)

//   await countDown(workoutTime, "WORKOUT", ex1)
//   await countDown(restTime, "REST", ex2)
//   await countDown(workoutTime, "WORKOUT", ex2)
//   await countDown(restTime, "REST", ex3)
//   await countDown(workoutTime, "WORKOUT", ex3)
//   await countDown(restTime, "REST", ex4)
//   await countDown(workoutTime, "WORKOUT", ex4)
//   await countDown(workoutTime, "WORKOUT", ex5)
//   await countDown(restTime, "REST", ex6)
//   await countDown(workoutTime, "WORKOUT", ex6)
  
//   await countDown(breakTime, "BREAK", ex1)

//   await countDown(workoutTime, "WORKOUT", ex1)
//   await countDown(restTime, "REST", ex2)
//   await countDown(workoutTime, "WORKOUT", ex2)
//   await countDown(restTime, "REST", ex3)
//   await countDown(workoutTime, "WORKOUT", ex3)
//   await countDown(restTime, "REST", ex4)
//   await countDown(workoutTime, "WORKOUT", ex4)
//   await countDown(restTime, "REST", ex5)
//   await countDown(workoutTime, "WORKOUT", ex5)
//   await countDown(restTime, "REST", ex6)
//   await countDown(workoutTime, "WORKOUT", ex6)

//   await countDown(breakTime, "BREAK", ex1)

//   await countDown(workoutTime, "WORKOUT", ex1)
//   await countDown(restTime, "REST", ex2)
//   await countDown(workoutTime, "WORKOUT", ex2)
//   await countDown(restTime, "REST", ex3)
//   await countDown(workoutTime, "WORKOUT", ex3)
//   await countDown(restTime, "REST", ex4)
//   await countDown(workoutTime, "WORKOUT", ex4)
//   await countDown(restTime, "REST", ex5)
//   await countDown(workoutTime, "WORKOUT", ex5)
//   await countDown(restTime, "REST", ex6)
//   await countDown(workoutTime, "WORKOUT", ex6)

//   await countDown(restTime, "DONE", finish)
// }