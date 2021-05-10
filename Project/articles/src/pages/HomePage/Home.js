import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css';
import './sectionsBlackout.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import flora from './flora.jpg';
import fauna from './fauna.jpg';
import science from './science.jpg';

const useStyles = makeStyles((theme) => ({
    button: {
       textDecoration: "none",
       color: "white",
       
    }
  }));

function Home() {
    const styles = useStyles();
    return (
        <div className="Sections">
            <div className="block1">
                <p className="SectionHeader1"><Link className={styles.button} to="/articles">FLORA</Link></p>
                <img className="flora" src={flora}/>
            </div>
            <div className="block2">
                <p className="SectionHeader2"><Link className={styles.button} to="/articles">FAUNA</Link></p>
                <img class="fauna" src={fauna}></img>
            </div>
            <div className="block3">
                <p className="SectionHeader3"><Link className={styles.button} to="/articles">OLOGY</Link></p> 
                <img class="fauna" src={science}></img>
            </div>
            
        </div>
   
    );
    
}
 <script src="./sectionsBlackout.js"></script>
export default Home;