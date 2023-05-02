from django.shortcuts import render, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpRequest, JsonResponse
from django.middleware import csrf
import json
from .models import Student, Deck, Flashcard


def spa_view(request):
    return render(request, 'api/spa/index.html', {})

def logout_view(request):
    logout(request)
    return HttpResponse("Logged out")

def get_auth(request):
    if request.user.is_authenticated:
        return HttpResponse('Authenticated')
    return HttpResponse("Not Authenticated")

def get_csrf(request):
    csrf_token = csrf.get_token(request)
    response = HttpResponse("CSRF Token")
    response.set_cookie('csrftoken', csrf_token)
    return response

def student_api(request: HttpRequest, id:int) -> HttpResponse:
    student = get_object_or_404(Student, id=id)

    if request.method == 'GET':
        return JsonResponse(student.to_dict())

def students_api(request:HttpRequest):
    students = Student.objects.all()

    if request.method == 'GET':
        return JsonResponse({
                'students':[
                    student.to_dict() for student in students
                ]
            })
    
    if request.method == "POST":
        if request.headers['Source'] == 'Signup':
            username = json.loads(request.body)['username']
            password = json.loads(request.body)['password']
            if len(Student.objects.filter(username=username)) > 0:
                return HttpResponse('Username taken')
            student = Student(username=username)
            student.set_password(password)
            student.save()
            login(request, student)
            return HttpResponse('New account created')
        
        elif request.headers['Source'] == 'Login':
            username = json.loads(request.body)['username']
            password = json.loads(request.body)['password']
            user = authenticate(username=username, password=password)
            print(Student.objects.filter(username=username))
            print(user)#user is None here? why
            response = HttpResponse()
            if user is not None:
                login(request, user)
                return response
            else:
                return HttpResponse("Username or password incorrect.")

def flashcard_api(request: HttpRequest, id:int) -> HttpResponse:
    flashcard = get_object_or_404(Flashcard, id=id)
    if request.method == 'GET':
        return JsonResponse(flashcard.to_dict())
    
    if request.method == "PUT":
        data = json.loads(request.body)
        if data['front'] != '':
            flashcard.front = data['front']
        if data['back'] != '':
            flashcard.back = data['back']
        flashcard.save()
        return JsonResponse(flashcard.to_dict())
    
    if request.method == "DELETE":
        flashcard.delete()
        return HttpResponse('Deleted')


def flashcards_api(request:HttpRequest):
    flashcards = Flashcard.objects.all()

    if request.method == 'GET':
        return JsonResponse({
            'flashcards':[
                flashcard.to_dict() for flashcard in flashcards
            ]
            })
    
    if request.method == "POST":
        print(json.loads(request.body))
        deck = get_object_or_404(Deck, id=json.loads(request.body)['deck_id'])
        new_card = Flashcard(front=json.loads(request.body)['front'],back=json.loads(request.body)['back'],deck=deck)
        new_card.save()
        return JsonResponse(new_card.to_dict())


def decks_api(request:HttpRequest):

    if request.method == 'GET':
        decks = Deck.objects.filter(student=request.user)
        return JsonResponse({
            'decks':[
                deck.to_dict() for deck in decks
            ]
        })

    if request.method == "POST":
        print(json.loads(request.body))
        title = json.loads(request.body)['title']
        description = json.loads(request.body)['description']
        new_deck = Deck(name=title, description=description, student=request.user)
        new_deck.save()
        cards = json.loads(request.body)['cards']
        for card in cards:
            print(card)
            new_card = Flashcard(front=card['front'], back=card['back'], deck=new_deck)
            new_card.save()
        return HttpResponse("Success!")
    
        

def deck_api(request: HttpRequest, id:int) -> HttpResponse:
    deck = get_object_or_404(Deck, id=id)
    print(3)

    if request.method == 'GET':
        return JsonResponse(deck.to_dict())
    
    if request.method == "DELETE":
        deck.delete()
        print(id)
        return HttpResponse('Deleted')