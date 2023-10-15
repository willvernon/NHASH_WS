//Profit.js
        /* Getting Json Data From NHASH API Using User Input WalletID */
                        /* API Result: stats.provider.ex */
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
                            
                                for (i = 0; i < data.result.current.length; i++) {
                                    text += "<b>" + "<li>" +
                                        data.result.current[i].name + "</b>" + " - " + "<br>" + "<ul>" + " Suffix " + ": " +
                                        data.result.current[i].suffix + "," + " Algo " + ": " +
                                        data.result.current[i].algo + "," + " Profitability " + ": " +
                                        data.result.current[i].profitability + "," + " Data " + ": " +
                                        data.result.current[i].data[1] + "<br>" + "</ul>"
                                        ;
                                }
                            /**/
                                $(".dataPanel").html(text);
                                            console.log(text);
                            
                                        }
                            
                                    });
                            
                            /**/    