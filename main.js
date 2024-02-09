function clickAccordion(t){
    var wrapper = document.getElementsByClassName('wrapper-faq')[t].parentElement;
    var icone = document.getElementsByClassName('ri-add-fill icon');
    var content = wrapper.classList.contains('sectionHide');
    var sections = document.getElementsByClassName('section-faq');

    if (content == true){
        for (var s=0;s< sections.length;s++){
            sections[s].classList= "section-faq sectionHide";
            icone[s].style.transform = "rotate(0deg)";
        }
        wrapper.className = "section-faq sectionShow";
        icone[t].style.transform = "rotate(45deg)";
    }else{
        wrapper.className = "section-faq sectionHide";
        icone[t].style.transform = "rotate(0deg)";
    }
}