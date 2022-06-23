import Cover from '../../assets/Cover.svg'

import { Aside } from "./style"

export function SideBar(){
    return(
        <Aside>
            <img src={Cover}/>

            <div>
                perfil
                <stong>Nome</stong>
                <span>Cargo</span>

                <a>Editar perfil</a>
            </div>
        </Aside>
    )
}