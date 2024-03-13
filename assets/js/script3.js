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

window.onload = function(){
    ajaxCallback("assets/data/meni.json", function(result){
        ispisiMeni(result);
    })
}

function ispisiMeni(nizMeni) {
  let sadrzajZaIspis = "";

  for(let meni of nizMeni) {
      sadrzajZaIspis += `<li class="nav-item mx-3">
      <a class="nav-link text-dark hover" href="${meni.href}"><p>${meni.text}</p></a>
    </li>`;
  }

  $("#meniispis").html(sadrzajZaIspis);
}