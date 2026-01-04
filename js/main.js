// 1. Fade-in card layanan
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.1 };
const appearOnScroll = new IntersectionObserver((entries, observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// 2. Scroll ke booking dari tombol banner
function scrollToBooking(){
  document.getElementById('booking').scrollIntoView({behavior: 'smooth'});
}

// 3. Navbar scroll + smooth scroll ← INI BAGIAN NOMOR 3
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

document.querySelectorAll('#navbar .nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 4. Form Booking langsung ke WhatsApp
document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();

  const nama = encodeURIComponent(document.getElementById('nama').value);
  const wa = encodeURIComponent(document.getElementById('whatsapp').value);
  const layanan = encodeURIComponent(document.getElementById('layanan').value);
  const tanggal = encodeURIComponent(document.getElementById('tanggal').value);
  const jam = encodeURIComponent(document.getElementById('jam').value);
  const alamat = encodeURIComponent(document.getElementById('alamat').value);

  const pesan = `Halo Admin, saya ingin booking:%0ANama: ${nama}%0ANo WA: ${wa}%0ALayanan: ${layanan}%0ATanggal: ${tanggal} Jam: ${jam}%0AAlamat: ${alamat}`;

  window.open(`https://wa.me/6282113895871?text=${pesan}`, '_blank');
});

