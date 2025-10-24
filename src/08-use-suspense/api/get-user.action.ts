export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}

export const getUserAction = async ( id:number ) => {
    console.log('Llamando la función');
    await new Promise((res) => setTimeout(res, 2000));
    
    console.log('Función resolvida');
    return {
        id: id,
        name: 'Juan Jaramillo',
        location: 'San Salvador, El Salvador',
        role: 'Desarrollador'
    };
}