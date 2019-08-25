
#KAST

<br>
<div>
    <img height="100" src="https://github.com/brandonperezlara/kast/blob/master/Kast/public/logo.png" >
</div>
<br>

Description
Kast is a tool that allows you to manage tasks to have a better organization, can be saved in database and assigned to a list of people. Tasks can change status depending on the progress you make, they can be in Open, in Progress and done.
You can also edit the particular list of people to whom tasks are assigned.

Requirements
For the installation of the application it is necessary to have Node Js installed on the device
The librery pm2 to deploy the API (npm i pm2)

Install
Download repository of git.
Url: https://github.com/brandonperezlara/kast
downloaded the repository will have the following folders:

#cd Api

First we install the API components with the following command inside the directory Api:
#npm install
Once installed we deploy the API:
#pm2 start src\index.js

After having deployed the API we will install the libraries of the view, for this we will position ourselves in the path of the Kast directory and install them:
#cd Kast
#npm install
it only remains to start it with the following command:
#npm start
