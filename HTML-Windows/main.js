// first web released on 06.01.22
// https://windows10x2.w3spaces.com

// set time to windows

function setTime() {
    var date = new Date()
    document.getElementById("time").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}

// folder architecture

var __item__ = {
    "user":"",
    "system":"",
    "prive":"",
    "dano":"",
    "folder":"",
    "file.cs":"user/",
    "folder":"user/",
    "main":"user/folder/",
    "main.js":"system/",
    "styles.css":"system/",
    "pc.png":"system/",
    "wallpaper.gif":"system/"
}

// all declaration variable

var path = ""

var num = 0;
var inter = setInterval("openFolder()", 1)
clearInterval(inter)

// return all folder directory

function architecture() {
    var arch = []
    for (i in __item__){
        arch.push(__item__[i])
    }
    return arch
}

// when mouse hover any application (same code for all desktop application)

function hover(app) {
    // reset()
    if (app == "null"){
        document.getElementById("hover").style.display = "none"
        document.getElementById("hover").style.backgroundColor = "rgb(126, 126, 126)"
    }
    else {
        var left = document.getElementById(app).style.left.slice(0, document.getElementById(app).style.left.length-2) - 10
        var top = document.getElementById(app).style.top.slice(0, document.getElementById(app).style.top.length-2) - 10
        document.getElementById("hover").style.display = "block"
        document.getElementById("hover").style.left = left + "px"
        document.getElementById("hover").style.top = top + "px"
    }
    
}

// when application is clicked -> app selected

function clicks(app) {
    document.getElementById("hover").style.backgroundColor = "#0080FF"
}
function changeStatement(logo) {
    document.getElementById(logo).src = "close"+"-pressed.png"
}
var APP = ["folder", "visual studio code"]
var icon = [
    "close"
]

function reset() {
    for (var i = 0; i < icon.length; i++){
        document.getElementById(icon[i]).src = icon[i]+".png"
    }
    
}






// Folder application
// created on donnerstag 6 january 2022
// first working application on windows X2
// beta -> must upgrade app and upgrade things like - create folder and file, see information about file, rename and delete file, animation,
// resize and minimize button and finally navigate bar. edit on 07.01.22
// folder version 1.0 -> 06.01.22
// folder version 1.1 -> 07.01.22

// open application folder

function openFolder() {
    num++
    let app = "pc"
    if (num<=20){
        // animation ouverture
        var op = parseFloat(document.getElementById("windows-"+app).style.opacity)
        var wdth = document.getElementById("windows-"+app).style.width
        var hght = document.getElementById("windows-"+app).style.height
        document.getElementById("close").style.left = (parseInt(wdth.slice(0, wdth.length - 2))+parseInt(document.getElementById("windows-"+app).style.left.slice(0, document.getElementById("windows-"+app).style.left.length - 2))-45).toString() + "px"
        document.getElementById("close").style.top = (parseInt(document.getElementById("windows-"+app).style.top.slice(0, document.getElementById("windows-"+app).style.top.length - 2))).toString() + "px"
        document.getElementById("windows-"+app).style.left = (parseInt(window.screen.width/2 - parseInt(wdth.slice(0, wdth.length - 2))/2)).toString() + "px"
        document.getElementById("windows-"+app).style.top = (parseInt(window.screen.height/2 - parseInt(hght.slice(0, hght.length - 2))/2)-100).toString() + "px"
        document.getElementById("windows-"+app).style.opacity = (op + 0.05).toString()
        document.getElementById("windows-"+app).style.width = (parseInt(wdth.slice(0, wdth.length - 2)) + 10).toString() + "px"
        document.getElementById("windows-"+app).style.height = (parseInt(hght.slice(0, hght.length - 2)) + 10).toString() + "px"
        
    }
    if (num == 20){
        document.getElementById("close").style.opacity = 1.0
        document.getElementById("element-"+app).style.opacity = 1.0
        document.getElementById("element2-"+app).style.opacity = 1.0
        document.getElementById("element3-"+app).style.opacity = 1.0
        document.getElementById("element4-"+app).style.opacity = 1.0
        document.getElementById("element5-"+app).style.opacity = 1.0
        document.getElementById("element6-"+app).style.opacity = 1.0
        document.getElementById("element7-"+app).style.opacity = 1.0
       
        var o = 0
        for (i in __item__){
            if (__item__[i] == path) {
                o++
                document.getElementById("wait").style.left = "450px"
                document.getElementById("load").style.opacity = 1.0
                document.getElementById("element3-"+app).innerHTML = (parseInt(document.getElementById("element3-"+app).innerHTML)+1).toString()+ " items | "
                // ajouter fichier
                const myTimeout = setTimeout(addFolder, 1000, i, o);
                
            }
        }
        clearInterval(inter)
    }
    
    
}

