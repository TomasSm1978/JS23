fetch("https://olive-bead-glazer.glitch.me")
    .then(JS23ND_getApiRes => {
        if (JS23ND_getApiRes.ok) {
            document.getElementById("JS23_div_h").textContent="Duomenys gauti sėkmingai"
            return JS23ND_getApiRes.json();
        }
        else {
            console.log("Kažkas negerai")
        }
    })
    .then(JS23ND_getApiData => {
        let output = "";
        output += `<tr>
        <th style="border:1px solid black; width:70%; text-align: left">BRAND</th>
        <th style="border:1px solid black; width:70%;  text-align: left">MODEL</th>
        </tr>`

        JS23ND_getApiData.forEach((item, index) => {
            output += `<tr>
            <td style="border:1px solid black; width:70%">${item.brand}</td>
            <td style="border:1px solid black; width:70%">${item.model}</td>
            </tr>`
            // console.log(output)
        })
        document.getElementById("JS23ND_table").innerHTML = output;
        // console.log(JS23ND_getApiData)
    })
    .catch(err => document.getElementById("JS23_div_h").textContent=err)