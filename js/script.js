// ========================== Show Reviews Section ==========================

// Add event listener to the "Reviews" link in the navigation
document.querySelector('.nav-link[href="#reviews"]').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior (instant jump)
  
    // Get the reviews section element
    const reviewSection = document.getElementById('reviews');
  
    // Remove the 'hidden' class to make the reviews section visible
    reviewSection.classList.remove('hidden');
  
    // Smoothly scroll to the reviews section
    reviewSection.scrollIntoView({ behavior: 'smooth' });
  });

  // ========================== Show Community Section ==========================
document.getElementById('communityLink').addEventListener('click', (e) => {
  e.preventDefault();

  // Hide all other sections
  document.getElementById('reviews').classList.add('hidden');
  document.getElementById('home').classList.add('hidden');
  
  // Show the community section
  document.getElementById('community').classList.remove('hidden');

  // Smooth scroll to the community section
  document.getElementById('community').scrollIntoView({ behavior: 'smooth' });
});