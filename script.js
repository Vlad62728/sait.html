// Массив с идентификаторами и соответствующими изображениями дипломов
const diplomas = {
    "324547": "diploma1.jpg",
    "38343132": "diploma2.jpg",
    "74751": "diploma3.jpg",
    "212452": "diploma4.jpg",
    "3003003245": "diploma5.jpg",
    "324567": "diploma6.jpg",
    "74651": "diploma7.jpg",
    "213456": "diploma8.jpg",
    "00000003245": "diploma9.jpg",
    "58349132": "diploma10.jpg",
    "12346001": "diploma11.jpg",
    "12345900": "diploma12.jpg",
    "14340900": "diploma13.jpg",
    "236433": "diploma14.jpg",
    "733765": "diploma15.jpg",
    "33535350": "diploma16.jpg",
    "22343201": "diploma17.jpg",
    "773465": "diploma18.jpg",
    "53505300": "diploma19.jpg",
    "236457": "diploma20.jpg",
    "428083": "diploma21.jpg",
    "0000": "diploma22.jpg"
};

function showDiploma() {
    const identifier = document.getElementById("identifierInput").value;
    const diplomaContainer = document.getElementById("diplomaContainer");
    const diplomaImage = document.getElementById("diplomaImage");

    if (diplomas[identifier]) {
        diplomaImage.src = diplomas[identifier];
        diplomaContainer.classList.remove("hidden");
    } else {
        diplomaContainer.classList.add("hidden");
        alert("Диплом с таким идентификатором не найден.");
    }
}