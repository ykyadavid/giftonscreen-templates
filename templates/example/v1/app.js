// Example Template JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const data = window.GIFT_DATA || {};
  
  // Set recipient name
  const recipientEl = document.getElementById('recipient');
  const messageEl = document.getElementById('message');
  const mediaEl = document.getElementById('media');
  
  if (recipientEl) {
    recipientEl.textContent = data.recipient_name || 'Dear Friend';
  }
  
  if (messageEl) {
    messageEl.textContent = data.message || '';
  }
  
  // Load photos if present
  if (data.photos?.length && mediaEl) {
    data.photos.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo;
      img.alt = 'Gift photo';
      mediaEl.appendChild(img);
    });
  }
});