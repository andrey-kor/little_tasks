let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(originalArray){
  let map = new Map();
  
	for (let elem of originalArray){
    let key = elem.toLowerCase().split('').sort().join('');
    map.set(key, elem);
  }
	return Array.from(map.values());
}

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"