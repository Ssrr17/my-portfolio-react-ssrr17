import React from "react";
import coverImage from "../../assets/photos/cover-photos/profile-photo.jpeg";

function MyProfile() {
  return (
    <section className="my-5">
      <h1 class="myprofile" id="myprofile"> About ME ?</h1>

      <div className="profiletext">
       <p>Name : Salieu Sarr DOB : 04 - 20 - 1988 Location : Plainfield, NJ USA
        Occupation : Junior Web Developer Qualifications </p>  {" "}
        
        <img
          src={coverImage}
          className="my-2"
          style={{ width: "20%" }}
          alt="cover"
        />
      </div>
    </section>
  );
}

export default MyProfile;
