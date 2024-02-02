/*function kaydet() {
    event.preventDefault();
    const kullaniciAdi = document.getElementById("kullaniciAdi").value;
    const sifre = document.getElementById("sifre").value;

    const kayitBilgileri = {
        kullaniciAdi: kullaniciAdi,
        sifre: sifre
    };

    localStorage.setItem('kayitBilgileri', JSON.stringify(kayitBilgileri));

    document.getElementById("kayitFormu").style.display = "none";
    
}

function giris() {
    event.preventDefault();
    const girisKullaniciAdi = document.getElementById("girisKullaniciAdi").value;
    const girisSifre = document.getElementById("girisSifre").value;

    // localStorage'den kayıt bilgilerini al
    const kaydedilenBilgiler = JSON.parse(localStorage.getItem('kayitBilgileri')) || {};

    if (kaydedilenBilgiler && girisKullaniciAdi === kaydedilenBilgiler.kullaniciAdi && girisSifre === kaydedilenBilgiler.sifre) {
        document.getElementById("uyariMesaji").innerText = "Giriş Başarılı!";

        window.location.href = "https://example.com"; 
    } else {
        document.getElementById("uyariMesaji").innerText = "Giriş Bilgileri Yanlış!";
    }
}

function goToGirisForm() {
    document.getElementById("kayitFormu").style.display = "none";
    document.getElementById("girisFormu").style.display = "block";
}
 */