from django.shortcuts import render
from .forms import RegisterForm

def index(request):
    form= RegisterForm()
    context={
        'form':form
    }

    return render(request,'log_reg/index.html', context)

def register(request):
    form= RegisterForm(request.POST)
    if form.is_valid():
        email=form.cleaned_data['email']


def login(request):
    pass