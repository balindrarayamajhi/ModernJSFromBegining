
class EasyHTTP{
    //Make a HTTP get request 
    get (url){
        return new Promise((resolve,reject)=>{
        fetch(url)
            .then(res => res.json())
            .then (data =>resolve(data))
            .catch(err => reject(err));
        });
    }
//Make a HTTP post request 
    post (url ,data){
        return new Promise((resolve,reject)=>{
        fetch(url,{
            method: 'POST',
//            headers: {
//                'Content-type':'application.json'
//            },
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then (data =>resolve(data))
            .catch(err => reject(err));
        });
    }

    
    //Make a HTTP put request 
    put (url ,data){
        return new Promise((resolve,reject)=>{
        fetch(url,{
            method: 'PUT',
//            headers: {
//                'Content-type':'application.json'
//            },
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then (data =>resolve(data))
            .catch(err => reject(err));
        });
    } 
    
    // Make a Http Delete request 
    
    delete (url ){
        return new Promise((resolve,reject)=>{
        fetch(url,{
            method: 'DELETE',
//            headers: {
//                'Content-type':'application.json'
//            },
//            headers: new Headers({
//                'Content-Type': 'application/json'
//            }),
            
            })
            .then(res => res.json())
            .then (() =>resolve('Resource Deleted'))
            .catch(err => reject(err));
        });
    } 
}