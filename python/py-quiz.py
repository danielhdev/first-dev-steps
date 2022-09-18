from tkinter.messagebox import YES


print("Welcome to my computer quiz!")

playing = input("Do you want to play? ")
# use .lower or .upper to equalize different user inputs
if playing.lower() != "yes":
    quit()
else:
    print("Okay, let's do it!")
score = 0

answer = input("What does RAM stand for? ")
# no else without an if statement
if answer.lower() == "random access memory":
     print("Correct answer!") 
     score += 1
else:
    print("Sorry, try again!")

answer = input("What does CSS stand for? ")

if answer.lower() == "cascading style sheet":
     print("Correct answer!")
     score += 1
else:
    print("Sorry, try again!")

answer = input("What does GPU stand for? ")
if answer.lower() == "graphic processing unit":
     print("Correct answer!")
     score += 1
else:
    print("Sorry, try again!")

answer = input("What does CPU stand for? ")
if answer.lower() == "central processing unit":
     print("Correct answer!")
     score += 1
else:
    print("Sorry, try again!")
# stringify numbers with str() to print them out
print("Your final score: " + str(score) + " of 4 points!")
# alternative print("Your final score:", score, "of 4 points!")
print(str((score/4) * 100) + '% success rate.')



