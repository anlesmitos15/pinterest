fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json").then((Response)=>{return Response.json(); }).then((info)=>{
  for (let i = 0; i < 100; i++) {
    let template = `
      <div class="col-3 d-flex justify-content-center my-3">
                <div class="card imaginate" style="width: 18rem;">
                    <img src="${info[i].images.lg}" class=" card-img-top" alt="${info[i].name}">
                    <div class="card-body">
                        <h5 class="card-title">${info[i].name}</h5>
                        <p class="card-text">${info[i].fullName}</p>
                    </div>
                </div>
            </div>      
      `
    document.getElementById("llenado").innerHTML += template
  }
  console.log(info);
})

llenar();
function llenar() {
  // for (i = 0; i < (info.length); i=i+4) { 
  //   let template= `<div class="row mb-3" style="justify-content: space-around;">
  //           <div class="card imaginate" style="width: 18rem;">
  //               <img src="${info[i].images.lg}" class=" card-img-top" alt="${info[i].name}">
  //               <div class="card-body">
  //                   <h5 class="card-title">${info[i].name}</h5>
  //                   <p class="card-text">${info[i].fullName}</p>                    
  //               </div>
  //           </div>
  //           <div class="card imaginate" style="width: 18rem;">
  //               <img src="${info[i+1].images.lg}" class=" card-img-top" alt="${info[i+1].name}">
  //               <div class="card-body">
  //                   <h5 class="card-title">${info[i+1].name}</h5>
  //                   <p class="card-text">${info[i+1].fullName}</p>                    
  //               </div>
  //           </div>
  //           <div class="card imaginate" style="width: 18rem;">
  //               <img src="${info[i+2].images.lg}" class=" card-img-top" alt="${info[i+2].name}">
  //               <div class="card-body">
  //                   <h5 class="card-title">${info[i+2].name}</h5>
  //                   <p class="card-text">${info[i+2].fullName}</p>                    
  //               </div>
  //           </div>
  //           <div class="card imaginate" style="width: 18rem;">
  //               <img src="${info[i+3].images.lg}" class=" card-img-top" alt="${info[i+3].name}">
  //               <div class="card-body">
  //                   <h5 class="card-title">${info[i+3].name}</h5>
  //                   <p class="card-text">${info[i+3].fullName}</p>                    
  //               </div>
  //           </div>
  //       </div>
  //       `
  //       document.getElementById("colocar").innerHTML += template
  // }

}
