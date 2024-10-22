import Kartya from './Kartya';
import './Jatekter.css';

export default function Jatekter(props) {
  return (
    <div className="Jatekter">
      {props.lista.map((elem, index) => {
        return (
          <Kartya adat={elem}  key={index} index={index} kosarbarak={props.kosarbarak} 
          />
        );
      })}
    </div>
  );
}