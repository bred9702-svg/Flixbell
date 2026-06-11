const PALETTES=['linear-gradient(155deg,#7a2d12,#c0461f 55%,#e8b04b)','linear-gradient(155deg,#123a44,#1f7d72 60%,#e8b04b)','linear-gradient(155deg,#3a1340,#8a2b6b 55%,#e3502b)','linear-gradient(155deg,#1d2a52,#2f5fb0 60%,#f2cb80)','linear-gradient(155deg,#4a2c0a,#9c6b1e 55%,#f6efe3)','linear-gradient(155deg,#0f2e1f,#2a7d4f 60%,#e8b04b)'];

const ROWS=[
  { titre:"Tendances cette semaine", classe:true, films:[
    {t:"Torsion de l'Intrigue",genre:"Drame",an:"2026",d:"Série",yt:"7gPptXi9O_I",g:3,id:"torsion",file:"Torsion de l'Intrigue",syn:"Quand chaque vérité en cache une autre, l'intrigue se resserre. La toute nouvelle série signée Bellevue Kandy."},{t:"Drame de la Séparation",genre:"Drame",an:"2026",d:"Série",yt:"CBv-sQ7QYRA",g:0,id:"separation",file:"Drame de la Séparation",syn:"Une famille déchirée, des liens mis à l'épreuve : le drame qui tient tout Kinshasa en haleine."},{t:"L'Uchronie",genre:"Drame",an:"2026",d:"Série",yt:"8h9r8ugtk7M",g:2,id:"uchronie",file:"L'Uchronie",syn:"Une fiction audacieuse qui réécrit le destin. La nouveauté qui surprend, signée Bellevue Kandy."},
    {t:"Maman, il faut le faire pour moi",genre:"Drame",an:"2026",d:"Série",yt:"mdPe_yLcD_0",g:1,id:"maman",file:"Maman, il faut le faire pour moi",syn:"Entre devoir et sacrifice, une mère prête à tout pour les siens. Un drame poignant signé Bellevue Kandy."},{t:"Componction",genre:"Drame",an:"2026",d:"Série",yt:"zRJrG-1nXbA",g:5,id:"componction",file:"Componction",syn:"Le poids du remords et le chemin vers le pardon. Une série forte sur la rédemption."},{t:"À Qui Consent",genre:"Drame",an:"2025",d:"Série",yt:"4cJeXTDuQPo",g:4,id:"consent",syn:"Consentement, pression et choix de vie : une série qui interroge nos rapports humains."},
  ]},
  { titre:"Derniers ajouts sur Bellevue TV", films:[
    {t:"Inconnu",genre:"Suspense",an:"2025",d:"Série",yt:"xm6BrY-KcrM",g:2,id:"inconnu",neuf:true},{t:"Entente Dirigée",genre:"Drame",an:"2025",d:"Série",yt:"Xxh6o8PreU0",g:1,id:"entente"},
    {t:"Mon Église",genre:"Drame",an:"2025",d:"Série",yt:"OB9Tf8bNyso",g:5,id:"eglise"},{t:"Femme Duplicité",genre:"Drame",an:"2025",d:"Série",yt:"qY01S4HQg_E",g:0,id:"duplicite"},
    {t:"Concupiscence",genre:"Drame",an:"2025",d:"Série",yt:"h5Kjc8GckTc",g:3,id:"concupiscence"},{t:"Meurtrière",genre:"Thriller",an:"2025",d:"Série",yt:"MtY0Xjdn-GE",g:4,id:"meurtriere"},
  ]},
  { titre:"Les incontournables", films:[
    {t:"Méritocratie",genre:"Drame",an:"2025",d:"Série",yt:"_2uj9seQsak",g:5,id:"meritocratie"},{t:"Mon Aîné",genre:"Drame",an:"2025",d:"Série",yt:"Tki-C_EMu44",g:1,id:"aine"},
    {t:"Pote",genre:"Comédie",an:"2025",d:"Série",yt:"NIskfrgI8KY",g:3,id:"pote"},{t:"Famille Libota",genre:"Théâtre",an:"Série",d:"Saga",yt:"5uTrFgPpBwQ",g:0,id:"libota"},
    {t:"Oza Nani",genre:"Théâtre",an:"Série",d:"Saga",yt:"JVYnP93JlF4",g:2,id:"oza"},{t:"Double Jeu",genre:"Drame",an:"2022",d:"Série",yt:"s1DPG7GifLU",g:4,id:"double"},
  ]},
  { titre:"À redécouvrir", films:[
    {t:"Homicide",genre:"Thriller",an:"2025",d:"Série",yt:"87c9zzUPlM8",g:4,id:"homicide"},{t:"Skinny",genre:"Drame",an:"2025",d:"Série",yt:"toiJWDfTn_U",g:1,id:"skinny"},
    {t:"Indécrottable",genre:"Comédie",an:"2024",d:"Série",yt:"HZ8iXHdMw_4",g:5,id:"indecrottable"},{t:"Discrédit",genre:"Drame",an:"2024",d:"Série",yt:"WXZ14a8F8sQ",g:0,id:"discredit"},
    {t:"Mon Enfant",genre:"Drame",an:"2024",d:"Série",yt:"sUvLSykvKSc",g:2,id:"enfant"},{t:"Leçon Morale",genre:"Drame",an:"2024",d:"Série",yt:"KckVhUOx14A",g:3,id:"lecon"},
  ]},
];

function findFilm(id){
  for(const row of ROWS){ for(const f of row.films){ if(f.id===id) return f; } }
  return null;
}
