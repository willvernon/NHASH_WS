 //Workers.js
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
                            const url = `https://us-central1-minechart-218818.cloudfunctions.net/Provider-Workers`
                            console.log(url);
                            getJSON(url, function (err, data) {
                            
                            
                            
                            
                            
                            if (err != null) {
                                console.error(err);
                            } else {
                            
                                var text = `
                            
                        <b><p>Workers : </p></b>
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
                            
                                $(".dataPanel").html(text);
                                            console.log(text);
                            
                                        }
                            
                                    });
                            
                            /**/    
                            
                            