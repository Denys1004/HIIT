from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('exersize/<str:exer_num>/<str:exersize_name>', views.exersize),
    path('starttraning', views.starttraning),
    path('traning', views.traning),
    path('reset', views.reset)
    
]
