import Image from "next/image";
import { Card } from "../_components/ui/card";

const Body = () => {
    return ( 
     <div className="p-5 justify-center itens-center columns-lg-12 columns-md-6 columns-sm-6 flex flex-row">
        <Card className="itens-center">
        <Image src={"/happy.png"} alt="Happy" height={400} width={520}/>
        
        <p>Olá, seja bem-vindo(a) ao Ágage - 
            Sistema de Consolidações da Igreja Batista Peniel em Nova Iguaçu.
        </p>

        <p>
            O objetivo da consolidação é levar amor e comunhão aos novos convertidos e reconciliados
             com o Senhor. Auxiliando assim na firmação da caminhada dessas pessoas.
        </p> 

        <p>
            Para você, que faz parte desse lindo encargo, fica o nosso muito obrigado. Que o Senhor 
            continue derramento sobre a sua vida o amor e te sustente com mão poderosa em todas as áreas 
            da sua vida.

        </p>

        <p>
            Com muito amor,
        </p>

        <h3>
            Conselho Pastoral - Igreja Batista Peniel em nova Iguaçu
        </h3>
        </Card>

     </div>   
     );
}
 
export default Body;