// function flattenDictionary(dictionary) {
//   var flattenDictionary = {};

//   function flattenDictionaryHelper(dictionary, propName) {
//     if(typeof dictionary !== 'object') {
//       flattenDictionary[propName] = dictionary;
//       return;
//     }
//     for (var prop in dictionary) {

//     }
//   }
// }


// function isPalindromeRecursive(word) {
//   return isPalindromeHelper(word, 0, word.length - 1);
// }

// function isPalindromeHelper(word, beginPos, endPos) {
//   if(beginPos >= endPos) {
//     return true;
//   }
//   if(word.charAt(beginPos) != word.charAt(endPos)) {
//     return false;
//   } else {
//     return isPalindromeHelper(word, beginPos + 1, endPos - 1);
//   }
// }

// console.log(isPalindromeRecursive('hi'));
// console.log(isPalindromeRecursive('iii'));
// console.log(isPalindromeRecursive('ii'));
// console.log(isPalindromeRecursive('aibohphobia'));
// console.log(isPalindromeRecursive('racecar'));

// function checkDuplicate(arr) {
//   let mySet = new Set(arr);

//   return mySet.size < arr.length;
// }

// console.log(checkDuplicate([1, 2, 3, 4, 5]));
// console.log(checkDuplicate([1, 1, 2, 3, 4, 5]));

// function uniqueList(arr1, arr2) {
//   let mySet = new Set(arr1.concat(arr2));
//   return Array.from(mySet);
// }

// console.log(uniqueList([1, 1, 2, 2], [2, 3, 4, 5]));
// console.log(uniqueList([1, 2], [3, 4, 5]));
// console.log(uniqueList([], [2, 2, 3, 4, 5]));

// function swap(arr, index1, index2) {
//   let temp = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
// }

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j <= i; j++) {
//       if (arr[j] > arr[j + 1]){
//         swap(arr, i ,j);
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort([6, 1, 2, 3, 4 ,5]));

// var arr = [12, 3, 4, 2, 1, 34, 23];

// function compareDescNumber(a, b) {
//   return b - a;
// }

// function compareAscNumber(a, b) {
//   return a - b;
// }
// console.log(arr.sort(compareAscNumber));
// console.log(arr.sort(compareDescNumber));

// function QueueStack() {
//   this.inbox = new Queue();
// }

// QueueStack.prototype.push = function(val) {
//   this.inbox.enqueue(val);
// }

// 1. 점원은 주문을 위해 고객의 이름과 주문 항목을 요구한다.
// 2. 첫 번째로 주문받은 고객을 먼저 처리한다.

// function Customer(name, order) {
//   this.name = name;
//   this.order = order;
// }

// function Cashier() {
//   this.customers = new Queue();
// }

// Cashier.prototype.addOrder = function(customer) {
//   this.customers.enqueue(customer);
// }

// Cashier.prototype.deliveryOrder = function() {
//   let finishedCustomer = this.customers.dequeue();

//   console.log(`${finishedCustomer.name}, your ${finishedCustomer.order} is ready!`);
//   // console.log(finishedCustomer.name+ ', your '+finishedCustomer.order+ 'is ready!');
// }

// let cashier = new Cashier();
// let customer1 = new Customer('Jim', 'Fries');
// let customer2 = new Customer('Sammie', 'Burger');
// let customer3 = new Customer('Peter', 'Drink');

// cashier.addOrder(customer1);
// cashier.addOrder(customer2);
// cashier.addOrder(customer3);

// cashier.deliveryOrder();
// cashier.deliveryOrder();
// cashier.deliveryOrder();

// function Customer(name, order) {
//   this.name = name;
//   this.order = order;
// }

// function Cashier() {
//   this.customers = new Queue();
// }

// Cashier.prototype.addOrder = function(customer) {
//   this.customers.enqueue(customer);
// }

// Cashier.prototype.deliverOrder = function() {
//   var finishedCustomer = this.customers.dequeue();

