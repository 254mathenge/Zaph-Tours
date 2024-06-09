import SectionTitle from "../section-title/SectionTitle";
import "./SignUp.css";
function SignUp() {
  return (
    <div className="registration">
      {/* <h2 className="signUp-h2">Newsletter SignUp Section</h2> */}
      <SectionTitle title="Get our Newsletter" />
      <div className="form-section-wrapper">
        <form className="form-section-box">
          <fieldset>
            <legend>Personal Details</legend>
            <a className="signup-a"href="/">Sign up now!</a>
            <div className="form-section">

              <label htmlFor="">FirstName:</label>
              <input type="text" placeholder="firstName" required />
            </div>
            <div className="form-section">
              <label htmlFor="">LastName:</label>
              <input type="text" placeholder="lastName" required />
            </div>
            <div className="form-section">
              <label htmlFor="">Email Address:</label>
              <input type="email" placeholder="email" required />
            </div>
            <div className="form-section">
              <label htmlFor="">Password:  </label>
              <input type="password" placeholder="password" required />
            </div>
            <div className="form-section" >
              <label htmlFor="">UserName:</label>
              <input type="text" placeholder="userName" required />
            </div>
         
              <input type="submit" className="submit" value="submit"/>
           
            <h4 className="h4">Already have an account?? </h4>
            <button className="login" >LogIn</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
