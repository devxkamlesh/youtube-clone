 const showMenu = (headerToggle, navbarId) => {
   const toggleBtn = document.getElementById(headerToggle),
     nav = document.getElementById(navbarId)

   if (headerToggle && navbarId) {
     toggleBtn.addEventListener('click', () => {
       nav.classList.toggle('show-menu')
       toggleBtn.classList.toggle('fa-times')
     })
   }
 }
 showMenu('header-toggle', 'navbar')

 const linkcolor = document.querySelectorAll('.nav_link');

 function colorLink() {
   linkcolor.forEach(l => l.classList.remove('active'))
   this.classList.add('active')
 }
 linkcolor.forEach(l => l.addEventListener('click', colorLink))



 //code for random number of views and upload date
 // Utility function to generate random views
function getRandomViews() {
  return Math.floor(Math.random() * 100) + "M";
}

// Utility function to generate random "time ago"
function getRandomTimeAgo() {
  const times = [
    "1 Hour ago",
    "5 Hours ago",
    "1 Day ago",
    "3 Days ago",
    "1 Week ago",
    "2 Weeks ago",
    "1 Month ago",
    "1 Year  ago",
  ];
  return times[Math.floor(Math.random() * times.length)];
}

// Assign random views and time ago to video elements
document.querySelectorAll(".video_items").forEach(video => {
  const details = video.querySelector(".details .heading span:nth-child(2)");
  if (details) {
    details.innerText = `${getRandomViews()} . ${getRandomTimeAgo()}`;
  }
});
