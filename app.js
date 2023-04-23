function genrateotp(){
  const otplength = 5;
  let otp = " ";

  for(let i=0; i<otplength; i++){
    otp += Math.floor(Math.random()*9); 
  }
  alert(otp);
}