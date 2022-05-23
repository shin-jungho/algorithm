// 직사각형 별 찍기
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);

  let answer = '';
  // 밑부터 코드 작성
  for(let i = 0; i < b; i++) { // 세로길이 b
    for (let j = 0; j < a; j++) { // 가로길이 a
      answer += '*';
    }
    answer += '\n';
  }
  console.log(answer);
  });