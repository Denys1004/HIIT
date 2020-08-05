// AJAX
// function add_exercise(img_name, ex_name){
//     $(`#${img_name}`).css('background-color', 'grey')
//     $.ajax({
//       type: 'GET',
//       url: `/exersize/${img_name}/${ex_name}`,
//       success: function(response){
//         for(i = 1; i<response.length+1; i++ ){
//           $(`#ex${i}`).html(` ${response[i-1]}`)
//       }
//     }
//   })
// }

// attr()
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
  console.log('*****************************************');
  $.ajax({
    type: 'GET',
    url:  `/exersize/${img_id}/${exercise_name}`,
    success: function(response){
      for(i = 1; i<response.length+1; i++ ){
        $(`#ex${i}`).html(` ${response[i-1]}`)
      }
    }
  })
  $.ajax({
    type: 'GET',
    url:  `/exersize/${img_id}/${exercise_name}/${choosen_ex_class}`,
    success: function(response){
      for(i = 1; i<response.length+1; i++ ){
        $(`#ex${i}`).html(` ${response[i-1]}`)
      }
    }
  })

})
