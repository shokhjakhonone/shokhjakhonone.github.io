const projectList = document.querySelector(".projects__list");

getProjects();

async function getProjects() {

    const response = await fetch("./js/projects.json");
    const data = await response.json();

    renderProjects(data);
    return data;
}


// Рендерим проекты в index.html
function renderProjects(data) {

    data.forEach(item => {
        let li = document.createElement("li");

        li.classList.add("project__item");
        li.dataset.id = item.id;

        // У ссылки а есть строка запроса ?id=${item.id}. Это будет равно id = 1,2,3,4
        li.innerHTML = ` <a class="project__link" href="./project-page.html?name=${item.name}" > 
                            <img class="project__img" src=${item.imgSrc} alt=${item.name}>
                            <h3 class="project-link__title">${item.name}</h3>
                        </a>`

        projectList.insertAdjacentElement("beforeend", li);

    });
}