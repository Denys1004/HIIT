// making usable array from users input:
function delete_quotes(ex_string){
  let newstr = ex_string.replace(/&#39;/g, "")
  newstr = newstr.replace("[", "")
  newstr = newstr.replace("]", "")
  newstr = newstr.split(", ")
  return newstr
}
training_exercises = delete_quotes(training_exercises)
// Adding finish image to the training and saving each image into a variable
training_exercises.push('finish')
let ex1 = training_exercises[0]
let ex2 = training_exercises[1]
let ex3 = training_exercises[2]
let ex4 = training_exercises[3]
let ex5 = training_exercises[4]
let ex6 = training_exercises[5]
let finish = training_exercises[6]

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

// WHOLE TRAINING
async function training(){
  await countDown(restTime, "PREPARE", ex1)

  await countDown(workoutTime, "WORKOUT", ex1)
  await countDown(restTime, "REST", ex2)
  await countDown(workoutTime, "WORKOUT", ex2)
  await countDown(restTime, "REST", ex3)
  await countDown(workoutTime, "WORKOUT", ex3)
  await countDown(restTime, "REST", ex4)
  await countDown(workoutTime, "WORKOUT", ex4)
  await countDown(workoutTime, "WORKOUT", ex5)
  await countDown(restTime, "REST", ex6)
  await countDown(workoutTime, "WORKOUT", ex6)
  
  await countDown(breakTime, "BREAK", ex1)

  await countDown(workoutTime, "WORKOUT", ex1)
  await countDown(restTime, "REST", ex2)
  await countDown(workoutTime, "WORKOUT", ex2)
  await countDown(restTime, "REST", ex3)
  await countDown(workoutTime, "WORKOUT", ex3)
  await countDown(restTime, "REST", ex4)
  await countDown(workoutTime, "WORKOUT", ex4)
  await countDown(restTime, "REST", ex5)
  await countDown(workoutTime, "WORKOUT", ex5)
  await countDown(restTime, "REST", ex6)
  await countDown(workoutTime, "WORKOUT", ex6)

  await countDown(breakTime, "BREAK", ex1)

  await countDown(workoutTime, "WORKOUT", ex1)
  await countDown(restTime, "REST", ex2)
  await countDown(workoutTime, "WORKOUT", ex2)
  await countDown(restTime, "REST", ex3)
  await countDown(workoutTime, "WORKOUT", ex3)
  await countDown(restTime, "REST", ex4)
  await countDown(workoutTime, "WORKOUT", ex4)
  await countDown(restTime, "REST", ex5)
  await countDown(workoutTime, "WORKOUT", ex5)
  await countDown(restTime, "REST", ex6)
  await countDown(workoutTime, "WORKOUT", ex6)

  await countDown(restTime, "DONE", finish)
}

window.onload = () =>{
  training();
}
       
