$(".button1").click(function() {
    var rateFriends = $(".ques1").val();
    var chooseAbilities = $(".ques2").val();
    if (chooseAbilities === "Immortality") {
        $(".ban").show();
        $(".ban").append("<p>");
        $(".page1").hide();
        
    } else {
        $(".wrongPage").show();
    }
    if (chooseAbilities === "Super Strength") {
        $(".diane").show();
        $(".page1").hide();
    } 
    if (chooseAbilities === "Counter Everything") {
        $(".meliodas").show();
        $(".page1").hide();
    }
    if (chooseAbilities === "Magic") {
        $(".king").show();
        $(".page1").hide();
    }

});

$(".button2").click(function() {
     $(".finalPage").show();
$(".page1").hide();
    $(".king").hide();
    $(".ban").hide();
    $(".diane").hide();
    $(".meliodas").hide();
    
    
    
    });