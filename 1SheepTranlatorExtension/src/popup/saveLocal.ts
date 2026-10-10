interface PopupData {
    apikey : string,
    language: string
}

export const saveLocal =  async (data: PopupData) => {
    const res = await chrome.storage.local.get(["apikey" , "language"])
    if (res.apikey === data.apikey && res.language === data.language){
        console.log("与内存的一致:",res)
        
        return 
    }
    await chrome.storage.local.set(data)
    console.log("与内存不一致或者第一次存");
    
}
