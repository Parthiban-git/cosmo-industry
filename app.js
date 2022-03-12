const sub=(e)=>{
    e.preventDefault();
    let form=document.getElementById("myForm");
    console.log("form",form);
    let formdata=new FormData(form);
    
    alert("welcome " + formdata.get("fname"));
}