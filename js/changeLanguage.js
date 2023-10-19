function changeLanguage(language, index){
    closeMainDetails()
    document.querySelectorAll('[textValue]').forEach(el=>{
        el.textContent = languages[language][el.getAttribute('textValue')]
    })
    document.querySelector(".current_language").innerHTML = document.querySelectorAll('.language_item')[index].textContent
    localStorage.setItem("language", JSON.stringify(language))
    localStorage.setItem("languageId", JSON.stringify(index))
    saveUnits()
    selectShape(JSON.parse(localStorage.getItem("shape")))
}
