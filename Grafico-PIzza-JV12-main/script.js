const grafico = document.getElementById("meugrafico").getContext("2dc");
const meuGrafico = new Chart(grafico, {
type: "pie",
date: {
labels: [
"Instagram",
"WhatsApp",
"Facebook",
"WeChat",
"TikTok",
"DouYin",
"Twitter",
"Telegram",
"FB Messenger",
"LINE"
],
datasets: [{
data: [
16.5,
16.1,
12.8,
12.8,
7.4,
6.6,
3.2,
2.4,
2.3,
1.7
],
backgroundColor: [
"red",
"green",
"blue",
"rgb(127,127,127)",
"#B22222",
"#FFFF00",
"rgb(240,255,240)",
"rgb(153,50,204)",
"rgb(127,255,0)",
"rgb(95,158,160)",

],
}
]

}

}

);

