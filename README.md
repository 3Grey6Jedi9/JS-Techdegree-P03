# JS-Techdegree-P03
 My third JavaScript Project


EXTRA CREDIT 

2) Real-Time Error Messages 

I decided to program the credit card number field to detect or listen for possible errors as well to confirm in real time that 
the credit card number entered has a porper format. 

I did that by creating a keyup eventlistener. Around line 420. 

So as you can see I define 2 patterns. One of them is to detect if you are not entering a number. And the other one is to confirm that 
the number you have entered meets requirements. 

Eventually I test the input through an 'if' statement.

3) Conditional Error Message 

Well, here I decided to display an additional message when trying to submit the form. 

The idea is to display an initial message is you fail to submit, indicating that you are missing something. And 
if you try to submit again without haveing entered the proper input another message will show up telling you that you 
must carefully review the form so you complete all the flields properly. 

The way I did so, was by adding some code to the click eventlistener associated with the submitbutton (line 270). 
I create an error messsage by creating an HTML element first, that I will insert after the button. And I will manage the messages knowing how
many times the users clicks. I do that with the variable clickCount. 

