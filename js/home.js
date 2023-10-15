//Home.js
    

        /* Container 4 */
var getJSON = function (url4, callback) {
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url4, true);
        xhr.responseType = 'json';
        
        xhr.onload = function () {
        
            var status = xhr.status;
        
            if (status == 200) {
                callback(null, xhr.response);
            } else {
                callback(status);
            }
        };
        
        xhr.send();
        };
        
        let id4 = window.location.search
        const url4 = `https://us-central1-minechart-218818.cloudfunctions.net/Provider-Ex`
        console.log(url4);
        getJSON(url4, function (err, data) {
        
        
        
        
        
        if (err != null) {
            console.error(err);
        } else {
        
     
        
            var text = `
        <p><b>ID Data : Profitability,</b> </p></b>`
        
           var i;
        
            for (i = 0; i < data.result.current.length; i++) {
                text += "<b>" + "<li>" +
                    data.result.current[i].name + "</b>" + ": " +
                    data.result.current[i].profitability + ",";
                    
                    
            }
        
            $(".container4").html(text);
                        console.log(text);
        
                    }
        
                });


/* Container 3 */
var getJSON = function (url3, callback) {
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url3, true);
        xhr.responseType = 'json';
        
        xhr.onload = function () {
        
            var status = xhr.status;
        
            if (status == 200) {
                callback(null, xhr.response);
            } else {
                callback(status);
            }
        };
        
        xhr.send();
        };
        

        
        let id3 = window.location.search
        const url3 = `https://us-central1-minechart-218818.cloudfunctions.net/Provider-Workers`
        console.log(url3);
        getJSON(url3, function (err, data) {
        
        
        
        
        
        if (err != null) {
            console.error(err);
        } else {
        
     
        
            var text = `
        <p><b>ID Data : Rigs Online,</b> </p></b>`
        
           var i;
        
            for (i = 0; i < data.result.workers.length; i++) {
                text += "<b>" + "<li>" +
                    data.result.workers[i][0] + "</b>" + " , ";
                    
                    
            }
        
            $(".container3").html(text);
                        console.log(text);
        
                    }
        
                });

/* Container 2 */
var getJSON = function (url2, callback) {
        
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url2, true);
        xhr.responseType = 'json';
        
        xhr.onload = function () {
        
            var status = xhr.status;
        
            if (status == 200) {
                callback(null, xhr.response);
            } else {
                callback(status);
            }
        };
        
        xhr.send();
        };
        

        
        let id2 = window.location.search
        const url2 = `https://us-central1-minechart-218818.cloudfunctions.net/current-price`
        console.log(url2);
        getJSON(url2, function (err, data) {
        
        
        
        
        
        if (err != null) {
            console.error(err);
        } else {
        
     
        
            var text = `
        <p><b>Live ${data.bpi.USD.code} To Bitcoin,</b> </p></b>
        <p>'                   </p>
        
        <center><p><b>  $${data.bpi.USD.rate}  </b></p></center>
        <p>' </p>
        <p>${data.time.updated}</p>`
        
            $(".container2").html(text);
                        console.log(text);
        
                    }
        
                });
                
/* Container 1 */
var getJSON = function (url1, callback) {
        
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url1, true);
    xhr.responseType = 'json';
    
    xhr.onload = function () {
    
        var status = xhr.status;
    
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    
    xhr.send();
    };
    
    
    let id1 = window.location.search
    const url1 = `https://us-central1-minechart-218818.cloudfunctions.net/BlockChain`
    console.log(url1);
    getJSON(url1, function (err, data) {
    
    
    if (err != null) {
        console.error(err);
    } else {
    
        var text = `
        <p><b> Bitcoin USD </b></p>
    
    <p> Buy Price: $${data.USD.buy},</p>
    <p> Sell Price: $${data.USD.sell},</p>
    <p> Last: $${data.USD.last}, </p></b>`
        $(".container1").html(text);
                    console.log(text);
    
                }
    
            });
