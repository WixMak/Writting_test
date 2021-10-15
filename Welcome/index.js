import './welcome.css';
import{ useTranslation } from 'react-i18next';




const Welcome = () => {

    const{ t, i18n } = useTranslation();

    const changeLanguage = (lng) =>{
        i18n.changeLanguage(lng)
    };

    return (
    <div >
   
       <div>
          <button onClick={() => changeLanguage("en")}>eng</button>
          <button onClick={() => changeLanguage("zh")}>zh</button>
         
       </div>
       
       <h1>{t('name')}</h1>
       <img src='./Logo.png' alt=""/>
       <p>{t('part1')}</p>
       <p>{t('part2')}</p>

 </div>
    );
};

  export default Welcome