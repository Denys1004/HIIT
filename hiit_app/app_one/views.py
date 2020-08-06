from django.shortcuts import render, redirect, HttpResponse
import json, random


#
def index(request):
    if 'training_array' not in request.session:
        request.session['training_array'] = []

    return render(request, 'index.html')

def add_exercise(request, exercise):
    if len(request.session['training_array']) < 6:
        request.session['training_array'].append(exercise)
        request.session.save()
        return HttpResponse(json.dumps(request.session['training_array']), content_type='application/json')

def remove_exercise(request, exercise):
    request.session['training_array'].remove(exercise)
    request.session.save()
    return HttpResponse(json.dumps(request.session['training_array']), content_type='application/json')

def starttraning(request):
    request.session['rest_time'] = request.POST['rest_time']
    request.session['workout_time'] = request.POST['workout_time']
    request.session['break_time'] = request.POST['break_time']
    
    tempList=['slide_1','slide_2','slide_3','slide_4','slide_5','slide_6']
    random.shuffle(tempList)
    
    i=0
    while(len(request.session['training_array']) !=6):
        if(tempList[i] not in request.session['training_array']):
            request.session['training_array'].append(tempList[i])
        i+=1
    return redirect('/traning')

def traning(request):
    return render(request, 'traning.html')

def passSession(request):
    context={
        'training_exercises':request.session['training_array'],
        'restTime':request.session['rest_time'],
        'workoutTime':request.session['workout_time'],
        'breakTime':request.session['break_time'],    
    }
    return HttpResponse(json.dumps(context), content_type='application/json')

def reset(request):
    request.session.clear()
    return redirect('/')