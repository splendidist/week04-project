# week04-project

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

Create and style responsive webpage

- Create a page containing a form to leave a message and a list of all the messages that have been left.
- Style the form and the messages so they're easy to read on multiple kinds of device.

Create form, database, and allow user to see messages on webpage

- Create an API POST route to accept the text from your message input form
- Create a database to store the messages, and create a seed file to create the table
- Create an API GET route to retrieve all the messages from the database
- Fetch the messages from your API in the browser and display them on the page.

Stretch goals

🎯 Were there any requirements or goals that you were not quite able to achieve?

- A goal I wanted to achieve was to add a delete button to the messages, a like button to the messages, and also allow the user to view messages by season.

- Another goal I wanted to achieve was to add forms to each user submissions, so that the user can leave comments on the submissions

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

- I struggled the most with getting the user submissions to display on the page without having to refresh the page. When the form was submitted it would go into the database, but the client server would only display it on the page after reload. I fixed this issue in app.js line 21 after trying lots of different options and testing each step of the code with console.logs.

- I found designing this app really difficult, as I set up the client/server folders and deployed the basic version of the app to Render pretty quickly. I think I changed my theme/design 2 or 3 times before settling on the current one, which I am still not 100% happy with. I tried looking on web design inspiration sites but just didn't feel very creative with this project. I also struggled with feeling like the app needed to be original or have a purpose despite knowing the point of the project is to show that I understand the code/sqlite/render.

🌱 What went really well and what could have gone better?

- Making the client and server folders, making a database and form, and getting the form submission to put into the database went really well. Deploying the site to Render also went really well. I also used lighthouse to check the accessibilty of the website and used the results to make the app more accessibled. I think the overall website design could have gone better, and reaching some of the stretch goals.

🌱 Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).

- Chatgpt for the text content of the page
- AI background remover for the top right image of the sunflowers
- I sometimes look back on my old code to see how I've done things e.g. adding a custom font, media queries etc.
- https://stackoverflow.com/questions/8287779/how-to-use-the-required-attribute-with-a-radio-input-field - how to use required
- https://www.w3schools.com/jsref/met_element_setattribute.asp - set class attributes to elements made in JavaScript
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset - fieldset with legend element

🌱 Describing errors or bugs you encountered while completing your assignment.

- When the form was submitted it would go into the database, but the client server would only display it on the page after reload.
- Having 'width: 100vw' in the body messed up the page making it so it could be scrolled left and right.
- The form could be submitted when empty so I added 'required' to the inputs, and made it so that the spring season is automatically checked.
