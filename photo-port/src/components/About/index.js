import React from "react";
import coverImage from "../../assets/images/cover-photo.JPG";

function MyProfile() {
  return (
    <section className="my-5">
      <h1 id="myprofile">My Profile</h1>

      <div className="profiletext">
       <p>Name : Salieu Sarr DOB : 04 - 20 - 1988 Location : Plainfield, NJ USA
        Occupation : Junior Web Developer Qualifications </p>  {" "}
        <a
          href="https://www.linkedin.com/in/salieu-sarr-7b676a84?lipi=urn%3Ali%3Apage%3Ad_
                flagship3_profile_view_base_contact_details%3BETp9sl9VRl2DvaEsNmaDnA%3D%3D"
        >
          {" "}
          LinkedIn
        </a>
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
