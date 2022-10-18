import './home.css';
import { useState } from 'react';
import gym from './gym.png';


export function Home() {

    const [result, setResult] = useState('');
    const [color , setColor] = useState('');
    const [high, setHigh] = useState('');
    const [weight, setWeigth] = useState('');

    const handleHighChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHigh(e.target.value);
    };

    const handleweightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWeigth(e.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const highNumber = Number(high);
        const weightNumber = Number(weight);
        const imc = weightNumber / (highNumber * highNumber);
        if (imc < 18.5) {
            setResult('Abaixo do peso');
            setColor('#ff0000');
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            setResult('Peso normal');
            setColor('#008000');
        }
        else if (imc >= 25 && imc <= 29.9) {
            setResult('Sobrepeso');
            setColor('#ffa500');
        }
        else if (imc >= 30 && imc <= 34.9) {
            setResult('Obesidade grau 1');
            setColor('#ff9645');
        }
        else if (imc >= 35 && imc <= 39.9) {
            setResult('Obesidade grau 2');
            setColor('#ff3535');
        }
        else if (imc >= 40) {
            setResult('Obesidade grau 3');
            setColor('#ff0000');
        }

    }

    return (
        <div className="App">
            <div className="conteudo">
                <img src={gym} alt="" />
                    { result ? (
                    <div className="div-result">
                        <p>Resultado:</p> <button className="button-result" style={{backgroundColor: color }} disabled> {result} </button> 
                    </div>)
                    : <button className="button-result" disabled>Exercite-se</button>}    
            </div>
            <div className="form-imc">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-imc">
                        <div className="content">
                            <h2>Calcule seu IMC</h2>
                            <div className="line">
                                <div className="label-input">
                                    <label htmlFor="">Altura</label>
                                    <input type="text" placeholder='Informe a Altura' value={high} onChange={handleHighChange} />
                                </div>
                                <div className="label-input">
                                    <label htmlFor="">Peso</label>
                                    <input type="number" placeholder='Informe o Peso' value={weight} onChange={handleweightChange} />
                                </div>
                            </div>
                        </div>
                        <input className='button-form' type="submit" value="Calcular" />
                    </div>
                </form>
            </div>
        </div>
    )
}

