
function Img(iCurrentImg){
    this.iID = iCurrentImg;
    var imgObj = document.getElementById("img");
    imgObj.src = "images/img_" + parseInt(this.iID+1) + ",jpg";

    imgObj.className = "imgDyn";
    imgObj.style.marginLeft = (this.iID*100) + "px";

    var appendImg = function(){
        imgObj.addEventListener("click",onMinimize);
        document.getElementsByTagName("body")[0].appendChild(imgObj);
    };

    var onMinimize = function(){
        console.log("I was Minimaized");
    };

    this.getImgSrc = function(){
        return (imgObj.src);
    };

    this.setImgSrc = function(Sorce)
    {
        imgObj.src = Sorce;
    }
    appendImg();
}

function ImgsManager() {
    var iImgsNum = 4;

    for(var i = 0 ; i < iImgsNum ; ++i)
    {
        var imgObj = new Img(i);
        console.log("img "+i+" src is:" + imgObj.getImgSrc());
    }
  }
