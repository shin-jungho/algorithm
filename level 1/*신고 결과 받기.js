// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 
// 무지가 개발하려는 시스템은 다음과 같습니다.

// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
// k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
// 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.
// 다음은 전체 유저 목록이 ["muzi", "frodo", "apeach", "neo"]이고, k = 2(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시입니다.

// d_list: 이용자의 id가 담긴 문자열 배열
// report: 각 이용자가 신고한 이용자의 ID가 담김 문자열 배열
// k: 정지 기준 신고 횟수 (포함)

// answer는 각 element가 number인 배열로 나와야 한다. ㅇ
// 신고 정보에 대한 정보가 필요하다. 
// 신고 정보는 여러 사람의 정보가 들어가며, '사람'과 '신고한 사람'의 쌍으로 들어간다. ㅇ
// 따라서 객체를 사용해야 한다. for in 사용?
// 중복신고에 대하여 중복을 없애는 과정이 필요하다. 33~35줄

function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);
  const reportedList = {}; // 신고당한 id
  // const setReport = new Set(report); // 중복제거

  id_list.map((user) => { // key = userid를 value = 빈 배열 가지는 객체
    reportedList[user] = [];
  })
  // report_list { muzi: [], frodo: [], apeach: [], neo: [] }

  report.map((user) => { // 사람, 신고한사람 들어가는 배열
    const [userID, reportId] = user.split(' ');
    if (!reportedList[reportId].includes(userID)) {
      reportedList[reportId].push(userID);
    } // if절 -> 신고자 포함되는지 보고 안되어있을때 이름 추가(중복제거)
  });

  for(const key in reportedList) {
    if(reportedList[key].length >= k) {
      reportedList[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      })
    }
  }
  return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2));


// new Array(id_list.length).fill(0) 하는이유? 
