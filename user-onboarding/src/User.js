import './App.css'

export default function User(props) {

    const { users } = props
    return(
        <div className='all-users'>
            Current Users:
          {users.map(user => (
              <div className='user' key={user.id}>
                  <h4>{user.first_name}</h4>
                  <p>{user.email}</p>
              </div>
          ))}
        </div>
    )
}