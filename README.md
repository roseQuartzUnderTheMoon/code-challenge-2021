# code-challenge-2021

1. Make `Hello World` appear on the webpage. There is some existing code but it needs work.
2. Play the included bling sound when the user clicks on `Hello World`
3. If that was easy, then add some more visual bling to the page when the sound plays

Look in the `docs` folder for a screenshot of the final layout.

Implement this challenge by modifing the main.js file. You should not have to modify index.html or main.css nor add any libraries.

Your page should render correctly on a phone or desktop browser.

Feel free to consult anyone or use the internet for solutions. However, be ready to explain your approach and your code.

It would be best if you could provide a single url to the page. You can use https://pages.github.com/ but really any hosting solution is fine. Please also send me the link to your git repo.

Good luck!

Hints:

1. there are issues with the css. for some reason the words do not appear?
2. there are issues with the code. the loop is really sloppy, hhhhhm.
3. there's a sound on the page. you just need to listen for it. it's one click away.

Changes: 

1. (Line 7) Placed a function at the top of the code for the css changes.
2. (Lines 28-36) Changed the color of content to white so that it will be visible on the black background. Changed the alignment of content and meat to center. Changed the class name of content to visible so that the contents of content would show up. Since the element "header" didn't have an id, I used getElementsByClassName to grab it and then align it to center as well.
3. (Line 11) I decided to put hello_world in a var for shorter/cleaner code.
4. (Lines 13-19) Last alternative fix and not the cleanest but it keeps the structure of the original loop. I eradicated the j var because it was unecessary and adjusted the loop so that it relies completely on i. I also added an if statement to insert a space between the end of Hello and the beginning of World because the original myMessage array does not have a space between them.
5. (Lines 17-20) Created a function to play mySound on click as well as turns the text pink and the background green for a little bling.