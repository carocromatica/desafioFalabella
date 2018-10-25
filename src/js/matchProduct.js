getProduct = () => {
  const compareTwoStrings = (str1, str2) => {
    if (!str1.length && !str2.length) return 1;
    if (!str1.length || !str2.length) return 0;
    if (str1.toUpperCase() === str2.toUpperCase()) return 1;
    if (str1.length === 1 && str2.length === 1) return 0;

    const pairs1 = wordLetterPairs(str1);
    const pairs2 = wordLetterPairs(str2);
    const union = pairs1.length + pairs2.length;
    let intersection = 0;
    pairs1.forEach(pair1 => {
      for (let i = 0, pair2; pair2 = pairs2[i]; i++) {
        if (pair1 !== pair2) continue;
        intersection++;
        pairs2.splice(i, 1);
        break;
      }
    });
    return intersection * 2 / union;
  }

  const wordLetterPairs = (str) => {
    const pairs = str.toUpperCase().split(' ').map(letterPairs);
    return flattenDeep(pairs);
  }

  const flattenDeep = (arr) => {
    return Array.isArray(arr) ? arr.reduce((a, b) => a.concat(flattenDeep(b)), []) : [arr];
  }

  const letterPairs = (str) => {
    const pairs = [];
    for (let i = 0, max = str.length - 1; i < max; i++) pairs[i] = str.substring(i, i + 2);
    return pairs;
  }


  let json = require('./datosPru.json');
  const array = json;
  let may = 0;
  for (let index = 0; index < array.length; index++) {

    let similarity = compareTwoStrings('Samsung Galaxy S8 64gb / Iprotech', array[index].producto);
    if (similarity > may) {
      may = similarity;
      var cosa = {
        "producto": array[index].producto,
        "precio": array[index].precio,
        "match": similarity
      };
    };
  }
  console.log(cosa);
}

getProduct();