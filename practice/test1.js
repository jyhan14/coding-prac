function solution(month, day) {
    // month 를 그대로 index로 쓰기위해서 0월 일수 추가
    let m_len = [0, 31,28,31,30,31,30,31,31,30,31,30,31];
    let remain_days = 98
    // 남은기간에서 오늘 ~ 현재 월의 말일까지의 기간 차감 ---------
    remain_days = remain_days - (m_len[month] - day);
    // 다음월로 넘김 (오늘이 12월인 경우 다음월 1월)
    if (month == 12) {
        month = 1
    } else {
        month ++ 
    }
    // -------------------------------------------------
    console.log(remain_days);

    while (remain_days != 0) {
        // 남은기간이 해당 month의 일수보다 큰경우 해당일의 전체 일수를 차감, 다음월로 넘김
        if (remain_days > m_len[month]) {
            remain_days = remain_days - m_len[month]
            if (month == 12) {
                month = 1
            } else {
                month ++
            }
        // 남은기간이 해당 month의 일수보다 작은 경우 day 는 해당월의 남은기간, Loop 종료 
        } else {
            day = remain_days;
            remain_days = 0;
        }
    }
    return `${month}월 ${day}일`

}
console.log(solution(6,22));