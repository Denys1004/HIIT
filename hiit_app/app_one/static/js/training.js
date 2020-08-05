// AJAX
// window.onload = () =>{
//     for(let i=0; i<request.session['training_array'].length; i++)
//     {
//         $(``)
//     }
//   }

$('#exersize_container div').click(function(){
    let exercise = $(this).attr('id');
    // let choosen_ex_class = $(this).attr('class');
    
    if($(this).hasClass('choosen'))
    {
        $(this).removeClass('choosen');
        $(this).addClass('not_choosen');
        $.ajax({
        type: 'GET',
        url: `/remove_exercise/${exercise}`,
        success: function(response){
            console.log(response);
            clearSpans()
            for(i = 1; i<response.length+1; i++ ){
            $(`#ex${i}`).html(` ${response[i-1]}`)
            }
        }
        })
    }
    else
    {
        $(this).removeClass('not_choosen');
        $(this).addClass('choosen');
        $.ajax({
            type: 'GET',
            url: `/add_exercise/${exercise}`,
            success: function(response){
            console.log(response);
            clearSpans();
            for(i = 1; i<response.length+1; i++ ){
                $(`#ex${i}`).html(` ${response[i-1]}`)
            }
            }
        })
    }
  })


  /*
  	
$('#exersize_container div').click(function(){
  let exercise_name = $(this).children('img').attr('alt');
  let img_id = $(this).attr('id');
  let choosen_ex_class = $(this).attr('class');

  if($(this).hasClass('choosen')){
    $(this).removeClass('choosen');
    $(this).addClass('not_choosen');
  }else if($(this).hasClass('not_choosen')){
    $(this).removeClass('not_choosen');
    $(this).addClass('choosen');
  }

  console.log(exercise_name);
  console.log(img_id);
  console.log(choosen_ex_class);
  console.log('*');
  $.ajax({
    type: 'GET',
    url:  /exersize/${img_id}/${exercise_name},
    success: function(response){
      for(i = 1; i<response.length+1; i++ ){
        $(#ex${i}).html(${response[i-1]})
      }
    }
  })
  $.ajax({
    type: 'GET',
    url:  /exersize/${img_id}/${exercise_name}/${choosen_ex_class},
    success: function(response){
      for(i = 1; i<response.length+1; i++ ){
        $(#ex${i}).html(${response[i-1]})
      }
    }
  })
})
  */
  function clearSpans()
  {
      for(var i=1; i<=6; i++)
      {
        $(`#ex${i}`).html('')
      }
  }