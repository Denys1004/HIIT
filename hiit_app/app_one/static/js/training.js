// AJAX
window.onload = () =>{
    $.ajax({
        type: 'GET',
        url: '/passSession',
        success: (response) =>{
            response.training_exercises.map((exercise,i) => {
                $(`#${exercise}`).attr('class','choosen')
                $(`#ex${i}`).html(` ${exercise}`)
            })

        }
        })
  }
$('#exersize_container div').click(function(){
    let exercise = $(this).attr('id');
    // let choosen_ex_class = $(this).attr('class');
    
    if($(this).hasClass('choosen'))
    {
        $(this).attr('class','not_choosen');
        $.ajax({
        type: 'GET',
        url: `/remove_exercise/${exercise}`,
        success: function(response){
            console.log(response);
            clearSpans()
            for(i = 0; i<response.length; i++ ){
            $(`#ex${i}`).html(` ${response[i]}`)
            }
        }
        })
    }
    else
    {
        $(this).attr('class','choosen');
        $.ajax({
            type: 'GET',
            url: `/add_exercise/${exercise}`,
            success: function(response){
            console.log(response);
            clearSpans();
            for(i = 0; i<response.length; i++ ){
                $(`#ex${i}`).html(` ${response[i]}`)
            }
            }
        })
    }
  })
  function clearSpans()
  {
      for(var i=0; i<6; i++)
      {
        $(`#ex${i}`).html('')
      }
  }