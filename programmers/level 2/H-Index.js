// 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.


// 문제 풀이
// h번 이상 인용된 논문이 h편 이상 인 부분만 알면 되기 때문에
// 우선 내림차순으로 정렬을 하고
// H-index의 값을 0부터 1씩 증가시키면서
// 해당 값을 배열의 인덱스로 비교
// 비교를 하다가 H-index보다 작은 값을 배열에서 발견(적은 인용 횟수)하면
// 반복문을 종료하고 값을 return 

function solution(citations) {
  let hIndex = 0;
  citations.sort((a, b) => b - a); // 내림차순으로 정렬
  
  while (hIndex + 1 <= citations[hIndex]) { // h-index보다 작은 값 발견하면 반복문 종료
    hIndex++
  }
  return hIndex;
}

console.log(solution([3, 0, 6, 1, 5]));