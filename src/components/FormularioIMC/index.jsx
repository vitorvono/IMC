import { useState } from "react"
import styles from './Formulario.module.css'
import Tabela from "../Tabela"

const FormularioIMC = () => {
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  const [imc, setImc] = useState(0)

  const calculaIMC = () => {
     setImc(peso / (altura * altura))
    return imc
  }

  const resetImc = () => {
    setPeso(0)
    setAltura(0)
    setImc(0)
  }

  return (
    <div className={styles.formValue}>
      <input
        className={styles.formInput} 
        type="number"
        value={peso}
        placeholder="Peso (kg)"
        onChange={(evento) => setPeso(evento.target.valueAsNumber)}
      />
      <input
        className={styles.formInput} 
        type="number"
        value={altura} 
        placeholder="Altura (0.00)"
        onChange={(evento) => setAltura(evento.target.valueAsNumber)}
      />
      <div>
        <button onClick={calculaIMC}>Calcular</button>
        <button onClick={resetImc}>Reset</button>
      </div>
      
      <Tabela/>

      {imc > 0 && (
        <div>
          <h1>Resultado: { imc.toFixed(1) }</h1>
        </div>
      )}
    </div>

  )
}

export default FormularioIMC