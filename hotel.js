function cal(){
    document.getElementById('f1').addEventListener('submit', function(event) {
        event.preventDefault();
        calBalance();
      });
      
      function calBalance() {
        const i1 = parseInt(document.getElementById('3').value);
        const i2 = parseInt(document.getElementById('4').value);
        const r1 = document.getElementById('r1').value;
        const r2 = document.getElementById('r2').value;
        const a1 = parseInt(document.getElementById('5').value);
      
        const roomRate = r1 === 'Deluxe Room' ? 4000 : 2500;
        const AR = r2 === 'AC' ? 1000 : 300;
      
        const TRC = roomRate * i1;
        const TAC = AR * i1;
        const TC = TRC + TAC;
        if(i2>2){
           balance=(TC-a1)+((i2-2)*1000);
        }
        else{
        const balance = TC - a1;
        }
      
        document.getElementById('TRC').value = TRC;  
        document.getElementById('TAC').value = TAC;
        document.getElementById('TC').value = TC;
        document.getElementById('bal').value = balance;
      }
    }