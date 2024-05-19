let distributors = document.getElementById("container");
let distributorsItemsData = [
  {
    id: "D1",
    name: "Suharekë",
    rruga: "Str. Skenderbeu",
    tel:"Tel: 049772585",
    email:"Email: halil-gashi@hotmail.com",
    link:"https://www.google.com/maps/place/42%C2%B021'37.4%22N+20%C2%B049'40.7%22E/@42.360388,20.8274265,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d42.360388!4d20.827975"
  },
  {
    id: "D2",
    name: "Shala për Mitrovice",
    rruga: "Mitrovicë",
    email:"Email: bekimshala31@hotmail.com",
    link:"https://www.google.com/maps/place/42%C2%B052'40.0%22N+20%C2%B051'55.3%22E/@42.877775,20.8647137,18z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d42.877775!4d20.865366"
  },
  {
    id: "D3",
    name: "Klinë",
    rruga: "Gremnik",
    email:"Email: dsg_holding@yahoo.com",
    link:"https://www.google.com/maps/place/Klin%C3%AB/@42.4732498,20.528118,11.5z/data=!4m18!1m12!4m11!1m6!1m2!1s0x13530ef77baa864d:0x50a18722c80c3bf9!2zS2xpbsOrLCBQZcSHIERpc3RyaWN0!2m2!1d20.5781567!2d42.6193237!1m3!2m2!1d20.7266582!2d42.2124815!3m4!1s0x13530ef77baa864d:0x50a18722c80c3bf9!8m2!3d42.6193237!4d20.5781567"
  },
  {
    id: "D4",
    name: "Klinë",
    rruga: "Str. Hasan Prishtina",
    tel:"Tel: 049772581",
    email:"Email: shkelzen-berisha@hotmail.com",
    link:"https://www.google.com/maps/place/Klin%C3%AB/@42.4732498,20.528118,11.5z/data=!4m18!1m12!4m11!1m6!1m2!1s0x13530ef77baa864d:0x50a18722c80c3bf9!2zS2xpbsOrLCBQZcSHIERpc3RyaWN0!2m2!1d20.5781567!2d42.6193237!1m3!2m2!1d20.7266582!2d42.2124815!3m4!1s0x13530ef77baa864d:0x50a18722c80c3bf9!8m2!3d42.6193237!4d20.5781567"
  },
  {
    id: "D5",
    name: "Prizren",
    rruga: "Str. Tirana",
    tel:"Tel: 045566266",
    email:"Email: arianbekqeli@hotmail.com",
    link:"https://www.google.com/maps/dir//42.2124815,20.7266582/@42.2114056,20.7241817,17.25z"
  },
  {
    id: "D6",
    name: "Prizren",
    rruga: "Str. William Walker",
    tel:"Tel: 049772682",
    email:"Email: lumacomerc@hotmail.com",
    link:"https://www.google.com/maps/place/William+Walker,+Prizren/@42.2090702,20.7251995,17z/data=!4m13!1m7!3m6!1s0x1353956f45cb12e1:0x1926fd2474a25407!2sWilliam+Walker,+Prizren!3b1!8m2!3d42.2090702!4d20.7273935!3m4!1s0x1353956f45cb12e1:0x1926fd2474a25407!8m2!3d42.2090702!4d20.7273935"
  },
  {
    id: "D7",
    name: "Malishevë",
    rruga: "Malishevë",
    email:"Email: mani_malishev@hotmail.com",
    link:"https://www.google.com/maps/place/Mani/@42.4819841,20.7325559,15z/data=!4m13!1m7!3m6!1s0x13539fd8ce994875:0x5a623408c7d18295!2sMalishev%C3%AB!3b1!8m2!3d42.4838334!4d20.743101!3m4!1s0x0:0xaea8ed27da14a300!8m2!3d42.4866287!4d20.7335722"
  },
  {
    id: "D4",
    name: "Komoran",
    rruga:"Komoran",
    email:"Email: sharri-komoran@hotmail.com",
    link:"https://www.google.com/maps/place/Komoran/@42.577793,20.8937906,15z/data=!3m1!4b1!4m5!3m4!1s0x13537a9df185b639:0x854b9c5f70b322e1!8m2!3d42.5763523!4d20.9023482"
  },
  {
    id: "D4",
    name: "Joni DD Ferizaj",
    email:"Email: jonidiscount@outlook.com",
    link:"https://www.google.com/maps/place/Bibaj/@42.3740485,21.1862173,15z/data=!3m1!4b1!4m13!1m7!3m6!1s0x13547e5d2cdacd71:0xec0e1a604157e8b5!2sUroshevac!3b1!8m2!3d42.3701844!4d21.1483281!3m4!1s0x13547dd71006176d:0x1637c97a9a659dd9!8m2!3d42.3737599!4d21.1868656"
  },
  {
    id: "D4",
    name: "Gjakovë",
    rruga: "Str. Anton Çeta",
    tel:"Tel: 049772549",
    link:"https://www.google.com/maps/place/42%C2%B022'21.7%22N+20%C2%B026'15.5%22E/@42.372698,20.435439,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d42.372698!4d20.437633"
  },
  {
    id: "D4",
    name: "Deçan",
    rruga: "Str. Luan Haradinaj",
    tel:"Tel: 045574574",
    email:"Email: hipermarket-tropikal@hotmail.com",
    link:"https://www.google.com/maps/place/42%C2%B032'37.0%22N+20%C2%B017'25.1%22E/@42.543602,20.2881,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d42.543602!4d20.290294"
  },
  {
    id: "D4",
    name: "Pejë",
    rruga: "Highway Pejë-Prishtinë",
    tel:"Tel: 049772300",
    email:"Email: as@elkosgroup.com",
    link:"https://www.google.com/maps/place/ETC-PEJE,+Pej%C3%AB/@42.6530314,20.3109133,16.75z/data=!4m12!1m6!3m5!1s0x1352fdeb8f6f9495:0x2af1f594faf4b51d!2sElkos+Devolli+Princ+Caffe!8m2!3d42.6540353!4d20.312264!3m4!1s0x1352fdecf3d06bff:0xe513d4d8404853d8!8m2!3d42.6544361!4d20.3148714"
  },
  {
    id: "D4",
    name: "Pejë",
    rruga: "Rr. Fusha e Pejës",
    email:"Email: gzim.luani@hotmail.com",
    link:"https://www.google.com/maps/dir//42.6598294,20.2924889/@42.6603668,20.2925498,18.25z"
  },
  {
    id: "D4",
    name: "Pejë",
    rruga: "Str. Zef Maraj",
    
    tel:"Tel: 049772660",
    email:"Email: gazi_gaf@live.com",
    link:"https://www.google.com/maps/place/42%C2%B039'44.8%22N+20%C2%B017'49.5%22E/@42.66244,20.2964397,18z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d42.66244!4d20.297092"
  }
];

let generateDistributors = () => {
  return (distributors.innerHTML = distributorsItemsData
    .map((x) => {
      let = { id, name, rruga,tel,email,link } = x;

      return `
      <div id=${id} class="distributors">
      <hr class="hr" />
      <h1>${name}</h1>
      <h2>${rruga}</h2>
      <h3>${tel}</h3>
      <email>${email}</email> <br /><br />
      <a href=${link}>GET DIRECTION</a>
    </div>
      
      

    `;
    })
    .join(""));
};
generateDistributors();
