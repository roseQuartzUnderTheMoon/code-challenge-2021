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

Commentary (Main Branch):

JS FILE
1. (Line 3) Cleaned up the code by putting a space in between the words.
2. (Line 10) Let hello_world have it's own var because it was used more than once + looked cleaner.
3. (Line 13) I felt that the cleanest method would be to replace the while loop and it's unecessary j var with an enhanced for loop.
4. (Line 16) Did the onclick event totally in js because it looks cleanest.

CSS FILE
5. (Line 2) Used CSS to align the text because it's simple and short. Doesn't look messy.
6. (Lines 7 + 11) One issue with the visibility of Hello World was that the backgroud and the content colors were both black. I changed
   the content color to white so that it could be seen on the black background.

HTML FILE
7. (Line 22) The content setting was set to invisible, meaning that content wouldn't show up. I set it to visible.