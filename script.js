$("#donner").on("click", function() {
  window.location.href =
    "https://fr.openfoodfacts.org/faire-un-don-a-open-food-facts?utm_source=off&utm_medium=web&utm_campaign=donate-2022&utm_term=en-text-button";
})

  $(document).ready(function() {
    $("#rechercher").click(function(){
      $("#imageProduit").html("");
      $("#nutriscoreLogo").html("");
      $("#ecoscoreLogo").html("");
      $("#novaLogo").html("");
    $.getJSON("https://world.openfoodfacts.org/api/v0/product/"
    + recherche.value + ".json")
    .done(function(data) {
      $("#imageProduit").attr("src", data.product.image_url);

      $("#qteGraisses").html(data.product.nutriments.fat_100g);
      $("#qteSel").html(data.product.nutriments.salt_100g);
      $("#qteGraissesSaturees").html(data.product.nutriments["saturated-fat_100g"]);
      $("#qteSucre").html(data.product.nutriments.sugars_100g);


      switch (data.product.nutriscore_grade) {
        case "a":
          $("#nutriscoreLogo").attr("src", "./img/240px-Nutri-score-A.svg.png");
          break;
        case "b":
          $("#nutriscoreLogo").attr("src", "./img/240px-Nutri-score-B.svg.png");
          break;
        case "c":
          $("#nutriscoreLogo").attr("src", "./img/240px-Nutri-score-C.svg.png");
          break;
        case "d":
          $("#nutriscoreLogo").attr("src", "./img/240px-Nutri-score-D.svg.png");
          break;
        case "e":
          $("#nutriscoreLogo").attr("src", "./img/240px-Nutri-score-E.svg.png");
          break;
        default:
          $("#nutriscoreLogo").html(" : donnée indisponible");
      };
      switch (data.product.ecoscore_data.grade) {
        case "a":
          $("#ecoscoreLogo").attr("src", "./img/Eco-score A.svg");
          break;
        case "b":
          $("#ecoscoreLogo").attr("src", "./img/Eco-score B.svg");
          break;
        case "c":
          $("#ecoscoreLogo").attr("src", "./img/Eco-score C.svg");
          break;
        case "d":
          $("#ecoscoreLogo").attr("src", "./img/Eco-score D.svg");
          break;
        case "e":
          $("#ecoscoreLogo").attr("src", "./img/Eco-score E.svg");
          break;
        default:
          $("#ecoscoreLogo").html(" : donnée indisponible");
      };
      switch (data.product.nova_groups) {
        case "1":
          $("#novaLogo").attr("src", "./img/458px-NOVA_group_1.svg.png");
          break;
        case "2":
          $("#novaLogo").attr("src", "./img/1200px-NOVA_group_2.svg.png");
          break;
        case "3":
          $("#novaLogo").attr("src", "./img/1200px-NOVA_group_3.svg.png");
          break;
        case "4":
          $("#novaLogo").attr("src", "./img/640px-NOVA_group_4.svg.png");
          break;
        default:
          $("#novascoreLogo").html(" : donnée indisponible");
      };
    });
    });
    });
