//Some animation for scrolling?
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, { threshold: 0.2 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


.reveal { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }


//button
const tabs = document.querySelectorAll('.tab-button');
const panels = document.querySelectorAll('.tab-panel');
tabs.forEach(tab => {
tab.addEventListener('click', () => {
panels.forEach(p => p.classList.remove('active'));
document.getElementById(tab.dataset.target).classList.add('active');
});
});