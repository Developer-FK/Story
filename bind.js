function bindData(){


    console.log("bind js")
    let storage = localStorage.getItem('InputText');
    let storageArray =  storage.split(',')
    console.log(storageArray)
    $('.an').text(storageArray[0]);
    $('.an-an').text(storageArray[1]);
    $('.one-m').text(storageArray[2]);
    $('.adjec').text(storageArray[3]);
    $('.verbing').text(storageArray[4]);
    $('.motivation').text(storageArray[5]);
    $('.numer').text(storageArray[6]);
    $('.yn').text(storageArray[7]);
    $('.sel').text(storageArray[8]);
    $('.mean').text(storageArray[9]);




}