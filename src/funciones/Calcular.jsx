




const calcula = (e) => {
    e.preventDefault()
//alert("madre")

   
    //   const [peajes, setPeajes] = useState();
    //   setPeajes(Math.round((totalpeajes*100)/100)*valPeaje)
    //   let precioKm = (((((input.num2)*13.2)/4)/10)/10)
    //   let totalGasolina = (parseInt(input.num1)*precioKm)*2;

    // e.preventDefault()
     if((e.target.value === 0) || (e.target.value === "")){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se permiten letras ni signos",
            showConfirmButton: false,
            timer: 2000,
          });
    }else{
        e.target.value === ""
    }
    //   setResultado("") 
    // }else{
    //   setResultado((+precioKm) + (+totalGasolina)+(peajes))
    //     input.num1 = "";
    //     focus()
    //     resetField(input.num2);
    //     inputRef.current.focus() 
    //     setFocus()
    // }
  };


  export default calcula;