const firestore = firebase.firestore();
let namesAndStore = [];
const showList = document.getElementById('placeList');

const getData = () =>{
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);
  firestore.collection("products")
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      formObject(doc);
      
    })
    let search = getInput();
    if (search !== null && search !== undefined && search.length > 1){
      
      let encontrados = namesAndStore.forEach(element => {
        // console.log(element.name);
        // console.log(search);
        let nombres = element.name.toLowerCase();
        // let result = [];
        if (nombres.search(search) != -1){

          console.log('tiene' + element.name);
          showList.innerHTML += `<p>${element.name}</p>`
          // result.push(nombres)
        } else { console.log('nothing');}
      })
    } else { console.log('input vacio');
    }           
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
  });
          
            
            
const formObject = (doc) => {
    namesAndStore.push({
    "name": doc.data().producto,
    "seller": doc.data().tienda
  });
}; 

const getInput = () =>{
  let searchOrigin = document.getElementById('searchInput').value;
  let search = searchOrigin.toLowerCase(); 
  if (search.length > 0 && search !== null && search !== undefined){
    return search;
  };
}}
