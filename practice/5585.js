/* 타로는 자주 JOI잡화점에서 물건을 산다. JOI잡화점에는 잔돈으로 500엔, 100엔, 50엔, 10엔, 5엔, 1엔이 충분히 있고, 언제나 거스름돈 개수가 가장 적게 잔돈을 준다. 타로가 JOI잡화점에서 물건을 사고 카운터에서 1000엔 지폐를 한장 냈을 때, 받을 잔돈에 포함된 잔돈의 개수를 구하는 프로그램을 작성하시오. */
//1000엔 지폐 한장을 냄. 입력에는 지불할 돈
//ex) 입력이 380이면 380엔 내면 되는건데 꼭 1000엔 내고 거슬러받는 것..ㅎ
//잔돈의 개수를 구하는 문제! count = 0; 을 생각해 주자.

function solution(num) {
    let count = 0;

    let rec = 1000 - num; // 1000 - 380 = 620
    let change_list = [500, 100, 50, 10, 5, 1];

    if (rec == 0) {
        return 0;
    }

    for (change of change_list) {
        // console.log(change);

        
        count += parseInt(rec / change);
        console.log(`${change} 일때 받을돈${rec}/거스름돈${change} : ${rec/change} = ${count}`);

        console.log(`받을돈 ${rec}일때 나머지 :${rec % change} `);
        rec %= change;
        
        console.log(rec %= change);

        // console.log(count);
    }
    
    return count;
}

console.log(solution(160));
