// script.js
document.addEventListener('DOMContentLoaded', () => {
    const infoTrigger = document.getElementById('infoTrigger');
    const infoModal = document.getElementById('infoModal');
    const closeButton = document.querySelector('.close-button');

    const openModal = () => {
        infoModal.classList.add('show');
        infoModal.setAttribute('aria-modal', 'true');
        infoModal.setAttribute('role', 'dialog');
        infoModal.focus();
    };

    const closeModal = () => {
        infoModal.classList.remove('show');
        infoModal.removeAttribute('aria-modal');
        infoModal.removeAttribute('role');
        infoTrigger.focus();
    };

    if (infoTrigger && infoModal) {
        infoTrigger.addEventListener('click', openModal);
    }
    if (closeButton && infoModal) {
        closeButton.addEventListener('click', closeModal);
    }
    if (infoModal) {
        infoModal.addEventListener('click', (event) => {
            if (event.target === infoModal) closeModal();
        });
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && infoModal.classList.contains('show')) closeModal();
    });
});
 
