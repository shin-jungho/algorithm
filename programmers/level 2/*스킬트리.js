// 스킬트리
// 다른 사람 풀이법 보고 이해한 코드 
// 다시 풀어보기

function solution(skill, skill_trees) {
  var answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let idx = 0; // 스킬의 선택된 인덱스
    let isPossible = true; // 가능한 스킬인지 아닌지 저장하는 변수
    for (let j = 0; j < skill_trees[i].length; j++) {
    // 현재 배울수 있는 스킬에 있는 스킬이면 (순서에 없는 다른 스킬 제외)
      if (skill.includes(skill_trees[i][j])) { // 배울 수 있는 스킬인지 확인
        if (skill_trees[i][j] === skill[idx]) {
          idx++; // 다음 배울 스킬의 인덱스로 이동
        } else {
          isPossible = false; // 스킬 배우는거 불가능
          break;
        }
      }
    }
    if (isPossible) answer++
  }
  return answer;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));

// indexOf, filter, includes 사용해서 푸는법

function solution(skill, skill_trees) {
    var answer = 0;
    var regex = new RegExp(`[^${skill}]`, 'g');
    console.log(regex);
    return skill_trees
        .map((x) => x.replace(regex, ''))
        .filter((x) => {
            return skill.indexOf(x) === 0 || x === "";
        })
        .length
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));