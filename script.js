document.addEventListener('DOMContentLoaded', () => {
  const loginLink = document.getElementById('loginLink');
  const modal = document.getElementById('loginModal');
  const closeModal = document.getElementById('closeModal');
  const registerBtn = document.getElementById('registerBtn');
  const loginForm = document.getElementById('loginForm');

  // Open Login Modal
  loginLink.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // Close Login Modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  // Form submission for login
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    if (result.success) {
      modal.style.display = 'none';
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  });

  // Handle User Registration
  registerBtn.addEventListener('click', () => {
    alert('Redirect to Register page');
    // Add registration logic here
  });
});

async function choosePlan(plan) {
  alert(`You chose the ${plan} plan`);
  // Stripe Payment Integration
  // Redirect to payment page
}

function listBook() {
  alert('Redirect to list your book page');
}
