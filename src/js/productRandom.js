const getDataRandom = () => {
  const arr = []
  const arrRec = []
  const firestore = firebase.firestore();
  const settings = {
    timestampsInSnapshots: true
  };
  firestore.settings(settings);

  return new Promise(resolve => {
    firestore.collection("products").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        arr.push(doc.data())
        // console.log(doc.id, " => ", doc.data());


      });
      resolve(arr)
    });
  })



}

// const rec = (arr) => {

//   console.log('arr', arr);
//   let arrRec = [];
//   if (arrRec.length === 8) {
//     return arrRec;
//   } else {
//     const ran = arr[Math.floor(Math.random() * arr.length)];
//     arrRec.push(ran);
//     // arrRec = arrRec.filter((v, i, a) => a.indexOf(v) === i);
//     rec();
//   }


// }

getDataRandom().then(data => { console.log(data) })