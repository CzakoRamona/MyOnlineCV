import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img
                            src='https://lh3.googleusercontent.com/Zd0NvfQFklZH9NDDlcb87ihVae5hYLSdQE8VWd0JNGRBaBH5gQfqHsveFK_njHqoKeXI9k8OO6rLlPKOs5cLHAxJQl2VZ2l-ZSDDiMHKtN823DIlevdkpohLT0Hd4Qh-mT-gOn4CadGT3gtTEuNBBGW4W3D5KJqlmbcAii0brdDB336mhUAYd80cuAUTKHcBj2Vq4UNp4l54pBbnYaeSn3w-Ey1tI4ajHiyG9ZfkYcyfEN9RS_otnyBR6E5yIic7eKpJdwN2_GDMXea4gUxLEpWGCAdIcZA5VFHNfV0JEdEdhcFSENpdw9fFc0Jry0UMClL5A6aDu9uvoytNkH-UQJBkc5VcrvC218he91KQVC5xYGdbtELv0HoQcZfMkWy1KE3dbfK_h-iU716fvv4yKChX9DHAkuRx7ARcVQQ4rN54e_I1Z0g0FalJ_hh-gUKc3iIyx-mkFqUt6oAjVg1sH4Ytv-UmDjpst23iVdoS9w9_oI42QT_rXlKhBCc13wwPrZdV7OBnegoqeGjMN9Fmuvcg9IkD2JeKxTtQ0XfIZN5bIben8ziV5v2gFABpwHd1VOKWHfdOI8grZg-IJ7LLbXQREtlKSLJPei64stu-I0OtDkZooGI2C3hjgWJGR9oj2TC4Po3XmdEewSht8z7HP7x7IcnHiCuOYCdBhRplPxV9bfW1cQsMByrAOcv7=w469-h625-no?authuser=0'
                            alt="me"
                            className="me-image"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Home;