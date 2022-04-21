const JS23myPost = document.getElementById("addpost");

       JS23myPost.addEventListener("submit",(event)=>{
        event.preventDefault();
        let JS23_brand = document.getElementById("brand").value;
        // console.log(title);
        let JS23_model = document.getElementById("model").value;
        // console.log(title+body);
        fetch("https://olive-bead-glazer.glitch.me",{
            method: "POST",
            headers:{
                "Accept":"application/json,text/plain,*/*",                
                "Content-type":"application/json",
            },
            body:JSON.stringify({brand:JS23_brand,model:JS23_model})
        })
        .then(JS23_resp=>JS23_resp.json())
        .then(JS23_data => document.getElementById("JS23_div_f").textContent=JS23_data.msg)
        .catch(err => document.getElementById("JS23_div_f").textContent=JS23_data.msg)
       })