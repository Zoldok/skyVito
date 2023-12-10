import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ComponentName = () => {

    const ads = useSelector((state) => state.user.ads);
    //значение id  страницы
    const { adId } = useParams();
    console.log(adId);



    //Создать новый запрос на получение обьявления по Id


    
    //пдля преобразования в число, т.к. id - числовой
    const convertedAdId = parseInt(adId, 10);
    const selectedAd = ads.find(ad => ad.id === convertedAdId);
    console.log(selectedAd);

    if (selectedAd) {
        console.log("Найденное объявление:", selectedAd);
        // код если найдено

 
    } else {
        console.log("Объявление не найдено");
        // код если не наидено
    }

    return (
        <div>
            Обьявление
            <h1>
       {selectedAd.title}
        </h1>
        </div>
    );
};

export default ComponentName;