# Game-Changer
This Portal is made for the conduction of round 3 of the tournament known as Maths Arena, that is to be held in Zeitgeist'23 (The Techno-Cultural Fest of IIT Ropar).<br />
[Rulebook of Maths Arena](https://drive.google.com/file/d/1d_zkISCEvcWnHpvPraRB3ixHazYmDErU/view)<br />
Read the rules of the round 3 from above rulebook to understand the quiz/game. <br />
This Portal uses __express__ and __socket.io__ for backend and __Bootstrap__ for frontend.<br />
This application has a player portal and a server portal.<br />
Each team has to first give their team name.<br />
After all teams have joined for each question we will start timer from server portal and the teams have to place their bets in the given time.<br />
Then the result of each team that is answer correct or not will be inputed in the server portal and scores will be updated.<br />
In case of connection loss the savefiles will be used to rollback to a previous state.<br />
The whole communication between server and player portals is done using socket.io as this requires live communication between them.<br />

__P.S.__ Donot run the code with nodemon as everytime the score is updated the whole portal will restart leading to improper functioning.
