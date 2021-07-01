let durmusbutton = document.getElementById("durmus")
let eminbutton = document.getElementById("emin")
let muhammedbutton = document.getElementById("muhammed")
let captureText = document.getElementById("captureText")
let captureID = "durmus";
let divName = "Durmuş Kartcı"

durmusbutton.onclick = function() {
    captureID = "durmus"
    captureText.innerHTML = "Durmuş Kartcı"
    divName = "Durmuş Kartcı";
}
eminbutton.onclick = function() {
    captureID = "emin"
    captureText.innerHTML = "Emin Kartcı"
    divName = "Emin Kartcı";
}
muhammedbutton.onclick = function() {
    captureID = "muhammed"
    captureText.innerHTML = "Muhammed Fatih Kartcı"
    divName = "Muhammed Fatih Kartcı";
}


async function doCapture() {



    html2canvas(document.getElementById(captureID)).then(async function(canvas) {

        const image = await fetch(canvas.toDataURL("image/png", 0.9))
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)

        const link = document.createElement('a')
        link.href = imageURL
        link.download = divName;
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        //     saveAs(canvas.doDataURL("image/png", 0.9), "image.png");

        //     // console.log(canvas.toDataURL("image/jpeg", 0.9));
        //     // var ajax = new XMLHttpRequest();

        //     // ajax.open("POST", "save-capture.php", true);
        //     // ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        //     // ajax.send("image=" + canvas.toDataURL("image/jpeg", 0.9));

        //     // ajax.onreadystatechange = function() {
        //     //     if (this.readyState == 4 && this.status == 200) {
        //     //         console.log(this.responseText)
        //     //     }
        //     // }
    });
}