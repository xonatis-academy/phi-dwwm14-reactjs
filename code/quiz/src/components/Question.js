import { useHistory } from 'react-router-dom'; 
import { useContext } from 'react';
import ContextGlobal from '../common/ContextGlobal';

function Question(props) {
  const history = useHistory();
  const context = useContext(ContextGlobal);

  const handleClick = (note) => () => {
    context[props.champs] = note;
    history.push(props.suivant);
  };
  
  return (
    <div className="text-center">
      <div className="display-4 mb-5">
        <i className="fas fa-question-circle"></i>
      </div>
      <p>
          {props.textAfficher}
      </p>
      <div>
        <button className="btn btn-light mx-1" onClick={handleClick(1)}>1</button>
        <button className="btn btn-light mx-1" onClick={handleClick(2)}>2</button>
        <button className="btn btn-light mx-1" onClick={handleClick(3)}>3</button>
        <button className="btn btn-light mx-1" onClick={handleClick(4)}>4</button>
        <button className="btn btn-light mx-1" onClick={handleClick(5)}>5</button>
      </div>

    </div>

  );

}

export default Question;