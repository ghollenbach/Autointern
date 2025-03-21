import './Use.css';

function Use() {
    return (
      <body>
        <div>
          <header>
          <h2>Welcome to the use page</h2>
          </header>
        </div>
        <form action="/submit-form" method="post">
          <label for="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" placeholder="Enter your first name" required></input>
          <br></br>
          <label for="last_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name" placeholder="Enter your last name" required></input>
          <br></br>
          <label for="user_email">User Email:</label>
          <input type="text" id="user_email" name="user_email" placeholder="Enter your email address" required></input>
          <br></br>
          <label for="mentor_name">Mentor Name:</label>
          <input type="text" id="mentor_name" name="mentor_name" placeholder="Enter the mentor's name" required></input>
          <br></br>
          <label for="mentor_email">Mentor Email:</label>
          <input type="text" id="mentor_email" name="mentor_email" placeholder="Enter the mentor's email address" required></input>
          <br></br>
          <label for="user_resume">Resume:</label>
          <input type="file" id="user_resume" name="user_resume" accept="resume/pdf"></input>
          <br></br>
          <button type="submit">Submit!</button>
        </form>
        <script src="App.jsx"></script>
      </body>
    )
  }
  
  export default Use;