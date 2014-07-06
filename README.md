Kodetest
========
Code & run JavaScript tests collaboratively in real-time

Overview
----
Kodetest allows you to collaboratively write JavaScript tests using either the Jasmine or Mocha framework, and run them right in your browser. When you come to the site you are directed to a random URL, which you can then give to a friend or teacher so that you can both code together and watch each others changes appear live on your screen. If you're learning JavaScript (or just practicing), look out for the easter egg that lets you seamlessly insert Exercism.io exercises into the test section. No console needed!

Main Technologies Used
----
* Firebase
* Node.js
* Angular
* Express

Screenshots
----
coming soon

Challenges
----
* Three-way data binding, which was accomplished by (1)binding a property of the Angular $scope to an instance of my Firebase object, (2)using $scope.$watch to watch the $scope for changes and updating Firebase with those changes, and (3)Using Firebase's .on method to watch for 'value' changes and then (a)updating the $scope appropriately and (b)calling $scope.$apply() to trigger a $digest cycle and update the bindings.


Future improvements
----
* If I wanted to continue working on this down the road, I could add in login support using Passport, which would allow users to save their JavaScript snippets.
* Adding the ability to password-protect your snippet. Currently, you can see anyone's snippets if you guess their randomly-generated path.


