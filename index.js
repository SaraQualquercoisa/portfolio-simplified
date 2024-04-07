//- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
//Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
//Passo 2 - identificar o clique no botão 


const buttonShowProjects = document.querySelector('.btn-show-projects');
const projectsInactives = document.querySelectorAll('.project:not(.ativo)');

buttonShowProjects.addEventListener('click',() => {
    //Passo 3 - adicionar a classe ativo nos projetos escondidos
    showMoreProjects();

//- Objetivo 2 - esconder o botão de mostrar mais 
// Passo 1 - pegar o botão e esconder ele
    HideButton();
})
function HideButton() {
    buttonShowProjects.classList.add("remover");
}

function showMoreProjects() {
    projectsInactives.forEach(projectInactive => {
        projectInactive.classList.add('active');
    });
}

