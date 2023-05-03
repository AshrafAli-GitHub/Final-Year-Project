from .models import User

def my_scheduled_job():
    users = User.objects.all()
    for user in users:
        user.num_cards.pop()
        user.num_cards.append(0)
        user.save()
