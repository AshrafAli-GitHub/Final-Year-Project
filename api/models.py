from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Student(AbstractUser, models.Model):
    num_cards = models.JSONField(default=[0,0,0,0,0,0,0])

    def to_dict(self):
        return{
            'id':self.id,
            'username':self.username,
            'num_cards':self.num_cards,
        }
    
class Deck(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=600)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)

    def to_dict(self):
        return{
            'id':self.id,
            'name':self.name,
            'description':self.description,
            'cards':[card.to_dict() for card in self.flashcard_set.all()],
            'student':self.student.id,
        }


class Flashcard(models.Model):
    front = models.CharField(max_length=500)
    back = models.CharField(max_length=500)
    deck = models.ForeignKey(Deck, on_delete=models.CASCADE)
    
    def to_dict(self):
        return{
            'id': self.id,
            'front': self.front,
            'back':self.back,
            'deck':self.deck.id
        }