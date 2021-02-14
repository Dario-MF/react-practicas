import react from 'react'
import widthLoader from '../HOC/withLoader'
import UserCard from '../molecules/UserCard'

const UserGrid = ({ users }) => (

    <div className='row'>
        <div className='col s8 offset-s2'>
            <h1 className='center'>Usuarios</h1>
            <ul className="collection ">
                {users.map(u => (
                    <UserCard
                        key={u.id}
                        name={u.name}
                        username={u.username}
                        email={u.email}
                    />
                ))}
            </ul>
        </div>
    </div>

)

export default widthLoader('users')(UserGrid)