//   console.log(finishedCustomer.name + ", your " + finishedCustomer.order + " is ready!");
// }

// var cashier = new Cashier();
// var customer1 = new Customer('Jim', "Fries");
// var customer2 = new Customer('Sammie', "Burger");
// var customer3 = new Customer('Peter', "Drink");

// cashier.addOrder(customer1);
// cashier.addOrder(customer2);
// cashier.addOrder(customer3);

// cashier.deliverOrder(); // Jim, your Fries is ready!
// cashier.deliverOrder(); // Sammie, your Burger is ready!
// cashier.deliverOrder(); // Peter, your Drink is ready!

// function solution(n) {
//   return parseInt(n.toString(3).split('').reverse().join(''), 3);
// }

// console.log(solution(45));


// function solution(participant, completion) {
//   // 참가자, 완주자 똑같이 정렬해야됨 안그러면 확인 불가 
//   for(let i = 0; i < participants.length; i++) {
//     if(participants[i] !== completion[i]) {
//       return participants[i];
//     }
//   }
// }

// 나머지가 1이 되는 수 찾기

// function solution(n) {
//   var answer = 0;

//   for (let i = 1; i < n; i++) {
//     if(n % i === 1) {
//       return i
//     }
//   };
// }

// console.log(solution(10));

// 약수의 개수와 덧셈

// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) { // 주어진 숫자 범위 순회
//     let count = 0;
//     for(let j = 0; j <= i; j++){ // 주어진 숫자 약수 개수 카운트
//       if(i % j ===0) {
//         count += 1;
//       }
//     }
//     answer = count % 2 === 0 ? answer += i : answer -= i;
//   }
//   return answer;
// }

// 다른 사람 풀이

// function solution(left, right) { 8이 반례이지 않나...?
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//       answer -= i;
//     } else {
//       answer += i;
//     }
//   }
//   return answer;
// }
// console.log(solution(2, 8));

// 가운데 글자 가져오기
// floor, ceil 쓰는 이유가 있었음

// function solution(s) {
//   var answer = (s.length % 2 === 0) ? s.substr((s.length / 2) - 1, 2) : s.substr((s.length / 2), 1) ;
  
//   return answer;
// }

// console.log(solution('abcdefg'));

// 예산
// function solution(d, budget) {
//   let sum = 0;
//   let count = 0;

//   d.sort((a, b) => a - b); // 작은 것 부터 더하기

//   for(let i = 0; i < d.length; i++) { 
//     sum += d[i];
//     if(sum > budget) { return count; } // 밑으로 내리면 더해서 결과값 나옴
//       count++;
    
//   }

//   return count;
// }

// console.log(solution([2, 2, 3, 3], 10));

// js 연습문제 - 일련의 숫자에서 중간 값 찾기

// function centerNum(arr) {
//   let sortArr = arr.sort((a, b) => a - b);

//   let answer = Math.floor(sortArr.length % 2 === 0) ? sortArr.substr((sortArr.length / 2)) : sortArr.substr(0, sortArr.length);

//   return answer;
// }


// function solution(stats) {
//   var answer = 1;
//   let team = team.push(stats[0]);

//   for (let i = 0; i < stats.length; i++) {
//     if(stats[i] > stats[i + 1]){
//       team.push(stats[i]);
//       answer++;
//     } 
//   }
//   return answer;
// }

// console.log(solution([5, 3, 4, 6, 2, 1]));


// function solution(n){
//   let a = ['4', '13'];
//   let list = [];
//   let cnt = 0;

//   while (true) {
//     if(cnt > n) {
//       break;
//     }
//     let num = a.shift();
//     a.push(parseInt(num + '4'));
//     a.push(parseInt(num + '13'));
//     list.push(num);
//     cnt++
// console.log(num);
//   }
//   list.sort((a, b) => a - b);
//   let answer = list.length - 1;
//   return answer
// }

// console.log(solution(1));

// 내적
// function solution(a, b) {
//   var answer = 1234567890;
//   let sum = 0;

