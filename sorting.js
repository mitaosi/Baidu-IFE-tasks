        var queue = [];
        var inAnimation = false;
        var renderInterval = 150;
        var size = 5;

        var container = document.getElementById("container");
        var sort = document.getElementById("sorting");
        var random = document.getElementById("random"); 
        var leftIn = document.getElementById("left-in");
        var rightIn = document.getElementById("right-in");
        var leftOut = document.getElementById("left-out");
        var rightOut = document.getElementById("right-out");


        /*addEvent*/
        function addEvent(elm,type,handler){
        if(!elm) return false;
        if(elm.addEventListener){
            elm.addEventListener(type,handler,false);
            return true;
        }else if(elm.attachEvent){
            elm.attachEvent('on'+type,function(){handler.apply(elm)});
            return true;
        }
        return false;
        }

        //生成60个随机数据
        function setRandomData() {
            // if (inAnimation) {
            //     alert('in animation');
            //     return;
            // }
            var range = document.getElementById("random-range").value;
            queue = [];
            for (var i = 0; i < range; i++) {
                queue.push(Math.floor(Math.random() * 91 + 10));
            }
            render();
        }


        function swap(ele1, ele2) {
            var temp = ele1.offsetHeight;

            ele1.offsetHeight = ele2.offsetHeight;
            ele1.style.height = ele2.offsetHeight + "px";
            ele2.offsetHeight = temp;
            ele2.style.height = temp + "px";

            // 如果只是相邻元素swap，可以使用下面这个方法直接交换dom元素
            // 但是考虑到非冒泡排序算法使用swap时不一定是交换相邻元素(比
            // 如插入排序)，所以使用交换高度的方法。注意ele.style.height
            // 和ele.offsetHeight都需要互换

            // ele1.parentNode.insertBefore(ele2, ele1);
        };

        function bubbleSort() {
            var eles = container.querySelectorAll("div");
                len  = eles.length, j = 0, delay = 35;

            var i = len - 1;
            var timer = setInterval(function() {
                if(i < 1) {
                    clearInterval(timer);
                }
                if(j == i) {
                    --i;
                    j = 0;
                }
                if (eles[j].offsetHeight > eles[j+1].offsetHeight) {
                    swap(eles[j], eles[j+1]);
                }
                ++j;
            }, delay);
        };


        //神来之笔，map和join还能这么用！
        function render(){
            var container = document.getElementById("container");
            container.innerHTML =
            queue.map(function(d) { return '<div title="'+ d +'" style="height:'+ (d*5) +'px; background-color:'+'green'+'"></div>'; }).join('');   
        }

        function validate(str) {
            return /^\d+$/.test(str);
        }

        function addLeft(){
            let num = document.getElementById("num-input").value;
            if (!validate(num)){
                alert('input error');
            } else if(num>100 || num <10){
                alert('Please enter number between 10 and 100')
            } else{
                queue.unshift(num);
                render();
            }
        
        }

        function addRight(){
            let num = document.getElementById("num-input").value;
            if (!validate(num)){
                alert('input error');
            }else if(num>100 || num <10){
                alert('Please enter number between 10 and 100')
            } else{
                queue.push(num);
                render();
            }

        }

        function deleteLeft(){
            var shifted = queue.shift();
            window.alert(shifted);
            render();
        }

        function deleteRight(){
            var poped = queue.pop();
            window.alert(poped);
            render();
        }

        function init(){
            addEvent(leftIn,"click",addLeft);
            addEvent(rightIn,"click",addRight);
            addEvent(leftOut,"click",deleteLeft);
            addEvent(rightOut,"click",deleteRight);
            addEvent(sort,"click",bubbleSort);
            addEvent(random,"click",setRandomData);
        }
        init();