// close application folder

function closeFolder() {
    let app = "pc"
    // delete all window components
    document.getElementById("windows-"+app).style.opacity = 0.0
    document.getElementById("windows-"+app).style.width = "350px"
    document.getElementById("windows-"+app).style.height = "250px"
    document.getElementById("windows-"+app).style.left = "250px"
    document.getElementById("windows-"+app).style.top = "50px"
    document.getElementById("close").style.opacity = 0.0
    document.getElementById("element-"+app).style.opacity = 0.0
    document.getElementById("element2-"+app).style.opacity = 0.0
    document.getElementById("folder").innerHTML = ""
    document.getElementById("element3-"+app).style.opacity = 0.0
    document.getElementById("element3-"+"pc").innerHTML = "0 items | "
    document.getElementById("element5-"+app).style.opacity = 0.0
    document.getElementById("element6-"+app).style.opacity = 0.0
    document.getElementById("element4-"+app).style.opacity = 0.0
    document.getElementById("element7-"+app).style.opacity = 0.0
    document.getElementById("textFolder").innerHTML = ""
    path = ""
}

// add folder when enter a path

function addFolder(name, u) {
    document.getElementById("wait").style.left = "2450px"
    document.getElementById("load").style.opacity = 0.0
    var left = document.getElementById("windows-pc").style.left
    left = parseInt(left.slice(0, left.length - 2))+ 10 + 80 * (u -1)
    var top = document.getElementById("windows-pc").style.top
    top = parseInt(top.slice(0, top.length - 2)) + 90
    var icon = "folder.png"
    var db = "loadFolder"
    if (name.endsWith(".css")){
        icon = "vs-icon.png"
    }
    else if (name.endsWith(".png")){
        icon = "Photos-new-icon.png"
        db = "animationPhoto"
    }
    else if (name.endsWith(".gif")){
        icon = "Photos-new-icon.png"
        db = "animationPhoto"
    }
    

    document.querySelector('#folder').insertAdjacentHTML(
      'afterbegin',
      `
      <img class="folder" ondblclick="`+db+`('`+name+`')" width="64px" title="`+name+`" src="`+icon+`" style="position: fixed;top: `+top+`px; left: `+left+`px; margin: 20px">
      `      
    )
    document.querySelector('#textFolder').insertAdjacentHTML(
        'afterbegin',
        `
        <a width="64px" style="position: fixed; left: `+(left+10 - name.length)+`px; top: `+(top+64)+`px; margin: 20px; color: cornsilk; font-family: Arial, Helvetica, sans-serif;">`+name+`</a>
        `      
      )
  }
 
  // load folder when enter dir

  function loadFolder(dir) {
    document.getElementById("folder").innerHTML = ""
    document.getElementById("textFolder").innerHTML = ""
    document.getElementById("element3-"+"pc").innerHTML = "0 items | "
    path = path + dir + "/"
    document.getElementById("element7-pc").title = "c:"+path
    var u = 0
    for (i in __item__){
        
        if (__item__[i] == path) {
            u++
            document.getElementById("wait").style.left = "450px"
            document.getElementById("load").style.opacity = 1.0
            document.getElementById("element3-"+"pc").innerHTML = (parseInt(document.getElementById("element3-"+"pc").innerHTML)+1).toString()+ " items | "
            const myTimeout2 = setTimeout(addFolder, 1000, i, u);
        }
    }
  }

// start folder's lauch animation

function dblclicks() {
    num = 0
    inter = setInterval("openFolder()", 1)
    
}

// this is the end of the folder application ;)






// visual studio code application
// created on 07.01.22
// second working application on windows 10X2









// image application
// created on 08.01.22
// third working application on windows 10X2

var numer = 0

