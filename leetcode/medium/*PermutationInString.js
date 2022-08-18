// var checkInclusion = function(s1, s2) {
  
//   if(s1.length > s2.length) return false;

//   let s1Map = new Array(26).fill(0);
//   let s2Map = new Array(26).fill(0);

//   for (let i = 0; i < s1.length; i++) {
//     s1Map[s1.charCodeAt(i) = 'a'.charCodeAt(0)]++;
//     s2Map[s2.charCodeAt(i) = 'a'.charCodeAt(0)]++;
//   }
  
//   let cnt = 0;

//   for(let i = 0; i < 26; i++) {
//     if(s1Map[i] == s2Map[i]) {
//       cnt++
//     }
//   }

//   for(let i = 0; i < s2.length - s1.length; i++) {
//     if(cnt == 26) {
//       return true;
//     }
//     let right = s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0);
//     let left = s2.charCodeAt(i) - 'a'.charCodeAt(0);

//     s2Map[right]++;
//     if(s2Map[right] == s1Map[right]) {
//       cnt++;
//     } else if (s2Map[right] == s1Map[right] + 1) {
//       cnt--;
//     }
//     s2Map[left]--;

//     if(s2Map[left] == s1Map[left]) {
//       cnt++
//     } else if (s2Map[left] == s1Map[left] - 1) {
//       cnt--;
//     }
//   }

//   return cnt == 26;

// };  

const checkInclusion = (s1, s2) => {
	const freq = Array.from({ length: 26 }, () => 0);
	let L = 0;
	let R = s1.length;

	if (s1.length > s2.length) return false; // invalid permutation

	for (let i = 0; i < s1.length; i++) {
		freq[s1.charCodeAt(i) - 97]++; // increment char count of s1
		freq[s2.charCodeAt(i) - 97]--; // decrement char count of s2
	}

	while (L < s2.length) {
		// if all frequency = 0, valid permutation found
		if (freq.every(cv => cv === 0)) return true;

    // move window 
		freq[s2.charCodeAt(L++) - 97]++; // increment char count of left most window
		freq[s2.charCodeAt(R++) - 97]--; // decrement char count of right most window
	}

	// valid permutation not found, return false
	return false;
};

//let s1 = 'ab', s2 = 'eidbaooo';
let s1 = 'ab', s2 = 'eidboaoo';


console.log(checkInclusion(s1, s2));
