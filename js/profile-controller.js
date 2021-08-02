'use strict';
$(document).ready(onInit)
function onInit() {
    createProjects();
    renderProjects();
}

function renderProjects() {
    var projs = getProjsForDisplay();
    var strHTML = projs.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-id="${project.id}" data-toggle="modal" href="#portfolioModal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="./img/projects/${project.name}.png" alt="">
        </a>
        <div class="portfolio-caption">
        <h4 class="project-name">${project.name}</h4>
        <p class="text-muted">${project.desc}</p>
        <span class="badge badge-success">${project.labels[0]}</span>
        <span class="badge badge-success">${project.labels[1]}</span>
        <span class="badge badge-success">${project.labels[2]}</span>
        </div>
      </div>`
    })
    $('.projs-container').html(strHTML)
    $('.portfolio-link').each(function (idx, elLink) {
        var $elLink = $(elLink)
        var projId = $elLink.data('id')
        $elLink.click(function () {
            renderModal(projId)
        })
    })

}
function renderModal(projId) {
    var proj = getProjectById(projId)
    var strHTML = `
    <h2>${proj.name}</h2>
    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
    <img class="img-fluid d-block mx-auto" src="img/projects/${proj.name}.png" alt="">
    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
      blanditiis
      dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
      cupiditate,
      maiores repudiandae, nostrum, reiciendis facere nemo!</p>
    <ul class="list-inline">
      <li>Date:2021</li>
      <li>Client: Threads</li>
      <li>Category: Games</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project
    </button>
    <button class="code btn btn-success" data-id="${proj.name}" type="button">
        <i></i>
        Code < > Project
    </button>
    `
    debugger
    $('.modal-body').html(strHTML);
    console.log($('.send'));
    $('.code').click(function () {
        window.open(proj.url, '_blank')
    })

}
function onSendForm() {
    var $elMailTxt = $('input[name="email"]')
    var $elSubjecTxt = $('input[name="subject"]')
    var $elMessageTxt = $('#floatingTextarea2')


    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=tlsgl62@gmail.com&su=${$elSubjecTxt.val()}&body=${$elMessageTxt.val()}`, '_blank')
    $elMailTxt.val() = '';
    $elSubjecTxt.val() = '';
    $elMessageTxt.val() = '';
}