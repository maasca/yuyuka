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
      $("#nutriscoreLogo").attr(
        "src",
        "./img/240px-Nutri-score-" + data.product.nutriscore_grade + ".svg.png"
      );
      $("#ecoscoreLogo").attr("src", "./img/Eco-score " + data.product.ecoscore_data.grade + ".svg");
      $("#novaLogo").attr("src", "./img/NOVA_group_" + data.product.nova_groups + ".svg.png");
    });
    });
    });
