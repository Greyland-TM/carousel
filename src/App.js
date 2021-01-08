import './App.scss';
import Card from './js/Card/card';

function App() {
  return (

    <div className='row'>
          
          <div className='row'>
          <div className='col-1-of-3'>
            <Card className='card-layout'></Card>
          </div>
          <div className='col-1-of-3'>
            <Card className='card-layout'></Card>
          </div>
          <div className='col-1-of-3'>
            <Card className='card-layout'></Card>
          </div>
        </div>
          
    </div>
  );
}

export default App;
