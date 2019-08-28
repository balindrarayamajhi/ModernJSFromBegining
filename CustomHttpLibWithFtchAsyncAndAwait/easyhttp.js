

 class EasyHTTP {
   
  // Make an HTTP GET Request 
//  get(url) {
//    return new Promise((resolve, reject) => {
//      fetch(url)
//      .then(res => res.json())
//      .then(data => resolve(data))
//      .catch(err => reject(err));
//    });
//  }   
//the function below has replaced this function with async and await 
     
     
async get(url){
    let response=await fetch(url);
    let responseData= await response.json();
    return responseData;
  }

  // Make an HTTP POST Request
//  post(url, data) {
//    return new Promise((resolve, reject) => {
//      fetch(url, {
//        method: 'POST',
//        headers: {
//          'Content-type': 'application/json'
//        },
//        body: JSON.stringify(data)
//      })
//      .then(res => res.json())
//      .then(data => resolve(data))
//      .catch(err => reject(err));
//    });
//  }
//the function below has replaced this function with async and await 
     
    async post(url, data) {
    
        let response =await fetch(url, {
            method: 'POST',
            headers: new Headers({
                  'Content-type': 'application/json'
                }),
                body: JSON.stringify(data)
              });
            let responseData=await response.json();
            return responseData;                     
    }
  


// Make an HTTP PUT Request
//   put(url, data) {
//    return new Promise((resolve, reject) => {
//      fetch(url, {
//        method: 'PUT',
//        headers: {
//          'Content-type': 'application/json'
//        },
//        body: JSON.stringify(data)
//      })
//      .then(res => res.json())
//      .then(data => resolve(data))
//      .catch(err => reject(err));
//    });
//  }
//the function below has replaced this function with async and await  
     
    async put(url, data) {
        let response=await fetch(url, {
                method: 'PUT',
                headers: new Headers({
                  'Content-type': 'application/json'
                }),
                body: JSON.stringify(data)
              });
        let responseData= await response.json();
        return responseData;

      }
  // Make an HTTP DELETE Request
//  delete(url) {
//    return new Promise((resolve, reject) => {
//      fetch(url, {
//        method: 'DELETE',
//        headers: {
//          'Content-type': 'application/json'
//        }
//      })
//      .then(res => res.json())
//      .then(() => resolve('Resource Deleted...'))
//      .catch(err => reject(err));
//    });
//  }
//the function below has replaced this function with async and await  
     
     
     async delete(url) {
        let response=await fetch(url, {
            method: 'DELETE',
            headers: new Headers({
              'Content-type': 'application/json'
            })
          });
        return await 'Resource Deleted';
        }
 }

 