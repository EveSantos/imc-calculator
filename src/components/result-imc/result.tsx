import './result.css';
import gym from './gym.png';

export function Result(){

    if(localStorage.getItem("valor") === '1'){
        console.log(localStorage.getItem('valor'));
    }
    return (
        <div className="conteudo">
            <img src={gym} alt="" />
            <button disabled> Exercite-se</button>
        </div>
    )
}