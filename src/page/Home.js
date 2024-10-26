import React from 'react';
import '../style/App.css';
import logementDatas from '../datas/logements.json'
import Card from '../components/card'

function Home() {
  return (
    <React.Fragment>
        <div className='page'>
          <div className='img_banner'>
            <h1>Chez vous, partout et ailleurs</h1>
          </div>
          <div className='grey-background' >
            {logementDatas.map((logement)=>(
              <Card logement={logement} key={logement.id}/>
            ))}
          </div>
        </div>
    </React.Fragment>
  );
}

export default Home;