//   for (let i = 0; i < a.length; i++) {
//       sum += a[i] * b[i];
//   }


//   return sum;
// }

// console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
// console.log(solution([-1, 0, 1], [1, 0, -1]));

// 로또 최고순위와 최저 순위 **다시 

// function solution(lottos, winNums) {
//   var answer = [];
//   let cnt = 0;
//   for (let i = 0; i < lottos.length; i++) {
//     if (lottos[i] = winNums[i]) {

//     }

//   }
//   return answer;
// }

// 없는 숫자 더하기

// function solution(numbers) {
//   var answer = 0;

//   for (let i = 0; i < 10; i++) {
//     if(!numbers.includes(i)) {
//       answer += i;
//     }
//   }

//   return answer;
// }


// console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
// console.log(solution([5, 8, 4, 0, 6, 7, 9]));

// 음양 더하기

// function solution(absolutes, signs) {
//   var answer = 0;

//   for (let i = 0; i < absolutes.length; i++) {
//     answer += signs[i] ? absolutes[i] : -1 * absolutes[i];
//   }

//   return answer;
// }

// console.log(solution([4, 7, 12],[true, false, true]));

// 최소직사각형 **다시

// function solution(sizes) {
  
//   sizes.forEach(([width, height], index) => {
//     if (sizes[index][0] <sizes[index][1])  {
//       [sizes[index][0], sizes[index][1]] = [sizes[index][1], sizes[index][0]]} // 가로, 세로 값 중 큰갑을 가로 길이로 변경
//   })

//   console.log(sizes);

//   let widthMax = Math.max(...sizes.map(v => v[0])); // 가로 큰 값 추출
//   let heightMax = Math.max(...sizes.map(v => v[1])); // 가로 큰 값 추출
  
//   console.log(widthMax);
//   console.log(heightMax);
//   let answer = widthMax * heightMax;

//   return answer;
// }

// console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));

// 부족한 금액 계산하기 - 등차수열로 풀 수 있음

// function solution(price, money, count) {
//   let sum = 0;

//   for (let i = 1; i <= count; i++) {
//     sum += price * i;
//   }

//   return (sum < money) ? 0 : sum - money;

// }

// console.log(solution(3, 20, 4));

// 폰켓몬 
// new Set으로 중복 없애고 [...new set()]; 하면 배열로 바뀜
// function solution(nums) {

//   let selectMax = nums.length / 2;

//   let setNums = [...new Set(nums)];


//   return setNums.length > selectMax ? selectMax : setNums.length;
// }

// console.log(solution([3, 1, 2, 3]));
// console.log(solution([3, 3, 3, 2, 2, 4]));
// console.log(solution([3, 3, 3, 2, 2, 2]));

// 소수 만들기
// 에라스토테네스의 체 **
// function solution(nums) {
//   var answer = 0;
//   let length = nums.length;

//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       for (let k = j + 1; k < length; k++) {
//         // console.log(`${nums[i]} / ${nums[j]} / ${nums[k]}`);
//         const sum = nums[i] + nums[j] + nums[k];
//         if (isPrime(sum)) {
//           answer += 1;
//         }
//       } 
//     }
//   }
//   return answer;
// }

// let isPrime = (n) => {

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return n >= 2;
// } 

// console.log(solution([1, 2, 3, 4]));
// console.log(solution([1, 2, 7, 6, 4]));


// 스킬트리

// function solution(skill, skill_trees) {
//   var answer = 0;

//   for (let i = 0; i < skill_trees.length; i++) {
//     let idx = 0; // 스킬의 선택된 인덱스
//     let isPossible = true; // 가능한 스킬인지 아닌지 저장하는 변수
//     for (let j = 0; j < skill_trees[i].length; j++) {
//     // 현재 배울수 있는 스킬에 있는 스킬이면 (순서에 없는 다른 스킬 제외)
//       if (skill.includes(skill_trees[i][j])) { // 배울 수 있는 스킬인지 확인
//         if (skill_trees[i][j] === skill[idx]) {
//           idx++; // 다음 배울 스킬의 인덱스로 이동
//         } else {
//           isPossible = false; // 스킬 배우는거 불가능
//           break;
//         }
//       }
//     }
//     if (isPossible) answer++
//   }
//   return answer;
// }

