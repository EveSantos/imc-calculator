import { useState } from 'react';
import './form.css';

export function FormImc() {
    
    const [high, setHigh] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeigth] = useState('');

    const handleHighChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHigh(e.target.value);
    };

    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    };

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
    };

    const handleweightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWeigth(e.target.value);
    };

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const highNumber = Number(high);
        const weightNumber = Number(weight);
        const imc = weightNumber / (highNumber * highNumber);
        if(imc < 18.5){
            alert('Abaixo do peso');
        }
        else if(imc >= 18.5 && imc <= 24.9){
            alert('Peso normal');
        }
        else if(imc >= 25 && imc <= 29.9){
            alert('Sobrepeso');
        }
        else if(imc >= 30 && imc <= 34.9){
            alert('Obesidade grau 1');
        }
        else if(imc >= 35 && imc <= 39.9){
            alert('Obesidade grau 2');
        }
        else if(imc >= 40){
            alert('Obesidade grau 3');
        }

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-imc">
                <div className="content">
                    <h2>Calcule seu IMC</h2>
                    <div className="line">
                        <div className="label-input">
                            <label htmlFor="">Altura</label>
                            <input type="text" value={high} onChange={handleHighChange}/>
                        </div>
                        <div className="label-input">
                            <label htmlFor="">Peso</label>
                            <input type="number" value={weight} onChange={handleweightChange} />
                        </div>
                    </div>
                    {/* <div className="line">
                        <div className="label-input">
                            <label htmlFor="">Idade</label>
                            <input type="number" value={age} onChange={handleAgeChange}/>
                        </div>
                        <div className="label-input">
                            <label htmlFor="">Peso</label>
                            <input type="number" value={weight} onChange={handleweightChange} />
                        </div>
                    </div> */}
                </div>
                <input className='button-form' type="submit" value="Calcular" />
            </div>
        </form>
    );
}