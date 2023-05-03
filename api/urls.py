from django.urls import path, re_path
from . import views

urlpatterns = [
    path('csrf/', views.get_csrf),
    path('logout/', views.logout_view),
    path('auth/', views.get_auth),
    path('api/students/', views.students_api),
    path('api/student/', views.student_api),
    path('api/flashcards/', views.flashcards_api),
    path('api/flashcard/<int:id>/', views.flashcard_api),
    path('api/decks/', views.decks_api),
    path('api/deck/<int:id>/', views.deck_api),
    path('api/increment/', views.increment),
    re_path(r'^.*', views.spa_view),
]