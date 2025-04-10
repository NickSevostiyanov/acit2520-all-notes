alert("This is running in the browser")


function getAssignments() {
    const response =  fetch("http://localhost:3000/")
    const data =  response.json()
    console.log(data)
    // data.map(d => `<p>${d.title}</p>`)
    
}

async function main() {
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.querySelector("#title");
        // OPTIMISTIC UI 
            // used by discord
        fetch("/createAssignment", { 
            method: "post", 
            body: JSON.stringify({ title: title.value }),
        });
        const pTitle = `<p>${title.value}</p>`
        document.querySelector("#assignments").innerHTML = pTitle

    });
    const assignments = await getAssignments();
    document.querySelector("#assignments").innerHTML = assignments
        .map((p) => `<p>${title}</p>`)
        .join("");        
}

main();