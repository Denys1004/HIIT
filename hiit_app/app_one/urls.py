from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('add_exercise/<str:exercise>', views.add_exercise),
    path('remove_exercise/<str:exercise>', views.remove_exercise),
    path('starttraning', views.starttraning),
    path('traning', views.traning),
    path('reset', views.reset),
    path('passSession', views.passSession)
    
]
