//   $(function () {
//         videoone();
//         videotwo();
//         videothree();
// });
//
// function videoone() {
//     $(".tab-match").hover(function () {
//
//         if($(".video-one").css("display")=='none'){
//
//             $(".video-two").hide();
//             $(".video-three").hide();
//             $(".video-one").show();
//             // $(this).css("backgroundColor", "grey");
//         }
//     });
// }
// function videotwo() {
//     $(".tab-outside").hover(function (){
//
//         if($(".video-two").css("display")=="none"){
//
//             $(".video-two").show();
//             $(".video-three").hide();
//             $(".video-one").hide();
//             // $(this).css("backgroundColor", "grey");
//         }
//     });
// }
// function videothree() {
//       $(".tab-special").hover(function () {
//
//           if($(".video-three").css("display")=="none"){
//               $(".video-two").hide();
//               $(".video-three").show();
//               $(".video-one").hide();
//               // $(this).css("backgroundColor", "grey");
//           }
//       });
// }
function $(id) {
    return typeof id==='string'?document.getElementById(id):id;
}
window.onload = function () {
    //获取鼠标滑过或点击的标签和要切换内容的元素
    var titles = $('title-tab').getElementsByTagName('li');
    var divs= $('wrap').getElementsByTagName("div");
    // alert(titles.length);
    if(titles.length!=divs.length)
        return;
    for(var i=0;i<titles.length;i++){
        titles[i].id=i;
    //效果函数
        titles[i].onmouseover = function () {
            // alert(this.id)
            for(var j=0;j<titles.length;j++){
                
                titles[j].className="";
                divs[j].style.display="none";
                
            }
            this.className = "select";
            divs[this.id].style.display='block';
        }
    }
};




















