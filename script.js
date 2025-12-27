document.addEventListener('DOMContentLoaded', function() {
    const highlightLinks = document.querySelectorAll('.highlight-link[data-description]');
    
    highlightLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const description = this.getAttribute('data-description');
            const parentParagraph = this.closest('p');
            const linkId = this.textContent.trim().toLowerCase().replace(/[^a-z0-9]/g, '-');
            
            // Check if description already exists for this link
            let descriptionElement = document.getElementById(`desc-${linkId}`);
            
            if (descriptionElement) {
                // Toggle existing description
                const isActive = descriptionElement.classList.contains('active');
                descriptionElement.classList.toggle('active');
                
                // If closing, remove after animation completes
                if (isActive) {
                    setTimeout(() => {
                        if (!descriptionElement.classList.contains('active')) {
                            descriptionElement.remove();
                        }
                    }, 600);
                }
            } else {
                // Create new description element
                descriptionElement = document.createElement('div');
                descriptionElement.id = `desc-${linkId}`;
                descriptionElement.className = 'description-text';
                descriptionElement.innerHTML = description;
                
                // Ensure Ando always appears before Alloy
                const alloyDesc = document.getElementById('desc-alloy');
                const andoDesc = document.getElementById('desc-ando');
                
                if (linkId === 'ando') {
                    // If Alloy exists, insert Ando before it
                    if (alloyDesc) {
                        alloyDesc.insertAdjacentElement('beforebegin', descriptionElement);
                    } else {
                        // Insert after the parent paragraph
                        parentParagraph.insertAdjacentElement('afterend', descriptionElement);
                    }
                } else if (linkId === 'alloy') {
                    // If Ando exists, insert Alloy after it
                    if (andoDesc) {
                        andoDesc.insertAdjacentElement('afterend', descriptionElement);
                    } else {
                        // Insert after the parent paragraph
                        parentParagraph.insertAdjacentElement('afterend', descriptionElement);
                    }
                } else {
                    // For other links, insert after the parent paragraph
                    parentParagraph.insertAdjacentElement('afterend', descriptionElement);
                }
                
                // Trigger animation
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        descriptionElement.classList.add('active');
                    });
                });
            }
        });
    });
});
