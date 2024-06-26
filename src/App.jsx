import { useState, useRef } from 'react'
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from "primereact/radiobutton";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import api from './api';

function App() {
  
  // Toast
  const toast = useRef(null);

  // numbers
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // options
  const [operations, setOperations] = useState([
    {displayName: 'Suma', endpoint: '/CalculatorSum', verbo: 'sumar'},
    {displayName: 'Resta', endpoint: '/CalculatorSub', verbo: 'restar'},
    {displayName: 'Multiplicación', endpoint: '/CalculatorMul', verbo: 'multiplicar'},
    {displayName: 'División', endpoint: '/CalculatorDiv', verbo: 'dividir'},
  ])
  const [selectedOp, setSelectedOp] = useState(operations[0]);

  // service
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {

    if(selectedOp.displayName === 'División' && num2 === 0){
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'No se puede dividir para cero' });
        return;
    }

    setLoading(true);
    try {
      const response = await api.post(selectedOp.endpoint, {
        num1: num1,
        num2: num2
      });
      setResult(response.data.respuesta); 
      setLoading(false);
    } catch (error) {
      console.error('Hubo un error', error);
      setLoading(false);
    }
  };

  return (
    <div className='app'>
      <Toast ref={toast} />
      <h1 className='app__title'>Distributed calculator</h1>
      <div className='app__content'>
        <div className='form'>
            <div className="operation-options">
                <div className="operation-options__option">
                    <RadioButton inputId="suma" name="Suma" value={operations[0]} onChange={(e) => setSelectedOp(e.value)} checked={selectedOp?.displayName === 'Suma'} />
                    <label htmlFor="suma">Suma</label>
                </div>
                <div className="operation-options__option">
                    <RadioButton inputId="resta" name="Resta" value={operations[1]} onChange={(e) => setSelectedOp(e.value)} checked={selectedOp?.displayName === 'Resta'} />
                    <label htmlFor="suma">Resta</label>
                </div>
                <div className="operation-options__option">
                    <RadioButton inputId="multiplicacion" name="Multiplicacion" value={operations[2]} onChange={(e) => setSelectedOp(e.value)} checked={selectedOp?.displayName === 'Multiplicación'} />
                    <label htmlFor="suma">Multiplicación</label>
                </div>
                <div className="operation-options__option">
                    <RadioButton inputId="division" name="Division" value={operations[3]} onChange={(e) => setSelectedOp(e.value)} checked={selectedOp?.displayName === 'División'} />
                    <label htmlFor="suma">División</label>
                </div>
          </div>
          <div className='number-group'>
              <label >Ingresa el primer número</label>
              <InputNumber value={num1} onValueChange={(e) => setNum1(e.value)} min={0} max={10000} maxFractionDigits={2} />
          </div>
          <div className='number-group'>
              <label>Ingresa el segundo número</label>
              <InputNumber value={num2} onValueChange={(e) => setNum2(e.value)} min={0} max={10000} maxFractionDigits={2} />
          </div>
          <Button className='calculate-button' label="Calcular" icon="pi pi-calculator" loading={loading} onClick={handleCalculate} />
        </div>
        <div className='result'>
          {
            result || result === 0 ? <>
              <h2>Resultado</h2>
              <p>El resultado de {selectedOp?.verbo} {num1} y {num2} es:</p>
              <h3>{Number(result.toFixed(2))}</h3>
            </> : <></>
          }
        </div>
        <footer className='footer'>
          <div className='footer__names'>
            <p>Andrés Loza</p>
            <p>Jaime Mendoza</p>
            <p>Fabricio Mora</p>
            <p>Juan Miño</p>
          </div>
          <div className='footer__logo'>
            <img src='/udla_logo.png' alt='Logo de la UDLA' />
          </div>
          <div className='footer__desc'>
            <p>
              Esta calculadora distribuida utiliza AWS Lambda y API Gateway, asignando cada operación matemática a un Lambda independiente
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
