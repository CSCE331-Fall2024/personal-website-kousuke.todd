function toggle() {
    let style = document.getElementById("style");
    let bg = document.getElementById("homepageBackground")
    console.log(style)
    if (style.href.includes("style1.css")) {
        style.href = "style2.css";
        bg.src = "beigebg.jpg";
    }
    else {
        style.href = "style1.css"
        bg.src = "homepageBackground.png";
    }
    localStorage.setItem("style", style.href);
}

document.addEventListener('DOMContentLoaded', function () {
    let style = localStorage.getItem("style");
    let toSet = document.getElementById("style");
    let bg = document.getElementById("homepageBackground");
    if (style.includes("style1.css") && window.location.pathname.includes("index.html")) {
        bg.src = "homepageBackground.png"
    }
    else if (style.includes("style2.css") && window.location.pathname.includes("index.html")) {
        bg.src = "beigebg.jpg";
    }
    toSet.href = style;
}, false);