// // indexOf, filter, includes 사용법 익히기
// console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));

// function solution(skill, skill_trees) {
//     var answer = 0;
//     var regex = new RegExp(`[^${skill}]`, 'g');
//     console.log(regex);
//     return skill_trees
//         .map((x) => x.replace(regex, ''))
//         .filter((x) => {
//             return skill.indexOf(x) === 0 || x === "";
//         })
//         .length
// }

// console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));

// 모의고사
// function solution(answers) {
//   let answer = [];
//   let cntScore = [];

//   let s1 = [1, 2, 3, 4, 5];
//   let s2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//   // 맞힌 문제 개수만큼 cntScore에 push 
//   // s1[i % s1.length]이부분 다시 생각
//   cntScore.push(answers.filter((s, i) => s === s1[i % s1.length]).length);
//   cntScore.push(answers.filter((s, i) => s === s2[i % s2.length]).length);
//   cntScore.push(answers.filter((s, i) => s === s3[i % s3.length]).length);
  
//   // console.log(cntScore);

//   for (let i = 0; i < cntScore.length; i++) {
//     const maxScore = Math.max(...cntScore);
//     if(maxScore === cntScore[i]) {
//       answer.push(i + 1); // 최고점인 사람 answer배열에 push
//     }
//   }

//   return answer;
// }

// console.log(solution([1, 2, 3, 4, 5]));
// console.log(solution([1, 3, 2, 4, 2]));

// 문자열 내 p,y 의 개수
// match 메소드는 p, y 없을 때 undefined로 되므로 런타임 에러난다

// function solution(s){
//   let lowerS = s.toLowerCase();
//   let searchP = lowerS.split('p').length;
//   let searchY = lowerS.split('y').length;

//   return searchP === searchY ? true : false;
  
// }

// console.log(`Pyy: ${solution('Pyy')}`);
// console.log(`pPoooyY: ${solution('pPoooyY')}`);


// 같은 숫자는 싫음

// function solution(arr) {
// filter((현재요소, 배열 인덱스) => ~~~)
//   let remove = arr.filter((e, i) => e !== arr[i + 1]);
//   // console.log(remove);
//   return remove;
// }

// console.log(solution([1, 1, 3, 3, 0, 1, 1])); // 1, 3, 0, 1
// console.log(solution([4, 4, 4, 3, 3]));

// 숫자 문자열과 영단어

// split, join으로 문제풀기 
// function solution(s) {
//   var answer = 0;
//   let stringToNum = [
//     'zero',
//     'one',
//     'two',
//     'three',
//     'four',
//     'five',
//     'six',
//     'seven',
//     'eight',
//     'nine',
//   ]
//   for (let i = 0; i < 10; i++) {
//     s = s.split(stringToNum[i]).join(i);
//   }

//   return Number(s); //Number, parseInt 둘다 가능
// }

// replace로 문제 풀기

// function solution(s) {
//   s = s.replace(/zero/gi, 0)
//   .replace(/one/gi, 1)
//   .replace(/two/gi, 2)
//   .replace(/three/gi, 3)
//   .replace(/four/gi, 4)
//   .replace(/five/gi, 5)
//   .replace(/six/gi, 6)
//   .replace(/seven/gi, 7)
//   .replace(/eight/gi, 8)
//   .replace(/nine/gi, 9)
//   return parseInt(s);
// }

// console.log(solution('one4seveneight'));
// console.log(solution('23four5six7'));
// console.log(solution('2three45sixseven'));
// console.log(solution('123'));

// 문자열을 정수로 바꾸기

// function solution(s) {
//   return parseInt(s);
// }

// 다른 사람 풀이
// function strToInt(str){
//   return str/1
//   }


