// function exibirErro(mensagem) {
//     let erro = document.getElementById('div-erro');
//     erro.style.display = 'block'
//     erro.innerHTML = '<b>Erro ao acessar a API:</b><br />' + mensagem;


// }

// async function carregarDados() {
//     let erro = document.getElementById('div-erro');
//     erro.style.display = 'none'

//     await fetch('https://www.mercadobitcoin.com.br/api/BTC/trades')
//         .then(response => response.json())
//         .then(dados => prepararDados(dados))
//         .catch(e => exibirErro(e.mensagem));
// }


// function prepararDados(dados) {
//     if (dados.length > 0) {

//         dados_ = [['Indice', 'Preço']];



//         let confirmados = 0;
//         let mortos = 0;

//         for (let i = 0; i < dados.length; i++) {
//             if (dados[i].type == 'sell') {
//                 confirmados += dados[i].amount;

//                 dados_linha.push([new Date(dados[i].date * 1000), dados[i].price])
//             }
//             else 
//                 mortos += dados[i].amount;            
//         }

//     }







// google.charts.load('current', {
//     'packages': ['geochart'],
// });
// google.charts.setOnLoadCallback(desenharMapa);

// function desenharMapa() {
//     var data = google.visualization.arrayToDataTable(dados_mapa);

//     var options = {colors:['#]};

//     var chart = new google.visualization.GeoChart(document.getElementById('area-mapa'));

//     chart.draw(data, options);
// }






// //grafico pizza


// google.charts.load("current", { packages: ["corechart"] });
// google.charts.setOnLoadCallback(desenharGraficoPizza);

// function desenharGraficoPizza() {
//     var data = google.visualization.arrayToDataTable(dados_pizza);

//     var options = {
//         title: 'My Daily Activities',
//         is3D: true,
//     };

//     var chart = new google.visualization.PieChart(document.getElementById('area-pizza'));
//     chart.draw(data, options);
// }




// //tabelinha

// google.charts.load('current', {'packages':['table']});
//       google.charts.setOnLoadCallback(desenhandoTabelinha);

//       function desenhandoTabelinha() {
//         var data = new google.visualization.DataTable();
//         data.addColumn('string', 'Name');
//         data.addColumn('number', 'Salary');
//         data.addColumn('boolean', 'Full Time Employee');
//         data.addRows([
//           ['Mike',  {v: 10000, f: '$10,000'}, true],
//           ['Jim',   {v:8000,   f: '$8,000'},  false],
//           ['Alice', {v: 12500, f: '$12,500'}, true],
//           ['Bob',   {v: 7000,  f: '$7,000'},  true]
//         ]);

//         var table = new google.visualization.Table(document.getElementById('area-tabela'));

//         table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
//       }
//     }





var dados_pizza = [
    ['Status', 'Total']
];

var dados_mapa = [
    ['País', 'Confirmados'],
    ['0', 0]
];


function exibirErro(mensagem) {
    let erro = document.getElementById('div-erro');
    erro.style.display = 'block'
    erro.innerHTML = '<b>Erro ao acessar a API:</b><br />' + mensagem;


}

async function carregarDados2() {
    let erro = document.getElementById('div-erro');
    erro.style.display = 'none'

    await fetch('https://covid19-brazil-api.now.sh/api/report/v1/countries')
        .then(response => response.json())
        .then(dados => prepararDados2(dados))
        .catch(e => exibirErro(e.mensagem));
}


//mapa - grafico

function prepararDados2(dados) {

    dados_mapa = [['País', 'Confirmados']];
    dados_pizza = [['Status', 'Total']];

    let pais = 0;
    let confirmados = 0;
    let mortos = 0;
    let recuperados = 0;
    let total = 0;

    for (let i = 0; i < dados['data'].length; i++) {

        pais = dados['data'][i].country;
        confirmados = dados['data'][i].confirmed;
        dados_mapa.push([pais, confirmados]);

        mortos += dados['data'][i].deaths;
        recuperados += dados['data'][i].recovered;
        total += dados['data'][i].confirmed;
    }

    dados_pizza.push(['Confirmados', total]);
    dados_pizza.push(['Mortos', mortos]);
    dados_pizza.push(['Recuperados', recuperados]);

    desenharMapa();
    desenharGraficoPizza();



}


//grafico mapa

google.charts.load('current', {
    'packages': ['geochart'],
});
google.charts.setOnLoadCallback(desenharMapa);

function desenharMapa() {
    var data = google.visualization.arrayToDataTable(dados_mapa);

    var options = {
        colors: ['#8dc3e0', '#00669d', '#043956']
    };

    var chart = new google.visualization.GeoChart(document.getElementById('area-mapa'));

    chart.draw(data, options);
}






//grafico pizza


google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(desenharGraficoPizza);

function desenharGraficoPizza() {
    var data = google.visualization.arrayToDataTable(dados_pizza);

    var options = {
        title: 'Casos de covid-19 no mundo',
        is3D: true,
        colors: [ '#00669d', '#89373d']
    };

    var chart = new google.visualization.PieChart(document.getElementById('area-pizza'));
    chart.draw(data, options);
}









// https://covid19-brazil-api.now.sh/api/report/v1

async function carregarDados() {
    const divErro = document.getElementById('div-erro');
    divErro.style.display = 'none';

    await fetch('https://covid19-brazil-api.now.sh/api/report/v1')  
        .then( response => response.json() )    
        .then( dados => prepararDados(dados) )  
        .catch( e => exibirErro(e.message) );  
}

function exibirErro(mensagem) {
    const divErro = document.getElementById('div-erro');
    divErro.style.display = 'block';
    divErro.innerHTML = '<b>Erro ao acessar a API</b><br />' + mensagem;
}

function prepararDados(dados) {
    let linhas = document.getElementById('linhas');
    linhas.innerHTML = '';

    for (let i=0; i<dados['data'].length; i++) {
        let auxLinha = '';

        if (i %2 !=0)
            auxLinha = '<tr class="linhas">';
        else 
            auxLinha = '<tr>';

        auxLinha += '<td>' + dados['data'][i].uf + '</td>' +
                    '<td>' + dados['data'][i].state + '</td>' +
                    '<td>' + dados['data'][i].cases + '</td>' +
                    '<td>' + dados['data'][i].deaths + '</td>' +
                    '<td>' + dados['data'][i].suspects + '</td>' +
                    '<td>' + dados['data'][i].refuses + '</td>' +
                '</tr>';

        linhas.innerHTML += auxLinha;
    }


}

