function GenerateAll() {
    let result = "";
    if (document.getElementById("FH5 全车车展").checked) {
        result += Generate("FH5 全车车展")
    }
    if (document.getElementById("FH5 碰撞检测").checked) {
        result += Generate("FH5 碰撞检测")
    }
    if (document.getElementById("FH5 自动传送").checked) {
        result += Generate("FH5 自动传送")
    }
    if (document.getElementById("FH5 超级抽奖").checked) {
        result += Generate("FH5 超级抽奖")
    }
    if (document.getElementById("FH5 技能点数").checked) {
        result += Generate("FH5 技能点数")
    }
    if (document.getElementById("FH5 车辆加速").checked) {
        result += Generate("FH5 车辆加速")
    }
    if (document.getElementById("FH5 飞天移动").checked) {
        result += Generate("FH5 飞天移动")
    }
    if (document.getElementById("FH5 设置点数").checked) {
        result += Generate("FH5 设置点数")
    }
    if (document.getElementById("FH5 设置经验").checked) {
        result += Generate("FH5 设置经验")
    }
    document.getElementById("result").innerText = result;
    navigator.clipboard.writeText(result);
}
function ID_Changed() {
    let ID = document.getElementById("ID").value.split(" ");
    document.getElementById("XboxUserID").value = ID[0];
    document.getElementById("SteamUserID").value = ID[1];
}

function Generate(ApplicationName) {
    let result = "";
    let XboxUserID = document.getElementById("XboxUserID").value;
    let SteamUserID = document.getElementById("SteamUserID").value;

    if (!ApplicationName) {
        return result;
    }
    if (XboxUserID != null && XboxUserID != "") {
        result += XboxUserID + ApplicationName + "\n";
    }
    if (SteamUserID != null && SteamUserID != "") {
        result += SteamUserID + ApplicationName + "\r\n";;
    }
    return result;
}