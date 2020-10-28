var s;



const select = (x) => {

    s = x;

    document.getElementsByClassName("sp-div")[x].style.transform = "scale(1.1)";

    document.getElementsByClassName("sp-div")[(x===1 ? 0: 1)].style.transform = "none";

};



function submit() {

    if (s !== undefined) {

        document.getElementById("start-page").style.display = "none";

        

       swal({

        title: "BLOG ON EPIC GAMES",

        text: "This blog is made for EPIC GAMES ",

        icon: "success",

        button: "continue"

    });

 

        

        

        

        if (s === 0) {

            

        }

        else {

          

        }

    }

    else {

        alert("Kindly select one of the given options");

    }

}





