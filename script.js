


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("[id^='toggle-']");
    
    buttons.forEach(button => { 
        button.addEventListener("click", function() { 
            const cardName = this.id.replace("toggle-", ""); 

            const targetSection = document.getElementById("section-" + cardName); 
            if (targetSection) {
                targetSection.classList.toggle("show"); 
                this.scrollIntoView({behavior: "smooth", block: "start"});
            }
        });
    });
});
