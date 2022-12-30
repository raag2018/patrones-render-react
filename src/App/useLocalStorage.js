import React from 'react';
const useLocalStore = (itemName, initialValue) =>{
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    const [sincronized, setSincronized] = React.useState(true);
    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
          setSincronized(true);
        }catch(err){
          setError(err);
        }
      }, 1000)
    },[sincronized]);
 
  
    const saveItem = (newItem) =>{
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
        setLoading(false);
      }catch(err){
        setError(err);
      }
    }
    const sincronizeItem = () => {
      setLoading(true);
      setSincronized(false);
    }
    return {
      item, saveItem, loading, error, sincronizeItem
    }
  }
  export {useLocalStore};