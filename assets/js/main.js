function isCorrectNumFormat() {
    const num = document.getElementById("mobilePhone")
    num.addEventListener('keydown', (e) => {
        if (e.keyCode === 8) {
            num.value = "+994 "
        }
    })
}

window.onload = function () {
    for (let i = 0; i < document.querySelectorAll('.datepicker').length; i++) {
        document.querySelectorAll('.datepicker')[i].value = (new Date()).toISOString().substr(0, 10);
    }
}

window.addEventListener("DOMContentLoaded", (event) => {

    const newButton = document.getElementById('newButton')

    if (newButton) {
        newButton.addEventListener("click", function duplicateEducationForm(event) {
            const section = document.getElementById('educationForm');
            let forms = section.getElementsByClassName('education-form');
            let firstForm = forms[0];
            let formClone = firstForm.cloneNode(true);
            section.appendChild(formClone);
        })
    }

    const newExperience = document.getElementById('newExperienceBtn')

    if (newExperience) {
        newExperience.addEventListener("click", function duplicateExperienceForm(event) {
            const section = document.getElementById('workExperience');
            let forms = section.getElementsByClassName('work-experience');
            let firstForm = forms[0];
            let formClone = firstForm.cloneNode(true);
            section.appendChild(formClone);
        })
    }

    event.preventDefault()

})

function duplicateSkillsForm() {
    const section = document.getElementById('skillsForm');
    const element = document.createElement('form')
    element.classList.add('row')
    element.innerHTML = ' <form class="row">\n' +
        '            <div class="col-xs-12 xol-sm-12 col-md-6 col-lg-6 col-xl-6">\n' +
        '                <div class="float-container">\n' +
        '                    <div class="did-floating-label-content">\n' +
        '                        <select class="did-floating-select did-floating-select-icon skills-select"\n' +
        '                                onclick="this.setAttribute(\'value\', this.value);"\n' +
        '                                onchange="this.setAttribute(\'value\', this.value);" value="">\n' +
        '                            <option selected="selected" hidden value="0">Dil seçin</option>\n' +
        '                            <option value="1"></option>\n' +
        '                            <option value="2"></option>\n' +
        '                        </select>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="col-xs-12 xol-sm-12 col-md-6 col-lg-6 col-xl-6">\n' +
        '                <div class="did-floating-label-content d-flex">\n' +
        '                    <select class="did-floating-select did-floating-select-icon skills-select"\n' +
        '                            onclick="this.setAttribute(\'value\', this.value);"\n' +
        '                            onchange="this.setAttribute(\'value\', this.value);" value="">\n' +
        '                        <option selected="selected" hidden value="0">Bilik səviyyəsi</option>\n' +
        '                        <option value="1"></option>\n' +
        '                        <option value="2"></option>\n' +
        '                    </select>\n' +
        '\n' +
        '                    <button type="button" class="btn btn-outline-danger">\n' +
        '                        <span aria-hidden="true"\n' +
        '                              data-icon="&#xe9ac;"></span>\n' +
        '                    </button>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </form>'

        section.append(element)
}