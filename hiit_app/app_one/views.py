from django.shortcuts import render, redirect

def index(request):
    if 'rest_time' not in request.session:
        request.session['rest_time'] = 15
    if 'workout_time' not in request.session:
        request.session['workout_time'] = 30
    if 'break_time' not in request.session:
        request.session['break_time'] = 60
    if 'training_array' not in request.session:
        request.session['training_array'] = []
    if 'exersize_name' not in request.session:
        request.session['exersize_name'] = []

    return render(request, 'index.html')

def exersize(request, exer_num, exersize_name):
    request.session['exname'] = exersize_name
    request.session['ex'] = exer_num
    if len(request.session['training_array']) < 6 and len(request.session['exersize_name']) < 6:
        request.session['training_array'].append(exer_num)
        request.session['exersize_name'].append(exersize_name)
    else:
        pass
    print(request.session['training_array'])
    return redirect('/')

def starttraning(request):
    request.session['rest_time'] = request.POST['rest_time']
    request.session['workout_time'] = request.POST['workout_time']
    request.session['break_time'] = request.POST['break_time']
    print(request.session['rest_time'])
    print(request.session['workout_time'] )
    print(request.session['break_time'])
    # return redirect('/')
    return redirect('/traning')

def traning(request):
    return render(request, 'traning.html')

def reset(request):
    request.session.clear()
    return redirect('/')










# def index(request):
#     if 'training_ready' not in request.session:
#         request.session['training_ready'] = {
#             'exersize_order_array': [],
#             'exersize_names_array':[],
#             'rest_time': 15,
#             'workout_time': 30,
#             'break_time': 60
#         }

#     return render(request, 'index.html')

# def exersize(request, exersize_order_num, exersize_name):
#     request.session['training_ready']['exersize_order_array'] = exersize_order_num
#     request.session['training_ready']['exersize_names_array'] = exersize_name
#     if len(request.session['training_ready']['exersize_order_array']) < 6 and len(request.session['training_ready']['exersize_names_array']) < 6:
#         request.session['training_ready']['exersize_order_array'].append(exersize_order_num)
#         request.session['training_ready']['exersize_names_array'].append(exersize_name)
#     else:
#         pass
#     return redirect('/')

# def starttraning(request):
#     request.session['rest_time'] = request.POST['rest_time']
#     request.session['workout_time'] = request.POST['workout_time']
#     request.session['break_time'] = request.POST['break_time']
#     return redirect('/traning')

# def traning(request):
#     return render(request, 'traning.html')








