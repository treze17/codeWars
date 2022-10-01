function findOdd(A) {
    //happy coding!
     let count = 0
    for(let i = 0; i < A.length;i++){
      
      for(let a = 0; a < A.length; a++){
          if(A[a] === A[i]){
           count++
          }
      }
      if (count % 2 !== 0) {
          return A[i]
      }
    }
   
  }