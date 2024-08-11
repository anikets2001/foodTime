import { useEffect, useState } from "react";
import { RES_MENU_BASE_URL } from "./constants";

const useRestaurantMenu = (resId)=> {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        try {
          const data = await fetch(RES_MENU_BASE_URL + resId);
          const json = await data.json();
          const menu = json?.data;
          setResInfo(menu);
        } catch (error) {
          console.error(error);
        }
      };
    
    return resInfo;
}

export default useRestaurantMenu;