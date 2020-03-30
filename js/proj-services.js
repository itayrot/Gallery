'use strict'

var gProjects = [];
// var numOfProj = 2;

function getGprojects() {
    return gProjects;
}


function careateProject() {

    var project = {
        id: 0,
        name: "Books-Shop",
        title: "Find Your Magical Book",
        desc: "At this unique place you can find any magical book you wish, even forbidden ones..",
        url: "/projects/books-shop/index.html",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
        img: 'img/portfolio/books-shop.jpg'
    }

    gProjects.push(project);


    var project2 = {
        id: 1,
        name: "Guess-Who",
        title: "I bet this Mind-Reader can guess easily who do you think of...",
        desc: "At this project, i built a guessing game, where the player think of antity and the machine need to guess which antity is it. The player also can teach the machine about antities for next game ",
        url: "/projects/Guess-Who.html",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
        img: 'img/portfolio/Guess-Who.jpg'
    }

    gProjects.push(project2);

    var project3 = {
        id: 2,
        name: "Mine-Sweeper",
        title: "Every step counts...",
        desc: "Go out into the fields and watch the mines around you. Try to find and mark them as fast as possible",
        url: "/projects/Mine-Sweeper.html",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
        img: 'img/portfolio/Mines-Sweeper.jpg'
    }

    gProjects.push(project3);


}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})