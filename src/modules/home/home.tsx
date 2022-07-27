import { Link } from 'react-router-dom'

export function Home () {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/expenses">Expenses</Link>
    </>
  )
}
