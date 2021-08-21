// let xhr = new XMLHttpRequest();

let enKey = "axyJNh3BEp6lnPLgiaB7wLSZPImK7bk9FkfoO4aVbMLo%2BYOpCA9KDNeeQnSL4SatMeB%2B0%2B9XjhLruJAzgmwpwQ%3D%3D";
let deKey ="axyJNh3BEp6lnPLgiaB7wLSZPImK7bk9FkfoO4aVbMLo+YOpCA9KDNeeQnSL4SatMeB+0+9XjhLruJAzgmwpwQ=="

let url = 'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/sido'; /*URL*/
let queryParams = '?' + encodeURIComponent('ServiceKey') + '='+deKey; /*Service Key*/


let apiUrl = url + queryParams
console.log(apiUrl)

// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };

// xhr.send('');