
export default function Propdriling2({example,setExample}) {
    return (
      <>
      <div className="Propdriling2">
      <button onClick={()=> {
        setExample(!example)
      }}>
        {example ? <b>
          click to set Propdriling example to false 
        </b> : <b>click to set Propdriling example to true </b>}
      </button>
      
      </div>

      </>
    )
  }
  