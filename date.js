module.exports("Hello World");

function getDate(){
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let daye = today.toLocaleDateString("en-US", options);
    return daye;
}s