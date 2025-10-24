import { use, useEffect, type Usable } from "react"
import { type User } from "./api/get-user.action";

interface Props {
    getUser: Usable<User>;
}

export const ClientInformation = ( { getUser }: Props ) => {

    const user = use(getUser);

  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h2 className='text-white font-thin text-4xl'>
            {user.name} - #{user.id}
        </h2>

        <p className='text-white font-thin text-2xl'>
            {user.location}
        </p>

        <p className='text-white font-thin text-lg'>
            Rol del compa: {user.role}
        </p>
    </div>
  )
}
