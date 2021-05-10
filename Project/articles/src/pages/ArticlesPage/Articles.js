import React, { setState } from 'react';
import './Articles.css';


// let dataBase =[
//     {
//         id: "1",
//         header:"Article 1",
//         text: "Hello world"
//     },
//     {
//         id: "2",
//         header:"Article 2",
//         text: "Hello home"
//     },
//     {
//         id: "3",
//         header:"Article 3",
//         text: "Hello"
//     }
// ];

// let requestURL ='https://my-json-server.typicode.com/typicode/demo/posts';
// let request = new XMLHttpRequest();  
// const event = new Event('dataIsLoaded');
// let data =[];
// request.open('GET', requestURL);
// request.responseType='json';    
// request.send();
// request.onload = function (){
//     data = request.response;
//     console.log(data);
//     window.dispatchEvent(event);
// };

class Articles extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [{
              id: "1",
              title:"Title 1",
          }],
          dataIsLoaded: false,
        };
      }
      componentDidMount(){
         let requestURL ='https://my-json-server.typicode.com/typicode/demo/posts';
         let request = new XMLHttpRequest();  
         let dataApi = [];
         request.open('GET', requestURL);
         request.responseType='json';    
         request.send();
         request.onload = () =>{
            //  dataApi = request.response;
            //  console.log(dataApi);
            this.setState({ data: request.response});
            this.setState({dataIsLoaded: true});
        };
      }

    render(){
         
        if(this.state.dataIsLoaded == false){
            return (
            
                <div className='articles'>
                     DATA IS LOADING
                 </div>)  
        }else{
           return (
            
            <div className='articles'>
                 {this.state.data.map(data=><div className='loadedBlock'>{data.title}</div>)}

             </div>)  
             
            } 
            
        }    
    }       

export default Articles;