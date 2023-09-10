import './Footer.css'

const Footer = () => {
  const today = new Date()
  return (
    <div className='footer'>
      <p>Copyright &copy; {today.getFullYear()} powered by MLNDUC</p>
    </div>
  )
}

export default Footer