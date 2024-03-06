//window.onload = function(){
//     $(document).on("change", "#ddlKnjige", promena);
//     $(document).on("change", "#ddlSolje", promena);
//     $(document).on("change", "#ddlprenosiveSolje", promena);
//     $(document).on("change", "#ddlSveske", promena);
//     $(document).on("change", "#ddlStilorke", promena);
//     $(document).on("change", "#ddlPokloni", promena);
// }
// function ispisiMeni(nizMeni) {
//     let sadrzajZaIspis = "";

//     for(let meni of nizMeni) {
//         sadrzajZaIspis += `<li class="nav-item mx-3">
//                             <a class="nav-link text-dark hover" href="${meni.href}"><p>${meni.text}</p></a>
//                            </li>`;
//     }

//     $("#meniispis1").html(sadrzajZaIspis);
// }
// function promena(){
//     let proizvodi = dohvatiIzLocalStorage("sveKnjige");
 
//     ajaxCallback("knjige.json", function(rezultat){
//         ispisProizvoda(rezultat);
//         sacuvajLocalStorage("sveKnjige", rezultat);
//     })

//     ajaxCallback("solje.json", function(rezultat){
//         kreirajPadajucuListu(rezultat, "ddlSolje", "Solje", "ispis-solje", "solje");
//         sacuvajLocalStorage("sveSolje", rezultat);
//     })

//     ajaxCallback("prenosiveSolje.json", function(rezultat){
//         kreirajPadajucuListu(rezultat, "ddlprenosiveSolje", "prenosiveSolje", "ispis-prenosiveSolje", "prenosiveSolje");
//         sacuvajLocalStorage("svePrenosiveSolje", rezultat);
//     })

//     ajaxCallback("sveske.json", function(rezultat){
//         kreirajPadajucuListu(rezultat, "ddlSveske", "Sveske", "ispis-sveske", "sveske");
//         sacuvajLocalStorage("sveSveske", rezultat);
//     })

//     ajaxCallback("stilorke.json", function(rezultat){
//         kreirajPadajucuListu(rezultat, "ddlStilorke", "Stilorke", "ispis-stilorke", "stilorke");
//         sacuvajLocalStorage("sveStilorke", rezultat);
//     })

//     ajaxCallback("pokloni.json", function(rezultat){
//         kreirajPadajucuListu(rezultat, "ddlPokloni", "Pokloni", "ispis-pokloni", "pokloni");
//         sacuvajLocalStorage("sviPokloni", rezultat);
//     })

//     ispisProizvoda(proizvodi);
// }
//  function filtriranje(nizProizvoda, tip){
//      let filtriraniNiz = [];
//      let id = null;
//      let svojstvo = null;
 
//      if(tip == "kat"){
//          id = $("#ddlKat").val();
//          svojstvo = "kategorijaID";
//      }
//      if(tip == "brend"){
//          id = $("#ddlBrend").val();
//          svojstvo = "brendID";
//      }
//      if(tip == "popust"){
//          id = $("#ddlPopust").val();
//          svojstvo = "popustID";
//      }
 
//      if(id == "0"){
//          filtriraniNiz = nizProizvoda;
//      }
//      else{
//          filtriraniNiz = nizProizvoda.filter(proizvod => proizvod[svojstvo] == id);
//      }
 
//      return filtriraniNiz;
//  }
// function sortiranje(nizProizvodi){
//     let sortiraniProizvodi = [];
//     let opcija = $("#ddlSort").val();

//     if(opcija == "0"){
//         sortiraniProizvodi = nizProizvodi;
//     }

//     else{
//         sortiraniProizvodi = nizProizvodi.sort(function(prvaOpcija, drugaOpcija){
//             if(opcija == "cena-asc"){
//                 return prvaOpcija.cena.aktuelnaCena - drugaOpcija.cena.aktuelnaCena;
//             }
//             if(opcija == "cena-desc"){
//                 return drugaOpcija.cena.aktuelnaCena - prvaOpcija.cena.aktuelnaCena;
//             }

