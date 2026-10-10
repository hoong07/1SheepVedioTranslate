import { useEffect, useState } from "react";

interface PopupData {
    apikey: string,
    language: string
}

interface PopupProps {
    saveLocal: (data: PopupData) => void
}

const Popup = ({ saveLocal } : PopupProps) => {
    const [apiKey , setApiKey] = useState('')
    const [language , setLanguage] = useState('zh-CN') //默认中文

    // 初始化回显Popup页面
    useEffect(() => {
        chrome.storage.local.get(["apikey", "language"]).then((res) => {
            if (typeof res.apikey === "string") {
                setApiKey(res.apikey)
            }
            if (typeof res.language === "string") {
                setLanguage(res.language)
            }
        })
    }, [])
    
    const [showError , setShowError] = useState(false)//提示框控制状态

    const handleConfirm = () => {
        if(!apiKey.trim() || !language){
            setShowError(true) //错误
            return
        }

        setShowError(false)
        
        if(typeof saveLocal  === 'function') {
            saveLocal({apikey: apiKey , language})
        }
    }//api和language判空
    

    //  清理错误弹窗
    useEffect(() => {
        if (showError) {
            const timer = setTimeout(() => {
                setShowError(false)
            } ,3000)
        return () => clearTimeout(timer)
        }
    },[showError])

    return (
        <div className="relative p-3">
            {showError && (
                <section className="fixed top-4 right-1/2 translate-x-1/2 w-3xs text-pink-500 text-xl text-center bg-white/10 backdrop-blur-md backdrop-saturate-125
            border border-white/20 shadow-sm rounded-xl p-6">
                    请输入正确的apikey!!!
                </section>)
                }

            <div className="flex">
                <img src="/icon.png" alt="插件图标" className="w-6 h-6" />
                <h1 className="mx-auto text-center text-xl font-bold">1Sheep Translator Extension</h1>
            </div>

            <div className="mx-auto w-3xs space-y-2">
                <section className="space-y-2">
                    <label htmlFor="apiKey">输入密钥api</label>
                    <input type="password" id="apiKey" className="w-full p-2 border border-gray-300 rounded-md" value={apiKey} onChange={
                        (e:React.ChangeEvent<HTMLInputElement>) => setApiKey(e.target.value)
                    } />
                </section>

                <section className="flex justify-between space-y-2">
                    <label htmlFor="language">目标语言:</label>
                    <select name="language" id="language" value={language} onChange={
                        (e:React.ChangeEvent<HTMLSelectElement>) => setLanguage(e.target.value)
                    }>
                        <option value="zh-CN" className="text-gray-500">默认:中文</option>
                        <option value="en-US" className="text-gray-500">英文</option>
                        <option value="ja-JP" className="text-gray-500">日文</option>
                    </select>
                </section>
                <button disabled={!apiKey.trim() || !language} className={`${apiKey && language ? "bg-blue-400" : "bg-blue-200 opacity-50 cursor-not-allowed"} h-10 w-3xs text-white p-2 rounded-md`} onClick={handleConfirm}>确认</button>
            </div>
        </div>
    )
}

export default Popup;