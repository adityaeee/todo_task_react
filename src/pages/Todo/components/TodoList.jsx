import { IconTrash } from '@tabler/icons-react'
import { IconEdit } from '@tabler/icons-react'
import { Component } from 'react'
import PropTypes from 'prop-types'

// props yg dikirim
// method:
// - handleSelectedTodoFromEdit
// - handleDelete
// state:
// - todos

class TodoList extends Component {
  render() {
    const {
      handleSelectedTodoForEdit,
      handleDelete,
      todos,
    } = this.props
    return (
      <div className='shadow p-4 rounded-2 mt-4' >
        <h3>List Todo</h3>
        <div className="table-responsive">
          <table className="table">
            <thead className='text-center'>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Tugas</th>
                <th scope="col">Deskripsi</th>
                <th scope="col">Selesai</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody className='text-center align-middle'>
              {/* <tr className='placeholder-glow'>
                <td>
                  <span className="placeholder col-6 rounded-1"></span>
                </td>
                <td>
                  <span className="placeholder col-6 rounded-1"></span>
                </td>
                <td>
                  <span className="placeholder col-6 rounded-1"></span>
                </td>
                <td>
                  <span className="placeholder col-6 rounded-1"></span>
                </td>
                <td>
                  <span className="placeholder col-6 rounded-1"></span>
                </td>
              </tr> */}
              {
                todos.map((todo, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1} {todo.id}</th>
                      <td>{todo.task}</td>
                      <td>{todo.description}</td>
                      <td>
                        <span className={`badge text-white ${todo.status ? 'text-bg-success' : 'text-bg-danger'}`}>
                          {todo.status ? 'Selesai' : 'Belum Selesai'}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex gap-2 d-flex justify-content-center">
                          <button
                            onClick={() => { handleSelectedTodoForEdit(todo) }}
                            className="btn btn-primary"
                          >
                            <IconEdit size={22} />
                          </button>
                          <button
                            // (event) => {
                            //    handleDelete(event)
                            // }
                            // onClick={handleDelete}
                            onClick={() => { handleDelete(todo.id) }}

                            className="btn btn-danger text-white"
                          >
                            <IconTrash size={22} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TodoList

TodoList.propTypes = {
  handleSelectedTodoForEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}