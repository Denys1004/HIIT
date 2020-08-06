var restTime
var workoutTime
var breakTime
var training_exercises

window.onload = () =>{  
    training()
}
function countDown(count_time, status, exercise){
  return new Promise((resolve) =>{
    let timerNumber = setInterval(() => {
      count_time--;
      $("#timerNumber").html(count_time);
      $("#workout_status").html(status);
      if (status == "WORKOUT"){
          $("#timerNumber").css('color','red')
          $("#workout_status").css('color','red')
      }else if(status == "REST" || status == "PREPARE" || status == "BREAK"){
        $("#timerNumber").css('color','green')
        $("#workout_status").css('color','green')
      }
      $('#exercise_photo_container').html(`<img id='exercise' src='static/images/${exercise}.gif'>`)

      if (count_time <= 0){
        clearInterval(timerNumber);
        resolve();
      } 
    }, 1000);
  })
} 
async function training()
{
    await getSession();
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
    return new Promise((resolve) => {
        $.ajax({
            type: 'GET',
            url: '/passSession',
            success: (response) =>
            {
                restTime=response.restTime
                workoutTime=response.workoutTime
                breakTime=response.breakTime
                training_exercises=response.training_exercises
                resolve()
            } 
        })
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