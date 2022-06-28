// 최소직사각형 **다시풀어보기

function solution(sizes) {
  
  sizes.forEach(([width, height], index) => {
    if (sizes[index][0] <sizes[index][1])  {
      [sizes[index][0], sizes[index][1]] = [sizes[index][1], sizes[index][0]]} // 가로, 세로 값 중 큰갑을 가로 길이로 변경
  })

  console.log(sizes);

  let widthMax = Math.max(...sizes.map(v => v[0])); // 가로 큰 값 추출
  let heightMax = Math.max(...sizes.map(v => v[1])); // 가로 큰 값 추출
  
  console.log(widthMax);
  console.log(heightMax);
  let answer = widthMax * heightMax;

  return answer;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));