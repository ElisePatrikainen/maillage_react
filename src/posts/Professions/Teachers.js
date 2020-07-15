import React from "react";
import ProfileCards from "../../layout/Cards/ProfileCards";


function Teacher() {

    const title = "professeurs";

    return (
        <div>
            <div>
                <div className="section">
                    <h1>Les {title} Maillage:</h1>
                    <ProfileCards tag="teacher" small={true}/>
                </div>

            </div>


        </div>
    )
}

export default Teacher;
