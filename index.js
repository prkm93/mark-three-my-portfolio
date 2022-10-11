const projectSectionContent = document.querySelector('.section-content__projects');
import {projectData} from './js/data.js'; 

const renderDetailBox = (item, i) => {
    let detailBox = `<article class="detail-boxes" id=${i}>
                        <div class="detail-box">
                            <h2>${item.projectName}</h2>
                            <p class="detail-box__date">${item.date}</p>
                            <p class="detail-box__description">${item.description}</p>
                            <div class="detail-box__links">
                                <a href=${item.liveProjectLink} class="detail-box__project" target="_blank">Live Project</a>
                                <a href=${item.sourceCodeLink} class="detail-box__source" target="_blank">View Source</a>
                            </div>
                        </div>
                     </article>`;
    projectSectionContent.innerHTML += detailBox;
}

projectData.forEach((item, i) => {
    renderDetailBox(item, i);
})

