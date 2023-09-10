import arsenalFc_icon from "../../assets/Arsenal-Logo-URL-512x512-1.png"
import './About.css'
export const About = () => {
  return (
    <main className='About'>
      <h2>About</h2>
      <p style={{ marginTop: "1rem" }}>This system page is a project in the Learn React series of <span>Duc Nguyen</span>.</p>
      <img src={arsenalFc_icon} alt="" className="arsenallogo" />
    </main>
  )
}
