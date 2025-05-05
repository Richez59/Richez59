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
  const shareText = "Check out Nexus Bot! Join the channel here:\nhttps://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x";
  if (navigator.share) {
    navigator.share({
      title: 'Nexus-xmd',
      text: shareText,
      url: 'https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x'
    });
  } else {
    prompt("Copy and share this link with your friends:", shareText);
  }
}
