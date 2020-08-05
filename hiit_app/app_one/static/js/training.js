// AJAX
function add_exercise(img_name, ex_name){
    $(`#${img_name}`).css('background-color', 'grey')
    $.ajax({
      type: 'GET',
      url: `/exersize/${img_name}/${ex_name}`,
      success: function(response){
        for(i = 1; i<response.length+1; i++ ){
          $(`#ex${i}`).html(` ${response[i-1]}`)
      }
    }
  })
}

