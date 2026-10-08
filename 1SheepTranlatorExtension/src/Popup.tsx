const Popup = () => {
    return (
        <div>
            <h1 className="mx-auto text-center text-xl font-bold">1Sheep Translator Extension</h1>
            <div className="mx-auto w-3xs space-y-2">
                <section className="space-y-2">
                    <label htmlFor="apiKey">输入密钥api</label>
                    <input type="text" id="apiKey" className="w-full p-2 border border-gray-300 rounded-md" />
                </section>

                <section className="flex justify-between space-y-2">
                    <label htmlFor="language">目标语言</label>
                    <select name="language" id="language" >
                    <option value="zh-CN" className="text-gray-500">中文</option>
                        <option value="en-US" className="text-gray-500">英文</option>
                        <option value="ja-JP" className="text-gray-500">日文</option>
                    </select>
                </section>
                <button className="h-10 w-3xs bg-blue-200 text-white p-2 rounded-md">翻译</button>
            </div>
        </div>
    )
}

export default Popup;