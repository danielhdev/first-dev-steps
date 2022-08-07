import random

user_wins = 0
computer_wins = 0

options = ["rock", "paper", "scissors"]

while True:
    user_input = input("Type Rock, Paper or Scissors! Q to quit: ").lower()
    if user_input == "q":
        break

    if user_input not in options:
        continue 

    random_number = random.randint(0, 2)
    computer_pick = options[random_number]
    print("Computer picked: ", computer_pick + ".") # ","R would add a space

    if user_input == "rock" and computer_pick == "scissors":
        print("Player wins!")
        user_wins += 1
        
    elif user_input == "paper" and computer_pick == "rock":
        print("Player wins!")
        user_wins += 1
        
    elif user_input == "scissors" and computer_pick == "paper":
        print("Player wins!")
        user_wins += 1
    
    elif user_input == computer_pick:
        print("Draw!")
        user_wins += 0
        computer_wins += 0
        
    else:
        print("Computer wins!")
        computer_wins += 1
print("You won", user_wins, "times.")
print("Computer won", computer_wins, "times.")
print("Bye!")





