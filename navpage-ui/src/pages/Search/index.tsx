import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png'
import bgImg from '../../assets/bg.png'
import aiqiyiIcon from '../../assets/aiqiyi.png'
import baidudituIcon from '../../assets/baiduditu.png'
import baiduwangpanIcon from '../../assets/baiduwangpan.png'
import bilibiliIcon from '../../assets/bilibili.png'
import doubanIcon from '../../assets/douban.png'
import douyuIcon from '../../assets/douyu.png'
import hupuIcon from '../../assets/hupu.png'
import huyaIcon from '../../assets/huya.png'
import jdIcon from '../../assets/jd.png'
import oschinaIcon from '../../assets/oschina.png'
import taobaoIcon from '../../assets/taobao.png'
import tencentIcon from '../../assets/tencent.png'
import tiebaIcon from '../../assets/tieba.png'
import v2exIcon from '../../assets/v2ex.png'
import weiboIcon from '../../assets/weibo.png'
import yuanjingIcon from '../../assets/yuanjing.png'
import zhihuIcon from '../../assets/zhihu.png'
import zhifubaoIcon from '../../assets/zhifubao.png'
import './index.css'

const Search: React.FC = () => {
	// 搜索文本
	const [searchText, setSearchText] = useState<string>('')
	// searchText ref
	const inputEl = useRef(null)

	// 自动 focus 到输入框
	useEffect(() => {
		if (inputEl){
			// @ts-ignore
			inputEl.current.focus()
		}
	}, [])


	useEffect(() => {
		const handleInputEvent = (event: { keyCode: number }) => {
			const { keyCode } = event
			if (keyCode === 13) {
				// 键盘回车键
				handleSearch()
			}
		}
		document.addEventListener('keyup', handleInputEvent)
		return () => {
			document.removeEventListener('keyup', handleInputEvent)
		}
	})


	const handleSearch = () => {
		const w = window.open('about:blank')
		if (w != null) {
			w.location.href = 'https://www.baidu.com/s?wd=' + searchText
		}
	}

	const handleKeyUp = ()=>{
	}

	return (
		<div className="flex flex-col items-center w-full h-full min-h-screen bg-repeat"
				 style={{ backgroundImage: `url(${bgImg})` }}>
			<div className="flex pt-16 md:pt-56 items-center">
				<img src={logo} alt="logo" className="w-16 md:w-24"/>
				<span className="text-3xl md:text-4xl">navpage</span>
			</div>
			<div className="flex my-3 md:my-4">
				<div className="h-10 w-10 md:h-12 md:w-12 border-r-2 border-gray-50 search_input">
				</div>
				<input type="text" ref={inputEl} value={searchText} onChange={event => setSearchText(event.target.value)}
							 onKeyUp={handleKeyUp}
							 className="w-60 h-10 md:w-98 md:h-12 px-4 focus:outline-none"/>
				<input type="submit" value=""
							 className="h-10 w-10 md:h-12 md:w-12 search_btn cursor-pointer hover:bg-yellow-300"
							 onClick={handleSearch}
							 title="点击搜索"/>
			</div>
			<div className="my-6 md:my-8 w-72 md:w-100 bg-blue-100">
				<div className="flex pt-4">
					<span className="flex-none pr-2 md:pr-4 py-1 md:py-2">帖吧:</span>
					<div className="flex flex-wrap">
						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={tiebaIcon} alt="logo" className="w-6 mr-1"/>
							<span>图拉丁吧</span>
						</a>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Search
