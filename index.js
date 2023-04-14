
function superbowlWin(record){
    const win = record.find((record) => record.result === 'W')
    if (typeof win === "object"){
        return win.year
    } else {return}
}
