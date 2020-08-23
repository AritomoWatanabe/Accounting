
// ▼グラフの中身
   		const hoge = ('count_thismonth').value
   		var barChartData = {
      		labels : ["花組","月組","雪組","星組","宙組","海組","彗組"],
      		datasets : [
         		{
            		fillColor : "rgba(240,128,128,0.6)",    // 塗りつぶし色
            		strokeColor : "rgba(240,128,128,0.9)",  // 枠線の色
            		highlightFill: "rgba(255,64,64,0.75)",  // マウスが載った際の塗りつぶし色
            		highlightStroke: "rgba(255,64,64,1)",   // マウスが載った際の枠線の色
            		data : [ 100, 30, 40, 45, 60, 70 , 80 ]     // 各棒の値(カンマ区切りで指定)
         		},
         		{
            		fillColor : "rgba(151,187,205,0.6)",
            		strokeColor : "rgba(151,187,205,0.9)",
            		highlightFill : "rgba(64,96,255,0.75)",
            		highlightStroke : "rgba(64,96,255,1)",
            		data : [ 200, 80, 70, 60, 55, 40, 25 ]
         		}
      		]

   			}

   		// ▼上記のグラフを描画するための記述
   		window.onload = function(){
      		var ctx = document.getElementById("graph-area").getContext("2d");
      		window.myBar = new Chart(ctx).Bar(barChartData);
   		}