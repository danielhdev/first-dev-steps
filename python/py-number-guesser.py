#some modules like random come as default, more can be installed 
import random

top_of_range = input("Enter a number: ") #check number with .isdigit()

if top_of_range.isdigit():
   top_of_range = int(top_of_range) #if number is true, converts string to number with int()
   if top_of_range <= 0:
       print("Please type in a number bigger than 0!")
       quit()
else:
    print("Please type in a number next time!")
    quit()

random_number = random.randint(0, top_of_range)
guesses = 0

while True:
    guesses += 1
    user_guess = input("Make a guess: ")
    if user_guess.isdigit():
        user_guess = int(user_guess)
    else:
        print("Enter a number next time.")
        continue    

    if user_guess == random_number:
        print("Congratulations, you guessed the right number!")
        break
    elif user_guess > random_number:
        print("You are too high, guess again: ")
    else:
        print("You are too low, guess again: ")
       
       
if user_guess == 1:
         print("You needed 1 try this round.")
else:
         print("You needed", guesses, "tries this round.")
