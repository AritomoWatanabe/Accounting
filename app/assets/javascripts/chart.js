
// ▼グラフの中身
   		const hoge = ('count_thismonth').value
   		var barChartData = {
      		labels : ["7月","8月","9月","10月","11月","12月"],
      		datasets : [
         		{
            		fillColor : "rgba(240,128,128,0.6)",    // 塗りつぶし色
            		strokeColor : "rgba(240,128,128,0.9)",  // 枠線の色
            		highlightFill: "rgba(255,64,64,0.75)",  // マウスが載った際の塗りつぶし色
            		highlightStroke: "rgba(255,64,64,1)",   // マウスが載った際の枠線の色
            		data : [ 20, 30, 40, 45, 60, 70 ]     // 各棒の値(カンマ区切りで指定)
         		}

      		]

   			}

   		// ▼上記のグラフを描画するための記述
   		window.onload = function(){
      		var ctx = document.getElementById("graph-area").getContext("2d");
      		window.myBar = new Chart(ctx).Bar(barChartData);
   		}