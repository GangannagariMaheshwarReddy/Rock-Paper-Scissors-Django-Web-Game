from django.http import JsonResponse
from django.shortcuts import render
import random

def index(request):
    return render(request, "index.html")
    
def play(request):
    if request.method == "POST":
        user_choice = request.POST.get("choice")
        options = ["rock", "paper", "scissors"]
        computer_choice = random.choice(options)
        
        if((user_choice == "rock" and computer_choice == "scissors") or
            (user_choice == "paper" and computer_choice == "rock") or
            (user_choice == "scissors" and computer_choice == "paper")):
            result = "win"
        elif user_choice == computer_choice:
            result = "tie"
        else:
            result = "lose"
            
        return JsonResponse({
            "user":user_choice,
            "computer": computer_choice,
            "result": result
        })
