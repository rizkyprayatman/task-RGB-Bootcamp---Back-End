function nilaiMax(arr){ 
    var nilaiMax = 0;
    
    for( i = 0; i < arr.length; i++ ){
        if(arr[i] > nilaiMax ){
          nilaiMax = arr[i];
        }
    }

    console.log(nilaiMax);
}

nilaiMax([4,3,1,2,7,6]);