// console.log(strToInt('1234'));
// console.log(strToInt('-1234'));

// 이상한 문자 만들기
// toUpperCase(), toLowerCase()는 배열에서 사용 x

// function solution(s) {

// return s.split(' ').map((el) => el.split('')
//         .map((el, index) => 
//           index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()
//         )
//         .join('')
//         )
//       .join(' ');
// }
// // let s = "try hello world"	
// // let arr = s.split(' ').map((el) => el.split(''));
// console.log(solution("try hello world"));

// 문자열 내림차순으로 배치
// 그냥 정렬 후 뒤집으면 됨
// function solution(s) {
//   let answer = s.split('').sort().reverse().join('');

//   return answer;
// }

// console.log(solution('Zbcdefg'));

// 문자열 다루기
// s의 길이 4 or 6 
// Number에서 지수형식 나오면 e도 숫자 처리 되므로 parseInt 사용하기
// function solution(s) {
//   var answer = true;
  
//   if (s.length !== 4 && s.length !== 6) {
//     return false
//   }
//   for(let i = 0; i < s.length; i++) {
//     if (isNaN(parseInt(s[i], 10))) {
//       return false;
//     }
//   } 
  

//   return answer;
// }

// console.log(solution('a234'));
// console.log(solution('1234'));


// 서울에서 김서방 찾기

// function solution(seoul) {
//   let search = seoul.indexOf('Kim');

//   return `김서방은 ${search}에 있다`;
//   ;
// }

// 두 정수 사이의 합
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// function solution(a, b) {
//   var answer = 0;

//   for(let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//     answer += i;
//   }

//   return answer;
// }

// function solution(a, b) {
  
//   return ((Math.max(a, b) - Math.min(a ,b) + 1) * (Math.min(a, b) + Math.max(a, b))) / 2 
// }

// console.log(solution(3, 5));
// console.log(solution(5, 3));


//수박수박수박수박수박수?

// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// function solution(n) {
//   var answer = '';

//   answer = '수박'.repeat(n / 2);

//   if(n % 2 !== 0) {
//     answer += '수';
//   }

//   return answer;
// }

// console.log(solution(4));
// console.log(solution(3));

// 자릿수 더하기

// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// function solution(n) {
//   var answer = 0;  
//   let nArr = n.toString().split('').reduce((el, i) => (el += parseInt(i)), 0);
//   return nArr;
// }

// console.log(solution(123));
// console.log(solution(987));

// let n = 123;
// console.log(n.toString().split(''))

// 자연수 뒤집어 배열로 만들기

// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// function solution(n) {
//   var answer = [];


//   return String(n).split('').reverse().map(Number);
// }

// console.log(solution(12345));

// 정수 내림차순으로 배치

// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// function solution(n) {
//   var answer = 0;
//   return parseInt(n.toString().split('').sort((a, b) => a - b).reverse().join(''));
// }
// console.log(solution(118372));

// 정수 제곱근 판별

// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 11 => 144 
// function solution(n) {
//   let x = Math.sqrt(n);
//   if(Number.isInteger(x)) {
//     return Math.pow((x + 1), 2);
//   } else {
//     return -1;
//   }
// }

// console.log(solution(121));
// console.log(solution(3));

// 제일 작은 수 제거

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
// sort 쓰면 
// function solution(arr) {
//   if(arr.length === 1) return[-1];


//   let i = 0;
//   for (let j = 1; j<arr.length; j++){
//       if(arr[j]<arr[i]) {
//           i=j;
//       }
//   }

//   arr.splice(i,1);

//   return arr;
// }

// console.log(solution([4, 3, 2, 1]));

// 짝수와 홀수

// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// function solution(num) {
//   var answer = '';
  
//   return num % 2 === 0 ? 'Even' : 'Odd';
// }

// console.log(solution(3));

// 최대공약수 최대공배수

// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
// 유클리드 호제법

// function solution(n, m) {
//   let gcd = 0;
//   let lcm = 0;

