var array=[];
function saveData(){
    var a={
        name :document.getElementById("name").value,
        id :document.getElementById("id").value,
        proname :document.getElementById("proname").value,
        qty :document.getElementById("qty").value,
        price :document.getElementById("price").value,
    };
    console.log(a);
    array.push(a);
}

function showData(){
    var show="";
    for (let i in array){
        var number = i;
        number++;
        show += "<tr>";
        show += "<td>" +(number) +"</td>";
        show += "<td>" +array[i].name +"</td>";
        show += "<td>" +array[i].id +"</td>";
        show += "<td>" +array[i].proname +"</td>";
        show += "<td>" +array[i].qty +"</td>";
        show += "<td>" +array[i].price +"</td>";
        show += "<td>" +parseFloat(array[i].qty)*parseFloat(array[i].price) +"</td>";
        show += "</tr>";
    }
    document.getElementById("tbody").innerHTML=show;
}

function resetData(){
    document.getElementById("name").value="";
    document.getElementById("id").value="";
    document.getElementById("proname").value="";
    document.getElementById("qty").value="";
    document.getElementById("price").value="";
}