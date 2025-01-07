emailjs.init("_M7ngGIpHu7tkhkje"); // User ID 초기화
  
document.getElementById('email-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = {
      company: document.getElementById('company').value,
      manager: document.getElementById('manager').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      department: document.getElementById('department').value,
      position: document.getElementById('position').value,
      content: document.getElementById('content').value
  };
  emailjs
    .send('service_vw4pdym', 'template_2925aiu', formData)
    .then(function(response) {
      alert('Email sent successfully!');
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch(function(error) {
      alert('Failed to send email.');
      console.error('FAILED...', error);
    });
});