import { Header } from '../components/Header'

import { ReactDatatable } from '../components/widgets/ReactDatatable'

export const Dashboard = () => {

  return (
    <>
      <Header />
      <div className='container'>
        <div className='card p-5 my-3 text-center'>
          <h2> Lectura de parámetros en tiempo real </h2>
          <div className='card-body'>
            <ReactDatatable/>
          </div>
        </div>
      </div>

    </>
  )
}
