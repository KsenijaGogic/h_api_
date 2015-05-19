#get h{api}

##A lil API project I made to get me and anyone interested to start saying some daily positive affirmations

The project is built on IBM's Sentiment API, in their Alchemy API project. The Sentiment API accepts a string, analyzes the text within and returns whether or not it is a positive, neutral or negative statement. I wrote: 
1. A function with a parameter that accepts a string (this is pulled from a form > input)
2. A function with a parameter that accepts the result of the API analysis, that prints to page the analyzed string *only* if it comes back as "positive"
3. Using flickity.css, a prompt gallery that only advances upon the submission of a positive thought. The idea is that there are 5 prompts, each of which gets you to reflect and say something positive. The 6th and final gallery item is a wrap-up message as well as a call-to-action to come back later!
4. For fun, using moment.js, I have time-of-day greetings. To make the user feel like it's more personal but also to start the experience off positively. 

##Ideas for V2!
This is more for me than anyone else.
1. Sync up Animate.css to work on scroll/once content is viewed vs. on page load.
2a. Using MailChimp's Mandrill service, allow for users to submit to themselves their 5 nice thoughts. If there is a way to delay the message by several hours, so that they could have another boost that day/the next day, and remind them that I exist and to come back, that would be cool.
2b. Is there a way to get someone to e-mail this to someone? A possibility to say nice things about someone else and email it to them?
3. Some way to get users to come back daily? In Shawn Achor's talk, he says you can effectively restructure how you think if you do this daily, if you do this for at least 21 days straight. 
 