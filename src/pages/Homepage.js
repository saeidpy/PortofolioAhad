import React from 'react';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

function Homepage(props) {
    const { t  } = useTranslation()
    return (
        <div className="Homepage">
            <header className="hero">
                <h1 className="hero-text">
                {t("homePage.title")}
                    {/*  */}
                    <br/>
                    <span> {t('homePage.span')}</span>
                </h1>
                <p className="h-sub-text">
                {t('homePage.main')}
                           </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/feed/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon ln" />
                    </a>
                    <a href="https://github.com/ahad-sheibani?tab=repositories" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://twitter.com/home?lang=en" className="icon-holder">
                        <FontAwesomeIcon icon={faTwitter} className="icon tw" />
                    </a>

                </div>

            </header>
        </div>
    );
}

export default Homepage;