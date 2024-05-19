//festivals
let events = document.getElementById("events");
let eventsItemsData = [
  {
    id: "festival1",
    name: "BUNAR FEST",
    year: "-2017-",
    description:
      "The International Festival of Documentary and Short Film is the largest film festival in Kosovo.",
    img: "Images/PejaEvents-img/20882533_10155023030277217_2702289897148252706_n-372x422.jpg",
  },
  {
    id: "festival2",
    name: "ANIBAR",
    year: "-2017-",
    description:
      "Anibar is an organization founded by a group of young promising young activists, the organization boasts of the successful completion of the seven Anibar International Animation Festival publica",
    img: "Images/PejaEvents-img/7-372x422.jpg",
  },
  {
    id: "festival3",
    name: "DOKU FEST",
    year: "-2017-",
    description:
      "The International Festival of Documentary and Short Film is the largest film festival in Kosovo.",
    img: "Images/PejaEvents-img/752A7772-1-372x422.jpg",
  },
  {
    id: "festival4",
    name: "BEER FEST",
    year: "-2017-",
    description:
      "Birra’s first festival that is organized in Kosovo, and the biggest Birres festival",
    img: "Images/PejaEvents-img/c8-372x422.jpg",
  },
  {
    id: "festival4",
    name: "BEER AND WINE FEST",
    year: "-2017-",
    description: "Beer and Wine Festival is the only and biggest in Kosovo",
    img: "Images/PejaEvents-img/FikretAhmeti_MG_8021-min-372x422.jpg",
  },
];

let generateShop = () => {
  return (events.innerHTML = eventsItemsData
    .map((x) => {
      let = { id, name, year, description, img } = x;

      return `
      <figure id-id=${id}>
        <img src=${img} alt="Trulli" width: 220px; height: 300px;>
        <figcaption>${name}</figcaption>
        <figcaption>${description}</figcaption>
        <figcaption>${year}</figcaption>
        
      </figure>
    `;
    })
    .join(""));
};
generateShop();
