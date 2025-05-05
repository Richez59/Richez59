// Live Clock
function updateClock() {
  const now = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  };
  document.getElementById('clock').textContent = now.toLocaleString(undefined, options);
}
setInterval(updateClock, 1000);
updateClock();

// Share to Friends
function shareToFriend() {
  const shareText = "Check out Teddy-xmd Bot! Join the Group here:\nhttps://chat.whatsapp.com/KnL0Ft6gvHDGP2lH3oN5Z5";
  if (navigator.share) {
    navigator.share({
      title: 'Teddy-xmd',
      text: shareText,
      url: 'https://chat.whatsapp.com/KnL0Ft6gvHDGP2lH3oN5Z5'
    });
  } else {
    prompt("Copy and share this link with your friends:", shareText);
  }
}
