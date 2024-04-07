function calculateLove(){
    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();


    if(name1==="" || name2===""){
        alert("Please Enter Both Names:")
    }
    else{

        const lovepercentage=Math.floor(Math.random()*101);
        const result=document.getElementById("result");

        result.innerHTML=`${name1} and ${name2} 's Love Percentage:${lovepercentage} %`


        if(lovepercentage<30){
            result.innerHTML+="<br> Not a great Match! . Keep Looking..."
        }
        else if(lovepercentage>=30 && lovepercentage<70){
            result.innerHTML+="<br> There is a potential. Give it a Try...."
        }
        else{
            result.innerHTML+="<br> Great Match ! Love is in the Air..."
        }

    }
}