//   if(n % m === 0 || m % n === 0) {
//     gcd = Math.min(n , m);
//     lcm = Math.max(n , m);
//   } else {
//     for(let i = 0; i < Math.max(n, m); i++){
//       if (n % i === 0 && m % i === 0) {
//         gcd = i;
//       } 
//       lcm = (n * m) / gcd;
//     }

//   }

//   return [gcd, lcm];
// }

// console.log(solution(3, 12));
// console.log(solution(2, 5));
// console.log(solution(44, 121));

// 평균 구하기

// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// function solution(arr) {
//   return (arr.reduce((arr, cur) => arr += cur, 0)) / arr.length;
// }
// console.log(solution([1, 2, 3, 4]));

// 콜라츠 추측

// 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.

// function solution(num) {
//   var answer = 0;

//   while (answer <= 500) {
//     if (num === 1) return answer;
//     num = num % 2 === 0? (num / 2) : num * 3 + 1;
//     answer++;
//   }
//   return -1;
// }

// console.log(solution(16));
// console.log(solution(626331));

// 휴대폰 번호 가리기

// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// function solution(num) {
//   var answer = '';

//   return [...num].fill('*', 0, num.length - 4).join('');
// }

// console.log(solution('01033334444'));

// 하샤드 수

//의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// function solution(x) {
//   let sum = 0;
//   let arr = (x + '').split('');

//   for(let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]); 
//   }

//   return x % sum === 0 ? true : false;
// }

// console.log(solution(18));
// console.log(solution(11));

// 행렬의 덧셈

// function solution(arr1, arr2) {
//   var answer = [];

//   for(let i = 0; i < arr1.length; i++) {
//     answer[i] = [];
//     for(let j = 0; j < arr1[0].length; j++) {
//       answer[i][j] = arr1[i][j] + arr2[i][j];
//     }
//   }
//   return answer;
// }

// console.log(solution([[1, 2]], [[3, 4]]));

// x만큼 간격이 있는 n개의 숫자

// function solution(x, n) {
//   var answer = [];
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum = x * i;
//     answer.push(sum);
//   }
//   return answer;
// }

// console.log(solution(4, 5));


// 직사각형 별 찍기

// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//   const n = data.split(" ");
//   const a = Number(n[0]), b = Number(n[1]);

//   let answer = '';

//   for(let i = 0; i < b; i++) { // 세로길이 b
//     for (let j = 0; j < a; j++) { // 가로길이 a
//       answer += '*';
//     }
//     answer += '\n';
//   }
//   console.log(answer);
//   });

// 소수찾기
// 에라스토테네스의 체로 하는 이유? 
//* 예를들어 n에 1만개 넣을경우 효율성이 낮아지므로 제곱근을 통해 소수 구하는게 더 효율적이여서

// 에라스토테네스의 체 기반의 소수 찾는 함수 
// function isPrime(x) {
//   for(let i = 2; i <= Math.sqrt(x); i++){
//     if(x % i ===0) return false;
//   }
//   return true;
// }
// function solution(n) {
//   var answer = 0;
//   // 1은 소수가 아니므로 2부터 n까지 모든수 순회
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       // 소수면 answer에 +1
//       answer++;
//     }
//   }
//   return answer;
// }

// console.log(solution(10));
// console.log(solution(4));

// 약수의 합
// 배열로 풀어서 런타임 에러남

// function solution(n) {
//   var answer = [];

//   for (let i = 1; i <= n; i++) {
//       if(n % i === 0) {
//         answer.push(i)
//       }
//     }

//   let result = answer.reduce((a, b) => {return a + b});

//   return result;
// }
// {a + b} 하면 undefinded 뜨는이유???

// console.log(solution(12));

// 시저 암호 (사람들 코드 보고 )
// 아스키 코드 A~Z(65~90) , a~z(97~122)
// 문자열 -> 아스키코드 : s.charCodeAt()
// 아스키코드 -> 문자열 : String.fromCharCode()

