/**
 * Created by Administrator on 2017/4/26.
 */


window.onload = function(){
    var aPrevious = document.getElementById("aNext");
    var aNext = document.getElementById("aPrevious");
    var aImage = document.getElementById("aImage");
    var aImages = document.getElementById("aImages");
    var aImageArr = ["img/hMainFourContentCenterCenterRightFirure.png", "img/hMainFourContentCenterCenterRightFirure1.png", "img/hMainFourContentCenterCenterRightFirure2.png"];
    var aImageArrs = ["img/hMainFourContentRightFirure.png", "img/hMainFourContentRightFirure1.png", "img/hMainFourContentRightFirure2.png"];
    var num = 0;


    function fnTab() {
        aImage.src = aImageArr[num];
        aImages.src = aImageArrs[num];
    };

    aNext.onclick = function(){
        num++;
        if(num == aImageArr.length ){
            num = 0;
        }
       fnTab();
        console.log(num);
    };

    aPrevious.onclick = function(){
        num--;

        if(num == -1){
            num = aImageArr.length-1;
        }
        fnTab();
        console.log(num);
    };
};
