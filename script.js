function showMessage() {
  alert("Semangat Belajar Web!");
}

function showDate() {
  const sekarang = new Date();
  const tanggalIndonesia = sekarang.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('date').innerText = tanggalIndonesia;
}

var i = 0;
var txt = 'Saya Ilham Mustaqim'; 
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
  showDate();
  typeWriter();
};