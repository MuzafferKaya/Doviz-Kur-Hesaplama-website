var tutar, usdAlis, usdSatis, euroAlis, euroSatis, ddlBir, ddlİki, sonuc;

function kurGetir() {
    tutar = document.getElementById("tutar");
    usdAlis = document.getElementById("usdAlis");
    usdSatis = document.getElementById("usdSatis");
    euroAlis = document.getElementById("euroAlis");
    euroSatis = document.getElementById("euroSatis");
    sterlinAlis = document.getElementById("sterlinAlis");
    sterlinSatis = document.getElementById("sterlinSatis");
    ddlBir = document.getElementById("ddlBir");
    ddlİki = document.getElementById("ddlİki");
    sonuc = document.getElementById("sonuc");

    fetch('http://hasanadiguzel.com.tr/api/kurgetir')
        .then(response => response.json())
        .then(data => {
            console.log(data.TCMB_AnlikKurBilgileri);
            usdAlis.innerText = data.TCMB_AnlikKurBilgileri[0].BanknoteBuying + "₺";
            usdSatis.innerText = data.TCMB_AnlikKurBilgileri[0].BanknoteSelling + "₺";

            euroAlis.innerText = data.TCMB_AnlikKurBilgileri[3].BanknoteBuying + "₺";
            euroSatis.innerText = data.TCMB_AnlikKurBilgileri[3].BanknoteSelling + "₺";
        });
}

function hesapla() {
    switch (ddlBir.value + "-" + ddlİki.value) {
        case "tl-usd":
            sonuc.value = tutar.value / parseFloat(usdAlis.innerText);
            break;
        case "tl-eur":
            sonuc.value = tutar.value / parseFloat(euroAlis.innerText);
            break;

        case "usd-tl":
            sonuc.value = tutar.value * parseFloat(usdAlis.innerText);
            break;
        case "usd-eur":
            sonuc.value = (tutar.value * parseFloat(usdAlis.innerText)) / parseFloat(euroAlis.innerText);
            break;

        case "eur-usd":
            sonuc.value = (tutar.value * parseFloat(euroAlis.innerText)) / parseFloat(usdAlis.innerText);
            break;
        case "eur-tl":
            sonuc.value = tutar.value * parseFloat(euroAlis.innerText);
            break;
    }
}