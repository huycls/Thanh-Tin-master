import React from 'react';
import { withNamespaces } from 'react-i18next';

function IntroScreen({t}){
    return <div className="intro-page">
        
        <div className="intro-content">
        <h1><img className="intro-image" src="../images/logofavico.jpg" alt="intro"></img>{t("intro.label")}</h1>
        <small>15-1-2020, 4:51 pm</small>
            <p><span><strong className="company-name">{t("company.label")}</strong>{t("intro.p1")}</span></p>
            <ul>
                <li><i className="fas fa-chevron-right"></i>{t("intro.l1")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.l2")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.l3")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.l4")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.l5")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.l6")}</li>
           </ul>
           <h2>{t("intro.h2")}</h2>
           <ul>
               <li><i className="fas fa-chevron-right"></i>{t("intro.li1")}</li>
               <li><i className="fas fa-chevron-right"></i>{t("intro.li2")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.li3")}</li>
           </ul>
           <h2>{t("intro.h21")}</h2>
           <ul>
               <li><i className="fas fa-chevron-right"></i>{t("intro.li4")}</li>
               <li><i className="fas fa-chevron-right"></i>{t("intro.li5")}</li>
                <li><i className="fas fa-chevron-right"></i>{t("intro.li6")}</li>
           </ul>
           <p className="p2">{t("intro.p2")}</p>
        </div>
        <div className="introinfo-field">
        <div className="intro-info">
            <strong className="company-name">{t("contact.label")}</strong>
            <p><strong className="office-name">{t("hcm.label")}</strong>{t("hcmadd.label")}</p>
            <p><strong>{t("phone.label")}</strong>(028) 36 360 901</p>
            <p><span><strong>Fax: </strong>(028) 36 360 902  <strong>{t("mst.label")}</strong>0311941553</span></p>
            <p><strong>{t("sale.label")} </strong><a href="mailto:sales@thanhtin-tech.com">sales@thanhtin-tech.com</a>   </p>
            <p><strong>{t("tech.label")} </strong><a href="mailto:service@thanhtin-tech.com">service@thanhtin-tech.com</a></p>
        </div>
        <div className="intro-info">
            <p><strong className="office-name">Ha Noi Office (ADANA Complex) : </strong>{t("hnadd.label")}</p>
            <p><strong>{t("sale.label")} </strong><a href="mailto:hanoi@thanhtin-tech.com">hanoi@thanhtin-tech.com</a></p>
            <p><strong>{t("tech.label")} </strong><a href="mailto:service@thanhtin-tech.com">service@thanhtin-tech.com</a></p>
        </div>
        </div>
    </div>
}
export default  withNamespaces()(IntroScreen);