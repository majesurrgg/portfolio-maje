import React from 'react';
// Importamos TODOS los iconos de las librerías que usas
// OJO: Esto es muy cómodo pero puede aumentar el peso de tu web. 
// Para un portafolio está bien, pero en apps grandes se hace diferente.
import * as Fa from 'react-icons/fa';
import * as Si from 'react-icons/si';
import * as Di from 'react-icons/di';
import { FcComboChart } from "react-icons/fc";


const DynamicIcon = ({ name, size = 20, color, className = '' }) => {
    // 1. Unimos las librerías en un solo objeto de búsqueda
    const iconLibraries = { ...Fa, ...Si, ...Di };

    // 2. Buscamos el icono por su nombre (string)
    const IconComponent = iconLibraries[name];

    // 3. Si no existe, no renderizamos nada o mostramos un fallback
    if (!IconComponent) {
        console.warn(`Icono "${name}" no encontrado. Verifica el nombre.`);
        return null; // O podrías retornar <Fa.FaQuestionCircle />
    }

    // 4. Renderizamos el icono encontrado
    return <IconComponent size={size} color={color} className={className} />;
};

export default DynamicIcon;