// To copy bib citation text
function copyText(modalId) {
    const copyBtnElement = document.getElementById(`citationModalCopyBtn-${modalId}`);
    const textToCopy = document.getElementById(`citationModalBodyText-${modalId}`).textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtnElement.classList.remove("fa-copy");
        copyBtnElement.classList.add("fa-check");
        copyBtnElement.classList.add("copy-success-class");
    }).catch(err => {
        console.error('Error copying citation: ', err);
    });
}

// Add event listener to revert icon when the modal closes
document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('hidden.bs.modal', () => {
            const button = modal.querySelector('.btn-modal i');
            if (button) {
                button.classList.remove('fa-check');
                button.classList.remove('copy-success-class');
                button.classList.add('fa-copy');
            }
        });
    });
});
