const GAS_URL = "你的GAS網址";

function calculate(){

    const weight =
    Number(document.getElementById("weight").value);

    const activity =
    Number(document.getElementById("activity").value);

    const protein =
    (weight * activity).toFixed(1);

    document.getElementById("result").innerHTML=
    `
    🦫<br><br>
    每日建議蛋白質攝取量<br><br>
    <span style="font-size:50px;">
    ${protein}
    </span>
    g
    `;

    fetch(GAS_URL,{
        method:"POST",
        mode:"no-cors",
        body:JSON.stringify({
            weight,
            activity,
            protein
        })
    });
}
