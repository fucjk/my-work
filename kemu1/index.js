/**
 * Created by mac on 16/6/23.
 */
var i = 0;
(function () {

    function init() {

        $.get("tsconfig.json").done(function (data) {
            var explain = document.getElementById('explain');
            var title=document.getElementById('title');
            var a=document.getElementById('a');
            var b=document.getElementById('b');
            var c=document.getElementById('c');
            var d=document.getElementById('d');
///////////加入题目和选项

            function option(i){
                title.innerHTML=data[i]['title'];
                a.innerHTML=data[i]['a'];
                b.innerHTML=data[i]['b'];
                c.innerHTML=data[i]['c'];
                d.innerHTML=data[i]['d'];
                desc = data[i].desc;
            }
            option(i);
            //固定按钮
            function Disabled(){
                for(var j=0;j<radiotags.length;j++){

                    radiotags[j].disabled='disabled';
                }
            }
            ////消失按钮
            function able(){
                for(var n=0;n<radiotags.length;n++){

                    radiotags[n].disabled='';
                }
            }

            //消失按钮
            function clear(){
                for(var m=0;m<radiotags.length;m++){
                    radiotags[m].checked='';
                }
            }
            //判断框
            var radiotags = document.getElementsByTagName('input');

            var box = document.getElementById('box');

                for(var k=0;k<radiotags.length;k++){

                    (function(arg){

                        radiotags[arg].onclick = function() {

                            Disabled();

                            if (data[i].right == radiotags[arg].value) {

                                box.innerHTML = '恭喜你答对了 你牛!'

                            } else {

                                box.innerHTML = '你答错了! 正确答案是' + data[i].right;
                            }
                        }
                    })(k);
                }
            ///下一页按钮
            var next=document.getElementById('next');

              next.onclick=function(){
                  box.innerHTML = "";
                    able();
                  clear();
                  if(i<data.length-1){

                      option(i+1);

                      i++;
                  }
              }

            /////上一题按钮
            var first=document.getElementById('first');

             first.onclick = function(){
                 box.innerHTML = "";
                able();
                 clear();
                if(i==0){
                    alert('这已经是第一页')

                }else{
                    option(i-1);
                    i--;

                }

             }
            /////本题解析


            
            
            explain.onclick=function(){
                alert(desc);
            }



        });
    }

    init();
})();