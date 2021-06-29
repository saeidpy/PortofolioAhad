import React,{ useState } from 'react';
import { useTranslation } from 'react-i18next';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItems';
import RealProject from '../components/RealProject';
import Title from '../components/Title'
import { portfolios, realProjectData } from '../constant/meta';

// const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage(props) {
    // const [categories, setCategories] = useState(allCategories);
    const {t} = useTranslation()
    const [menuItems, setMenuItems] = useState(portfolios);

    // const filter = (category) =>{
    //     if(category === 'All'){
    //         setMenuItems(portfolios)
    //         return;
    //     }
    //     const filteredData  = portfolios.filter((item)=>{
    //         return item.category === category;
    //     })
    //     setMenuItems(filteredData);
    // }



    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={t("openSource.title")} subTitle={t("openSource.title")} />
            </div>
            <div className="portfolios-data">
            {/* <Categories filter={filter} categories={categories} /> */}
                <MenuItems menuItem={menuItems} />
            </div>
            <div className="realProject">
            <Title title={t("realProject.title")} subTitle={t("realProject.title")} />
            {realProjectData.map((item)=>{
                return <RealProject link={item.link} title={item.title} institute={item.institute} date={item.date}/>
            })}

            </div>
        </div>
    );
}

export default PortfoliosPage;