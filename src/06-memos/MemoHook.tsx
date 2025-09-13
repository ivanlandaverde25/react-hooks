import { useCallback, useState } from 'react'
import { MyTitle } from './ui/MyTitle'
import { MySubTitle } from './ui/MySubTitle';

export const MemoHook = () => {

    const [title, setTitle] = useState('Hola');
    const [subTitle, setSubTitle] = useState('Mundo');

    const handleMyAPI = useCallback (() => {
        console.log('Llamar a mi API - ' + subTitle);
    }, [subTitle]);

  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-white font-thin text-2xl'>MemoApp</h1>
    
        <MyTitle title={title} />
        <MySubTitle subtitle={subTitle} callMyAPI={handleMyAPI} />

        <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
            onClick={() => setTitle('Hola Juan ' + new Date().getTime())}
        >
            Cambiar titulo
        </button>

        <button className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
            onClick={() => {setSubTitle('Como tas?')}}
        >
            Cambiar subtitulo
        </button>
    </div>
  )
}
