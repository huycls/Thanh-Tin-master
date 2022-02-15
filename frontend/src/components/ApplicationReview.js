import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';



export default withNamespaces((props) => props.namespaces)(function ApplicationReview(props){
    const {t} = props;
    const {application} = props;
    function closeDropdown(){
        const dropdown1 = document.querySelector('.news-content'); 
        if(dropdown1.classList.contains("show")){
          dropdown1.classList.remove("show");
        }
      }
      function stringToSlug(str) {
        // remove accents
        var from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
            to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
        for (var i=0, l=from.length ; i < l ; i++) {
          str = str.replace(RegExp(from[i], "gi"), to[i]);
        }
      
        str = str.toLowerCase()
              .trim()
              .replace(/[^a-z0-9\-]/g, '-')
              .replace(/-+/g, '-');
      
        return str;
      }
    return (  
            <div key= {application._id}  className="newsreview-component">
                <Link className="news-link-wrapper" onClick={closeDropdown} to={`/tin-moi/${application._id}?${stringToSlug(t("title",{application}))}`}>
                    <img className="news-link-img" src={application.articleimage} alt="news-img"></img>
                    <p className="news-link">
                        <i className="fas fa-chevron-right"></i><span>{t("title", {application}).length > 50 ? t("title",{application}).substring(0, 47) + "..." : t("title",{application})}</span>
                    </p>
                </Link>
                </div>
    );
})