import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";


const Header = () => {
    return ( 
    <Card>
    <CardContent className="p-5 justify-between itens-center flex flex-row">
    <Image src={"/logo.png"} alt="Agape" height={22} width={120}/>
    <Button variant={"outline"} size={"icon"} className="h-8 w-8">
        <MenuIcon size={16}/>
    </Button>
    </CardContent>    
    </Card> 
    
);
}
 
export default Header;