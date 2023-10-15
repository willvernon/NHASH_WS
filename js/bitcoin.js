 //Bitcoin.js
        /* Getting Json Data From NHASH API Using User Input WalletID */
                        /* API Result: stats.provider.workers */
                    var getJSON = function (url, callback) {
        
                            var xhr = new XMLHttpRequest();
                            xhr.open('GET', url, true);
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
                            
                            let id = window.location.search/**/
                            const url = `https://us-central1-minechart-218818.cloudfunctions.net/Provider-Ex`                            
                            console.log(url);
                            getJSON(url, function (err, data) {
                            
                            
                            
                            
                            
                            if (err != null) {
                                console.error(err);
                            } else {
                            
                            
                            
                                var text = `
                            <p><b>Provider Info</b></p>
                            <p><b>ID Data :</b> </p></b>`
                            
                               var i;
                            
                                for (i = 0; i < 7; i++) {
                                    text += "<b>" + "<li>" +
                                        data.result.current[i].name + "</b>" + " - " + "<br>" + "<ul>" + " Suffix " + ": " +
                                        data.result.current[i].suffix + "," + " Algo " + ": " +
                                        data.result.current[i].algo + "," + " Profitability " + ": " +
                                        data.result.current[i].profitability + "," + " Data " + ": " +
                                        data.result.current[i].data[1] + "<br>" + "</ul>"
                                        ;
                                }
                        
                                $(".dataPanel").html(text);
                                            console.log(text);
                            
                                        }
                            
                                    });
                            
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
                            
                            let id2 = window.location.search/**/
                            const url2 = `https://us-central1-minechart-218818.cloudfunctions.net/Provider-Workers`
                            console.log(url2);
                            getJSON(url2, function (err, data) {
                            
                            
                            
                            
                            
                            if (err != null) {
                                console.error(err);
                            } else {
                            
                                var text = `
                            
                        <b><p>Workers Info : </p></b>
                           <p>Addr : ${data.result.addr}</p>` 
                               /**/ var i;
                                var rigName = 0
                                var speed = 1
                                var time = 2
                                var dif = 4
                                var location = 5
                            
                            
                            
                                for (i = 0; i < data.result.workers.length; i++) {
                                    text += "<b>" + "<li>" +
                                        data.result.workers[i][rigName] + "</b>" + " - " + "<br>" + "<ul>" + " Speed " + ": " +
                                        data.result.workers[i][speed].a + "," + " Time " + ": " +
                                        data.result.workers[i][time] + "," + " Difficulty " + ": " +
                                        data.result.workers[i][dif] + "," + " Conn Location " + ": " +
                                        data.result.workers[i][location] + "<br>" + "</ul>"
                                        ;
                                }
                            
                                $(".dataPanel2").html(text);
                                            console.log(text);
                            
                                        }
                            
                                    });