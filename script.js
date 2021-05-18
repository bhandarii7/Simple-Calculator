function getHistory(){
    return document.getElementById("history-data").innerText;
}

// alert(getHistory());
function showHistory(num){
    document.getElementById("history-data").innerText=num;
}

function getValue(){
    return document.getElementById("value-data").innerText;
}

function showValue(num){
    if(num=='')
    {
        document.getElementById("value-data").innerText=num;
    }
    else
    {
        document.getElementById("value-data").innerText=formattedData(num);
    }
}


function formattedData(num){
    if(num=='-')
    {
        return ""; 
    }
    var n= Number(num);
    var val= n.toLocaleString("en-IN");
    return val;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
var opLen = operator.length;
for(var i=0;i<opLen;i++)
{
    operator[i].addEventListener('click',function(){
        if(this.id=='clear')
        {
            showHistory("");
            showValue("");
        }
        else if(this.id=='backspace')
        {
            var n = reverseNumberFormat(getValue()).toString();
            if(n)
            {
                n=n.substr(0,n.length-1);
                showValue(n);
            }
        }
        else 
        {
            var output=getValue();
            var history= getHistory();
            if(output=='' && history!='')
            {
                if(isNaN(history[history.length-1]))
                {
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!='')
            {
            output= output==''?output:reverseNumberFormat(output);
            history=history+output;

            if(this.id=="=")
            {
                var result=eval(history);
                showValue(result);
                showHistory("");
            }
            else
            {
                history=history+this.id;
                showHistory(history);
                showValue("");
            }
            
        }
        }
       
    })
}

var Numbers = document.getElementsByClassName("numbers");
var numLen = Numbers.length;
for(var i=0;i<numLen;i++)
{
    Numbers[i].addEventListener('click',function(){
        var output = reverseNumberFormat(getValue());
        if(output!=NaN)
        {
            output=output+this.id;
            showValue(output);
        }
    })
}

//toggle dark mode

    var toggleBtn=document.getElementById("switch");
    var transformContainer=document.querySelector("#container");
    var transformNumbers = document.querySelectorAll(".numbers");
    var transformOperator=document.getElementsByClassName("operator");

    toggleBtn.addEventListener('click',function(){    

    // toggleBtn.classList.toggle("light");

    if(toggleBtn.innerText=='Light')
    {
        toggleBtn.innerText='Dark';
        toggleBtn.classList.replace("light","dark");
    }
    else if(toggleBtn.innerText=='Dark')
    {
        toggleBtn.innerText='Light';
        toggleBtn.classList.replace("dark","light");
    }

    var i;
    transformContainer.classList.toggle("toggle-dark");

        for ( i = 0; i < transformNumbers.length; i++) {
            transformNumbers[i].classList.toggle("numbers-dark");
        }

    for(i=0;i<transformOperator.length;i++){
        transformOperator[i].classList.toggle("operator-dark");
    }    

});

// toggle dark mode end



