'use strict';

var gProjs

function getProjectById(id) {
    var project = gProjs.find(function (project) {
        return project.id === id;
    })
    return project;
}

function getProjsForDisplay() {
    return gProjs
}

function createProjects() {
    gProjs = [
        _createProj('Pacman', 'The classic game Pacman', ['HTML', 'CSS', 'Javascript']),
        _createProj('Minesweeper', 'The classic Minesweeper game', ['HTML', 'CSS', 'Javascript']),
        _createProj('Pacman', 'The classic game Pacman', ['HTML', 'CSS', 'Javascript']),
        _createProj('Minesweeper', 'The classic Minesweeper game', ['HTML', 'CSS', 'Javascript'])
        
    ]
}

function _createProj(name, title, labels) {
    return {
        id: _makeId(),
        name,
        title,
        desc: 'This Game Awsome ipsum dolor sit amet consectetur adipisicing elit. Cumque, officiis.',
        imgUrl: name,
        url: `https://segaltal1.github.io/${name}/`,
        labels,
    }
}

function _makeId(length = 5) {
    var options = 'abcdefghijklm234567^$@nopABCDEFG@#&HIJKLMNOP'
    var str = ''
    for (var i = 0; i < length; i++) {
        var randIdx = Math.floor(Math.random() * options.length)
        str += options.charAt(randIdx)
    }
    return str
}
