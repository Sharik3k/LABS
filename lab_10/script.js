
const photos = document.querySelectorAll(".photo");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close");

photos.forEach(photo => {
    photo.addEventListener("click", () => {
        const title = photo.getAttribute("data-title");
        const description = photo.getAttribute("data-description");

 
        modalTitle.textContent = title;
        modalDescription.textContent = description;


        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
