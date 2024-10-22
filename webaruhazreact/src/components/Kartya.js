export default function Kartya(props) {
    function katt() {
      console.log(props.index); 
    }
  
    return (
      <div className={`kartya ${props.adat.kattintva ? "kattintva" : "nemkattintva"}`}>
        <img src={props.adat.kep} alt={props.adat.cim} />
        <h3>{props.adat.cim}</h3>
        <button onClick={katt}>Kosárba</button>
      </div>
    );
  }