function openPhoto() {
    numer++
   app = "image"
    var op = parseFloat(document.getElementById("windows-"+"image").style.opacity)
        var wdth = document.getElementById("windows-"+"image").style.width
        var hght = document.getElementById("windows-"+"image").style.height
        document.getElementById("closePhoto").style.left = (parseInt(wdth.slice(0, wdth.length - 2))+parseInt(document.getElementById("windows-"+"image").style.left.slice(0, document.getElementById("windows-"+"image").style.left.length - 2))-45).toString() + "px"
        document.getElementById("closePhoto").style.top = (parseInt(document.getElementById("windows-"+"image").style.top.slice(0, document.getElementById("windows-"+"image").style.top.length - 2))).toString() + "px"
        document.getElementById("windows-"+app).style.left = (parseInt(window.screen.width/2 - parseInt(wdth.slice(0, wdth.length - 2))/2)).toString() + "px"
        document.getElementById("windows-"+app).style.top = (parseInt(window.screen.height/2 - parseInt(hght.slice(0, hght.length - 2))/2)-100).toString() + "px"
        document.getElementById("windows-"+app).style.opacity = (op + 0.05).toString()
        document.getElementById("windows-"+app).style.width = (parseInt(wdth.slice(0, wdth.length - 2)) + 10).toString() + "px"
        document.getElementById("windows-"+app).style.height = (parseInt(hght.slice(0, hght.length - 2)) + 10).toString() + "px"
    if (numer == 20){
        clearInterval(inter)
        document.getElementById("closePhoto").style.opacity = 1.0
        document.getElementById("imagew").style.opacity = 1.0
        document.getElementById("imagew").style.left = (parseInt(window.screen.width/2 - parseInt(document.getElementById("imagew").width/2))).toString() +"px"
        document.getElementById("imagew").style.top = (parseInt(window.screen.height/2 - parseInt(document.getElementById("imagew").height/2))-120).toString() +"px"
        document.getElementById("element-image").style.opacity = "1.0"
        document.getElementById("te").style.opacity = "1.0"
        document.getElementById("element-image").style.left = "451px"
        
    }
}

function closePhoto() {
    document.getElementById("windows-image").style.opacity = 0.0
    document.getElementById("windows-image").style.width = "350px"
    document.getElementById("windows-image").style.height = "250px"
    document.getElementById("windows-image").style.left = "2050px"
    document.getElementById("windows-image").style.top = "50px"
    document.getElementById("closePhoto").style.opacity = 0.0
    document.getElementById("imagew").style.opacity = 0.0
    document.getElementById("imagew").style.left = "2500px"
    document.getElementById("element-image").opacity = "0.0"
    document.getElementById("element-image").style.left = "2500px"
    document.getElementById("te").style.opacity = "0.0"
}

function loadImage(path) {
    
}

function zoomUp() {
    
}

function animationPhoto(d) {
    numer = 0
    inter = setInterval("openPhoto()", 1)
    document.getElementById("imagew").src = d
}



// set time

setInterval("setTime()", 1)

function windowsButtonHandler(params) {
    if (params == "hover"){

    }
    if (params == "click"){
        
    }
}


/* to do 

- 

*/


function getPos() {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    var coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("element-image").style.left = x+"px"
    document.getElementById("element-image").style.top = y+"px"
    document.getElementById("te").style.left = x+"px"
    document.getElementById("te").style.top = y+"px"
    document.getElementById("imagew").style.left = x+96+"px"
    document.getElementById("imagew").style.top = y+24+"px"
    document.getElementById("closePhoto").style.left = x+500+"px"
    document.getElementById("closePhoto").style.top = y+4+"px"
    document.getElementById("windows-image").style.left = x+"px"
    document.getElementById("windows-image").style.top = y+"px"
    document.getElementById("te").style.left = x+9+"px"
    document.getElementById("te").style.top = y+9+"px"
    document.getElementsByClassName("left")

}

function moveFolder() {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    document.getElementById("windows-pc").style.left = x+"px"
    document.getElementById("windows-pc").style.top = y+"px"
    for (var t = 0; t<document.getElementsByClassName("folder").length; t++){
        document.getElementsByClassName("folder")[t].style.left = x+9+parseInt(document.getElementsByClassName("folder")[t].style.left.slice(0, document.getElementsByClassName("folder")[t].style.left.length -2 ))+"px"
    }
}
