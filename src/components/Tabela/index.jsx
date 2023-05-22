import style from './Tabela.module.css'

const Tabela = () => {
  return (
    <table border='1 solid #000' className={style.tableImc}>
      <thead>
        <tr>
          <th>IMC</th>
          <th>Classificação</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Menor que 18,5</td>
          <td>Abaixo do peso</td>
        </tr>
        <tr>
          <td>18,5 a 24,9</td>
          <td>Peso normal</td>
        </tr>
        <tr>
          <td>25,0 a 29,9</td>
          <td>Excesso de peso</td>
        </tr>
        <tr>
          <td>30,0 a 34,9</td>
          <td>Obesidade 1</td>
        </tr>
        <tr>
          <td>35,0 a 39,9</td>
          <td>Obesidade 2</td>
        </tr>
        <tr>
          <td>Maior ou iguala a 40</td>
          <td>Obesidade 3</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Tabela