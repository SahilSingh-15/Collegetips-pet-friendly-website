// Form Validation & Submission
document.getElementById('volunteerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      city: document.getElementById('city').value,
      role: document.getElementById('role').value,
      message: document.getElementById('message').value
    };
  
    // Simple validation
    if (!formData.name || !formData.email || !formData.city || !formData.role) {
      alert('Please fill in all required fields!');
      return;
    }
  
    // In a real app, you would send this to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    alert(`Thanks, ${formData.name}! We'll contact you soon about volunteering as a ${formData.role}.`);
    this.reset();
  });
  
  // Load More Stories Button (Mock)
  document.getElementById('loadMoreStories').addEventListener('click', function() {
    // In a real app, this would fetch more stories from an API
    this.textContent = 'More stories coming soon!';
    this.disabled = true;
    
    // Simulate loading
    setTimeout(() => {
      alert('Check back later for new stories!');
    }, 1000);
  });