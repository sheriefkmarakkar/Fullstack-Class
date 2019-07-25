function operation()
    {
       
       
        var n1=Number(document.getElementById("n1").value);
        var n2=Number(document.getElementById("n2").value);
        var op=document.getElementById("op").value
        var r;
       
        if(op=="Add")
        {
           r=addn(n1,n2);
        }
        else if(op=="Sub")
        {
            
            r=Subn(n1,n2);
        }
        else if(op=="Mul")
        {
            r=Muln(n1,n2);
        }
        else
        {
            r=Divn(n1,n2);
        }
        document.getElementById("p").innerHTML=r;
    }
    function addn(a,b)
    {
        var c=a+b;
        return c;
    }
    function Subn(a,b)
    {
        var r=a-b;
        return r;
    }
    function Muln(a,b)
    {
        var r=a*b;
        return r;
    }
    function Divn(a,b)
    {
        var r=a/b;
        return r;
    }


    function studreg()
    {
        var name=document.getElementById("name").value;
        var branch=document.getElementById("branch").value;
        var date=getElementById("date1").value;
        var age=Document.getElementById("age").value;
        var gender=document.getElementsByName("g").value;
        var c=document.getElementById("c").value;


        alert(name);

    }