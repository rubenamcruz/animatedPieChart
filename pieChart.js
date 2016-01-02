var dados = [['Work',     11],
['Eat',      2],
['Commute',  2],
['Watch TV', 2],
['Sleep',    7]
]

function strip(number) {
    return (parseFloat(number.toPrecision(5)));
}

function pieChart(valores){

  google.load("visualization", "1", {packages:["corechart"]});
  google.setOnLoadCallback(drawChart);

  function drawChart() {


      var valoresDados = []
      var maior = 0;
      var i = 0;
      while(i < valores.length){
        valoresDados.push(valores[i][1]);
        if (valores[i][1] > valoresDados[maior]){
           maior = i;
         }
        valores[i][1] = 0;
        i++;
      }
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day']].concat(valores));

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);

      var counter = 0.2;
      var handler = setInterval(function(){
          console.log(counter);
          options = {
            title: 'My Daily Activities',
            pieSliceText: 'none'
          };
          i = 0;
          while(i < valoresDados.length){
            if(valores[i][1] < valoresDados[i]) valores[i][1] = strip(valores[i][1] + counter);
            i++;
          }
          data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day']].concat(valores));
          chart.draw(data, options);

          if (valores[maior][1] >= valoresDados[maior]){
            clearInterval(handler);
            var opcions = {
              title: 'My Daily Activities',
              pieSliceText: 'percentage',
            };
            data = google.visualization.arrayToDataTable([
              ['Task', 'Hours per Day']].concat(valores));
            chart.draw(data, opcions);
          }
      }, 30);
    }
}

pieChart(dados)
