import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import {  detailsApplication } from '../actions/applicationActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Application from '../components/Application';
import { listApplications } from '../actions/applicationActions';
import parse from 'html-react-parser';
import {Helmet} from 'react-helmet';
import { withNamespaces } from 'react-i18next';
import {useHistory} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import {Link} from 'react-router-dom';

export default withNamespaces((props) => props.namespaces) (function ApplicationScreen(props){
    const {t} = props;
    const dispatch = useDispatch();
    const applicationId =  props.match.params.id;
    const applicationDetails = useSelector((state) => state.applicationDetails);
    const { loading, error, application } = applicationDetails;
    const applicationList = useSelector((state) => state.applicationList);
    const {applications} = applicationList;

    useEffect(() => { 
        dispatch(detailsApplication(applicationId));
      }, [dispatch, applicationId]);
      
    useEffect(() => {
    dispatch(listApplications({}));
    }, [dispatch]); 
    const history = useHistory();
    
    const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    return (
        <div className='main-content'>
            <Sidebar />
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div className='newspage'>
                    <Helmet>
                        <title>{t("title",{application})} | Thành Tín Tech</title>
                    </Helmet>
                    <div className="newspage-content">
                    <button className="goback btn btn-outline-secondary"  onClick={() => history.goBack()}><i className="fas fa-arrow-left"></i> {t("back.label")}</button>
                        <div>    
                            <h5 className='application-category'>Category: <Link to={`/search-news/articlecategory/${application.articlecategory}`}>{application.articlecategory}</Link></h5>
                        </div>
                        <h1 className='application-title'>{t("title",{application})}</h1>
                        <small> Created: {formatter.format(new Date(application.createdAt))}</small>                        
                        <div> 
                            {parse(t("content",{application}))}
                        </div>
                    </div>
                </div>
            ) 
            }
        </div>
    )
})