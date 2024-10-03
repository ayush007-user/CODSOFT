document.querySelector('.download-btn').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'ayushkumar.pdf'; 
  link.download = 'ayushkumar.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
