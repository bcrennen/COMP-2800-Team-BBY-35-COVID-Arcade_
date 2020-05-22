UNITY WEB SECTION

In order to work on the Web game side of the project one must:
Install “Unity Hub”
After “Unity Hub” is installed and a Unity account is created, open The hub and select ‘Installs’ on the bottom left side of the window.
Click the ‘Add’ button in the top right corner and select “Unity 2018.4.19f1”
After that download is complete, open ‘Projects’, select ‘Add’, and navigate to the “CovidArcade_V1” project file inside the git repo.

If you would just like to view the projects files and code:
Open the “CovidArcade_V1” project folder inside the git repo.
Select “Assets” 
All game content is stored in the Assets folder in their given sub-folders of appropriate names.

All used exterior and 3rd party packages are inside this project folder so no API’s are required to work on this application.

The API’s do not require any keys.

The correct install pattern for Unity is: Unity Hub => Unity 2018.4.19f1 => Open given project.
Since the APIS are all contained in the Unity project no install pattern is required.



WEBPAGE SECTION 

All works were implemented in the Windows environment.

In order to adapt this website with your own data, you need to install IDEs which can handle web development. 
We recommend using Visual Studio because this is the program we used to create all the html, css, and javascript files. 
Also, creating your own project from your Firebase console. And then, you should start your real-time database in your Firebase project. 
Don’t forget to start a web application for your project. Once, you have all of those programs downloaded or implemented, 
we used bootstrap for front end development. 

For the website, the developer does not need to download 3rd party API and framework. 

However, the website needs a specific API key from your own Firebase project. The step is: 
Go to your Firebase console > select Project from Console > go to Setting > Click Project Setting >  Click the Web application > Copy the Firebase SDK snippet > Paste into the Script File

 
In order for a smooth transition, installing an IDE platform is the key and then setting up a firebase to run a real time database. 
The developer must change their CDN key or could use ours to run the website and store data.

This repo contains index.html which displays before users log in, and login.html which displays after users log in. 
Moreover, there are 6 different leaderboard html pages for each mini-games such as ccld.html (for cough catcher leaderboard), 
ddfl.html (for Dog fight leaderboard), tprace.html (for Toilet paper leaderboard), touch.html (for Don’t touch your face leaderboard), 
Jogger.html (for jogger game leaderboard), and blitz.html (for Blitz mode leaderboard). And, there is a “scripts” folder including 
javaScripts files for each leaderboard.html pages, login and index pages.

Furthermore, CSS folder includes css style files for the leaderboards pages, but styles folder provide css index and login pages. 


