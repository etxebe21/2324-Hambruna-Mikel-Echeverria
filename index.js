import { getAllDonuts } from "./service.js";
import { mostSugarDonuts, mostIronDonuts, mostProteinDonuts,minFibreDonuts } from "./fase1.js";
import { listDonutsAndCalories, listDonutsAndCarbohydrates,donutsMediumCalories, sumFatSaturated,  donutsMediumVitamines} from "./fase2.js";
import { listDonutsAndBatters, listDonutsAndToppings } from "./fase3.js";
import { changeSaturatedDonut, changeAmountCarbohydrateDonut, createAlergenAtribute, changeDailyValueDonut, createNewVitamine } from "./fase5.js";
import { buyDonuts } from "./fas4.js";


const fetchAsyncData = async () => {
    try{
        const responseData = await getAllDonuts();
        const dataDonuts = responseData["items"].item;

       mostSugarDonuts(dataDonuts);
       mostIronDonuts(dataDonuts);
       mostProteinDonuts(dataDonuts);
       minFibreDonuts(dataDonuts); 
       listDonutsAndCalories(dataDonuts); 
       listDonutsAndCarbohydrates(dataDonuts);
       donutsMediumCalories(dataDonuts);
       sumFatSaturated(dataDonuts);
       donutsMediumVitamines(dataDonuts);
       listDonutsAndBatters(dataDonuts);
       listDonutsAndToppings(dataDonuts);
       changeSaturatedDonut(dataDonuts);
       changeAmountCarbohydrateDonut(dataDonuts);
       createNewVitamine(dataDonuts);
       changeDailyValueDonut(dataDonuts);
       createAlergenAtribute(dataDonuts);
       buyDonuts(dataDonuts);
   
    }catch(error){
        console.log(error.message)
    }
}
fetchAsyncData();












       
