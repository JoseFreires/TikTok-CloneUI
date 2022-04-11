import { useRouter } from "next/router";

export default function Teste(){
    const roteamento = useRouter();
    return(
    <>
        <h2>Bem Vindo!</h2>
        <input type='button' value='entrar' onClick={()=>{
            roteamento.push('/');
        }}/>
    </>
    );
}