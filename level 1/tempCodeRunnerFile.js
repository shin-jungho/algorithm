process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);

  let answer = '';

  for(let i = 0; i < b; i++) { // 세로길이 b
    for (let j = 0; j < a; j++) { // 가로길이 a
      answer += '*';
    }
    answer += '\n';
  }
  console.log(answer);
  });