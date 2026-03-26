let button = document.querySelector("button")
let img = document.getElementsByTagName("img")[0];
img.setAttribute("src", "https://images.dog.ceo/breeds/terrier-silky/n02097658_4952.jpg")

button.addEventListener("click", ()=>{
    // console.log("Stop tickling me, uwu!")
    let endpoint = "https://dog.ceo/api/breeds/image/random";

    fetch(endpoint) //utilizing the endpoint, default is GET
        .then((data) => {
            if(data.ok){
                return data.json();
            } else {
                throw Error("ITS BROKEN")
            }
            // return data.json() //returns parsed data
        })
        .then((parsedData) => {
        // console.log(parsedData);
        let message = parsedData.message;
        img.setAttribute("src", message);
    })
        .catch(errors => {
            console.log(errors);
        })
})