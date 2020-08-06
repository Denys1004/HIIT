from django.db import models

# class Training(models.Model):
#     title = models.CharField(max_length = 255, null = True)
#     description = models.TextField()
#     location = models.CharField(max_length = 255)
#     poster = models.ForeignKey(User, related_name = 'poster', on_delete=models.CASCADE)
#     executor = models.ForeignKey(User, related_name = 'executor', on_delete=models.CASCADE, blank = True, null = True)
#     created_at = models.DateTimeField(auto_now_add = True)  								
#     updated_at = models.DateTimeField(auto_now = True)

# class Exercise(models.Model):
#     exercise_name = models.TextField(default = '')
#     sportsmen = models.ForeignKey(User, related_name = 'exercises', on_delete=models.CASCADE)
#     training = models.ForeignKey(Training, related_name = 'exercises', on_delete=models.CASCADE)
#     created_at = models.DateTimeField(auto_now_add = True)  								
#     updated_at = models.DateTimeField(auto_now = True)	

# class Song(models.Model):
#     song_title = models.TextField(default = '')
#     sportsmen = models.ForeignKey(User, related_name = 'songs', on_delete=models.CASCADE)
#     training = models.ForeignKey(Training, related_name = 'songs', on_delete=models.CASCADE)
#     created_at = models.DateTimeField(auto_now_add = True)  								
#     updated_at = models.DateTimeField(auto_now = True)	
