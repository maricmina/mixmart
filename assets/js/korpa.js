$(document).ready(function () {
    ispisiProizvode(sve);
    $(".shop-items").on("click", ".shop-item-button", dodajUKorpu_klik);
    $(".btn-purchase").click(kupi);
});

function ispisiMeni(nizMeni) {
    let sadrzajZaIspis = "";

    for(let meni of nizMeni) {
        sadrzajZaIspis += `<li class="nav-item mx-3">
        <a class="nav-link text-dark hover" href="${meni.href}"><p>${meni.text}</p></a>
      </li>`;
    }
    
    $("#meniispis").html(sadrzajZaIspis);
}

function ispisiProizvode(niz) {
    let ispisProizvoda = "";

    for (let proizvod of niz) {
        ispisProizvoda += `<div class="col-xl-3 d-flex justify-content-around align-items-center card2 shop-item">
                                <div class="slikaDiv">
                                    <img src="${proizvod.src}" alt="${proizvod.naziv}" class="shop-item-image"/>
                                </div>
                                <div id="tekstProizvoda">
                                    <h6 class="text-center shop-item-title">${proizvod.naziv}</h6>
                                    <p class="text-center shop-item-price">${proizvod.cena.cenaSaSajta}</p>
                                    <button class="shop-item-button" type="button">Dodaj u korpu</button>
                                </div>
                            </div>`;
    }

    $("#sviProizvodi").html(ispisProizvoda);
}

function kupi() {
    $(".cart-items").empty();
    updateKorpa();
}

function ukloni(event) {
    var kliknutTaster = event.target;
    kliknutTaster.parentElement.parentElement.remove();
    updateKorpa();
}

function kolicina(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateKorpa();
}

function dodajUKorpu_klik(event) {
    var taster = event.target;
    var proizvodZaKupovinu = taster.closest(".shop-item");
    var naslov = proizvodZaKupovinu.querySelector('.shop-item-title').innerText;
    var cena = proizvodZaKupovinu.querySelector('.shop-item-price').innerText;
    var imageSrc = proizvodZaKupovinu.querySelector('.shop-item-image').src;
    dodajUKorpu(naslov, cena, imageSrc);
    updateKorpa();
}

function dodajUKorpu(naslov, cena, imageSrc) {
    var proizvodKorpa = document.createElement('div');
    proizvodKorpa.classList.add('cart-row');
    var proizvodi = document.getElementsByClassName('cart-items')[0];
    var proizvodiNazivi = proizvodi.getElementsByClassName('cart-item-title');
    for (var i = 0; i < proizvodiNazivi.length; i++) {
        if (proizvodiNazivi[i].innerText == naslov) {
            document.getElementById('spanKorpa').textContent = "Proizvod je već dodat u korpu!";
            return;
        }
    }
    var ispisProizvodaUKorpu = `
        <div class="cart-item cart-column">
            <img class="cart-item-image mt-3" src="${imageSrc}" width="50" height="60">
            <p class="cart-item-title mt-3">${naslov}</p>
        </div>
        <p class="cart-price cart-column mb-3">${cena}</p>
        <div class="cart-quantity cart-column d-flex justify-content-around align-items-center">
            <input class="cart-quantity-input form-control" type="number" value="1">
            <button class="btn btn-danger mt-2 mb-5" type="button" id="korpaBtn">Ukloni</button>
        </div>`;
    proizvodKorpa.innerHTML = ispisProizvodaUKorpu;
    proizvodi.append(proizvodKorpa);
    proizvodKorpa.getElementsByClassName('btn-danger')[0].addEventListener('click', ukloni);
    proizvodKorpa.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', kolicina);
}

function updateKorpa() {
    var korpaContainer = document.getElementsByClassName('cart-items')[0];
    var korpaProizvodi = korpaContainer.getElementsByClassName('cart-row');
    var ukupno = 0;
    for (var i = 0; i < korpaProizvodi.length; i++) {
        var korpaProizvod = korpaProizvodi[i];
        var cenaEl = korpaProizvod.getElementsByClassName('cart-price')[0];
        var kolicinaEl = korpaProizvod.getElementsByClassName('cart-quantity-input')[0];
        var cena = parseFloat(cenaEl.innerText.replace('$', ''));
        var kolicina = kolicinaEl.value;
        ukupno = ukupno + (cena * kolicina);
    }
    ukupno = Math.round(ukupno * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = ukupno + ' RSD';
}
