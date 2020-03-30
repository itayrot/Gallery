'use strict'
console.log("controler is now running")

//init the project//
$(document).ready(init)

function init() {
    careateProject()
    renderProj()

}
var projects = getGprojects()

function renderProj() {
    var strHTML = '';

    for (var i = 0; i < projects.length; i++) {
        strHTML += `<div class="col-md-4 col-sm-6 portfolio-item">
                        <a class="portfolio-link" onclick="onOpenModal(${projects[i].id})" href="#portfolioModal1">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="${projects[i].img}" alt="">
                        </a>
                        <div class="portfolio-caption">
                        <h4>${projects[i].name}"</h4>
                        <p class="text-muted">Illustration</p>
                        </div>
                    </div> `

        // $("#portfolio").html(strHTML)
        $(".portfolio-projects").html(strHTML)

    }
}

function renderModal(id) {
    var strHTML = '';
    // for (var i = 0; i < 1; i++) {
    strHTML += `<div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                    </div>
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                        <div class="modal-body">

                            <!-- Project Details Go Here -->
                            <h2>${projects[id].name}</h2>
                            <p class="item-intro text-muted">${projects[id].title}</p>
                            <img class="img-fluid d-block mx-auto" src="${projects[id].img}" alt="">
                            <p>${projects[id].desc}</p>
                            <ul class="list-inline">
                            <li>Date:${projects[id].publishedAt}</li>
                            <li>Client: Threads</li>
                            <li>Category: Illustration</li>
                            </ul>
                            <button class="btn btn-primary" data-dismiss="modal" type="button">
                            <i class="fa fa-times"></i>
                            Close Project</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>`

    $(".portfolio-modal").html(strHTML);
    // }

}


// <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">

function onOpenModal(id) {

    renderModal(id);
    $(".portfolio-modal").modal('show');
}

function OnGettingDetails() {
    location.href = "https://www.google.com/gmail/about/#"

}