import{ useTranslation } from 'react-i18next';

function CheckLogin(){

    let x = document.getElementById("Lname").value;

    let y = document.getElementById("pw").value;

    if(x === "admin" && y === "Admin&8181"){

        alert("Login success!")
       

    }

        else

        {

            alert("please try again!")

        }
}

    


const Login = () => {

    const{ t, i18n } = useTranslation();

     const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
     };

return <div>
    

    <div>
          <button onClick={() => changeLanguage("en")}>eng</button>
          <button onClick={() => changeLanguage("zh")}>zh</button>
         
    </div>

    <h1>{t("Login")}</h1>

    <p>{t("Username")}:</p>

    <input type="text" id = "Lname"/>

    <p>{t("pw")}:</p>

    <input type="text" id = "pw"/>

    <button type="button" onClick={CheckLogin}>Login</button>

    <p>Login name: admin<br/>

        password: Admin&8181

    </p>

</div>;

}

export default Login