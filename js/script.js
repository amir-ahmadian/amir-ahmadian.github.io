// DOM Elements
const body = document.body;

// Set the current page link's background color
document.addEventListener("DOMContentLoaded", function() 
{
    var relativeAddress = window.location.pathname;
    var linkElement = document.getElementById(relativeAddress);
    if (linkElement != null)
    {
      linkElement.classList.add("current-link");
    }
    

    // Apply the cached theme on reload
    var storedTheme = localStorage.getItem('theme');
    if (storedTheme)
        document.documentElement.setAttribute('data-theme', storedTheme);
    else
    {
      // Get system them
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
      {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    }
  });

// Change Theme
function toggleTheme()
{
    var currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "light") 
    {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else
    {
        document.documentElement.setAttribute('data-theme', "light");
        localStorage.setItem('theme', "light");
    }
}


// Go to top
var goToTopButton = document.getElementById("goToTopBtn");
window.onscroll = function() { scrollFunction(); };

function scrollFunction() 
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
    {
        goToTopButton.style.display = "block";
    } 
    else 
    {
        goToTopButton.style.display = "none";
    }
}

function goToTop() 
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


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
