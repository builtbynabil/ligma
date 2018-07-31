var revealLigma = $(".revealLigma");
var answer = $(".answer");
var ligma = $(".ligma");
var diseaseName = $(".diseaseName");
var revealText = $(".revealText");
var submitCustomizer = $(".submitCustomizer");
var submitCustomizerPressed = false;
var divForm = $(".divForm");
var customizerHide = $(".customizerHide");

customizerHide.hide();

$(".header .revealLigma").click(function(){
    revealLigma.hide();
    answer.text("LIGMA BALLS BITCH");
    answer.css("font-size","4em");
    answer.css("font-weight","700");
    answer.css("line-height","1em");

    $(".aboutHeader h1").hide();

    setInterval(function(){
        location.replace("index.html")
    },500)
    
})

ligma.click(function(){
    location.replace("about.html");
})

submitCustomizer.click(function(){
    divForm.hide();

    $(".customizerHide").css("text-align","center");
    
    $(".customizerHide .diseaseNameText").text($(".diseaseName").val());
    $(".customizerHide .revealLigma").click(function(){
        $(".customizerHide .answer").text(revealText.val());
    })

    customizerHide.show();
})