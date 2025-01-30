

    document.getElementById("photo-upload").addEventListener("change", function(event) {
        const fileList = document.getElementById("file-list");
        //fileList.innerHTML = ""; // Clear previous list
        
        for (let file of event.target.files) {
            let listItem = document.createElement("li");
            listItem.textContent = file.name;
            fileList.appendChild(listItem);
        }
    });
    // document.getElementById("photo-upload").addEventListener("change",function(event){
    //       const fileSummary = document.getElementById("summary-list");
    //     for (let file of event.target.files) {
    //         let listSummary = document.createElement("li");
    //         listSummary.textContent = file.name;
    //         fileSummary.appendChild(listItem);
    //     }
    // })
      
    

let counter = 0;

console.log("hello World");
function increment() {
    counter++;

}
function decrement() {
    counter--;
}
function get() {
    return counter;

}
let inc = document.getElementById("increment");
let dec = document.getElementById("decrement");
const input = document.getElementById("input");
inc.addEventListener('click', () => {
    increment();
    input.value = get();
});
dec.addEventListener('click', () => {
    if (input.value > 0) {
        decrement();
    }
    input.value = get();
});