//             if(opcija == "naziv-asc"){
//                 if(prvaOpcija.naziv < drugaOpcija.naziv){
//                     return -1;
//                 }
//                 else if(prvaOpcija.naziv > drugaOpcija.naziv){
//                     return 1;
//                 }
//                 else{
//                     return 0;
//                 }
//             }
//             if(opcija == "naziv-desc"){
//                 if(prvaOpcija.naziv > drugaOpcija.naziv){
//                     return -1;
//                 }
//                 else if(prvaOpcija.naziv < drugaOpcija.naziv){
//                     return 1;
//                 }
//                 else{
//                     return 0;
//                 }
//             }   
//         })
//     }
//     return sortiraniProizvodi;
// }
// function sacuvajLocalStorage(naziv, vrednost){
//     localStorage.setItem(naziv, JSON.stringify(vrednost));
// }
// function dohvatiIzLocalStorage(naziv){
//     return JSON.parse(localStorage.getItem(naziv));
// }
// function kreirajPadajucuListu(niz, idListe, labela, idDiv, tip){
//     let html = `<div class="form-group">
//                     <label class="form-label">${labela}</label>
//                     <select class="form-select" id="${idListe}">
//                         <option value="0">Izaberite</option>`;
//                         for(let obj of niz){
//                             if(tip == "sort"){
//                                 html += `<option value="${obj.vrednost}">${obj.naziv}</option>`
//                             }
//                             else{
//                                 html += `<option value="${obj.id}">${obj.naziv}</option>`
//                             }
//                         }
//                     html += `</select>
//                 </div>`;

//     document.querySelector(`#${idDiv}`).innerHTML = html;
// }
// function ispisProizvoda(niz){
//     let html = "";

//     if(niz.length == 0){
//         html += `<div class="row">
//                     <div class="col-12">
//                         <p class="alert alert-danger">Trenutno nema proizvoda.</p>
//                     </div>
//                 </div>`;
//     }

//     else{
//         for(let objProizvod of niz){
//             html += `<div class="row my-3 border">
//                         <div class="col-4">
//                             <img src="${objProizvod.slika}" alt="${objProizvod.naziv}"  width="300px"/>
//                         </div>
//                         <div class="col-8">
//                             <h3>${objProizvod.naziv}</h3>
//                             <p>${ispisiNaziv(objProizvod.kategorijaID, "sveSolje")}</p>
//                             <p class="alert alert-info">${ispisiNaziv(objProizvod.brendID, "sviBrendovi")}</p>
//                             <hr />
//                             ${obradaDostave(objProizvod.besplatnaDostava)}
//                             ${obradaPopusta(objProizvod.popustID, "sviPopusti")}
//                             ${obradaCene(objProizvod.cena)}
//                             <div>
//                                 <p>Specifikacije:</p>
//                                 <ul>
//                                     ${ispisSpec(objProizvod.specifikacija)}
//                                 </ul>
//                             </div>
                            
//                         </div>
//                     </div>`;
//         }

//         document.querySelector("#ispis-proizvoda").innerHTML = html;
//     }
// }
// function ispisiNaziv(id, nazivLS){
//     let nizLS = dohvatiIzLocalStorage(nazivLS);

//     let naziv = "";
//     for(let obj of nizLS){
//         if(obj.id == id){
//             naziv = obj.naziv;
//             break;
//         }
//     }
//     return naziv;

// }
// function obradaDostave(dostava){
//     let html = "";

//     if(dostava){
//         html += `<p class="alert alert-success">Besplatna dostava.</p>`
//     }
//     else{
//         html += `<p class="alert alert-danger">Nema besplatne dostave.</p>`
//     }

//     return html;
// }
// function obradaPopusta(id, nazivLS){
//     let html = "";
//     let objPopust = null;
//     let niz = dohvatiIzLocalStorage(nazivLS);

//     if(id != null){
//         for(let obj of niz){
//             if(obj.id == id){
//                 objPopust = obj;
//             }
//         }

//         html += `<p class="${objPopust.klasa}">${objPopust.naziv}</p>`
//     }

//     return html;
// }
// function obradaCene(objCena){
//     let html = "";

//     if(objCena.staraCena != null){
//         html += `<del>${objCena.staraCena} RSD</del>`;
//     }

//     html += `<strong class="ms-3">${objCena.aktuelnaCena} RSD</strong>`;

//     return html;
// }
// function ispisSpec(niz){
//     let html = "";

//     for(let obj of niz){
//         html += `<li><strong>${obj.naziv}: </strong>${obj.vrednost}</li>`
//     }

//     return html;
// }

function ajaxCallback(url, result){
    $.ajax({
      url: url,
      method: "get",
      dataType: "json",
      success: result,
      error: function(xhr){
        console.log(xhr);
      }
    })
}

ajaxCallback("../assets/data/meni.json", function(result){
    ispisiMeni(result);
})

function ispisiMeni(nizMeni) {
    let sadrzajZaIspis = "";

    for(let meni of nizMeni) {
        sadrzajZaIspis += `<li class="nav-item mx-3">
                            <a class="nav-link text-dark hover" href="${meni.href}"><p>${meni.text}</p></a>
                           </li>`;
    }

    $("#meniispis1").html(sadrzajZaIspis);
}