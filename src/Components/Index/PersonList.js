import axios from 'axios';
import { Link } from 'react-router-dom';

const PersonList = ({API_URL, persons, setRefresh}) => {
    const handleDelete = async (id) => {
        await axios.delete(API_URL + id);
        setRefresh(persons);
    };

    return (
        <div>
            <h3>Person List</h3>
            <table>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map(x =>
                        <tr key={x.id}>
                            <td>
                                {x.id}
                            </td>
                            <td>
                                {x.name}
                            </td>
                            <td>
                                {x.age}
                            </td>
                            <td>
                                <button onClick={() => handleDelete(x.id)}>Delete</button>
                                <Link to={`update/${x.id}`} state={{ name: x.name, age: x.age, id: x.id }}>Update</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PersonList;