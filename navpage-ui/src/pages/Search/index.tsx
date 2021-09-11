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
import youtubeIcon from '../../assets/youtube.png'
import tencentyunIcon from '../../assets/tencentyun.png'
import aliyunIcon from '../../assets/aliyun.png'
import githubIcon from '../../assets/github.png'
import giteeIcon from '../../assets/gitee.png'
import amazonIcon from '../../assets/amazon.png'
import gaodeIcon from '../../assets/gaode.png'
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


	return (
		<div className="flex flex-col items-center w-full h-full min-h-screen bg-repeat"
				 style={{ backgroundImage: `url(${bgImg})` }}>
			<div className="flex pt-16 md:pt-56 items-center">
				<img src={logo} alt="logo" className="w-16 md:w-24 mr-2"/>
				<span className="text-3xl md:text-4xl">导航狗</span>
			</div>
			<div className="flex my-4 md:my-6">
				<div className="h-10 w-10 md:h-12 md:w-12 border-r-2 border-gray-50 search_input">
				</div>
				<input type="text" ref={inputEl} value={searchText} onChange={event => setSearchText(event.target.value)}
							 className="w-60 h-10 md:w-98 md:h-12 px-4 focus:outline-none"/>
				<input type="submit" value=""
							 className="h-10 w-10 md:h-12 md:w-12 search_btn cursor-pointer hover:bg-yellow-200"
							 onClick={handleSearch}
							 title="点击搜索"/>
			</div>
			<div className="my-8 md:my-12 w-full md:w-100">
				{/* 贴吧 */}
				<div className="flex px-3 ">
					<span className="flex-none text-gray-500 pr-4 py-2 md:py-5">贴吧:</span>
					<div className="flex flex-wrap">
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://tieba.baidu.com/">
							<img src={tiebaIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">我的贴吧</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://tieba.baidu.com/f?kw=%E5%9B%BE%E6%8B%89%E4%B8%81">
							<img src={tiebaIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">图拉丁吧</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://tieba.baidu.com/f?kw=%E6%98%BE%E5%8D%A1">
							<img src={tiebaIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">显卡吧</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://tieba.baidu.com/f?kw=%E6%AC%A7%E6%B4%B2%E5%8D%A1%E8%BD%A6%E6%A8%A1%E6%8B%9F2">
							<img src={tiebaIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">欧洲卡车模拟2吧</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://tieba.baidu.com/f?kw=nba">
							<img src={tiebaIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">NBA吧</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://tieba.baidu.com/f?kw=chrome">
							<img src={tiebaIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">chrome吧</span>
						</a>

					</div>
				</div>
				{/* 论坛 */}
				<div className="flex px-3 ">
					<span className="flex-none text-gray-500 pr-4 py-2 md:py-5">论坛:</span>
					<div className="flex flex-wrap">
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.v2ex.com/">
							<img src={v2exIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">V2EX</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="http://nba.hupu.com/">
							<img src={hupuIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">虎扑论坛</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.oschina.net/">
							<img src={oschinaIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">开源中国</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://bbs.pcbeta.com/">
							<img src={yuanjingIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">远景论坛</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.douban.com/">
							<img src={doubanIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">豆 瓣</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.zhihu.com/">
							<img src={zhihuIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">知 乎</span>
						</a>
					</div>
				</div>
				{/* 学习 */}
				<div className="flex px-3 ">
					<span className="flex-none text-gray-500 pr-4 py-2 md:py-5">学习:</span>
					<div className="flex flex-wrap">
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://cloud.tencent.com/">
							<img src={tencentyunIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">腾讯云</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.aliyun.com/">
							<img src={aliyunIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">阿里云</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://github.com/">
							<img src={githubIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">github</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://gitee.com/">
							<img src={giteeIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">gitee</span>
						</a>
					</div>
				</div>
				{/* 娱乐 */}
				<div className="flex px-3 ">
					<span className="flex-none text-gray-500 pr-4 py-2 md:py-5">娱乐:</span>
					<div className="flex flex-wrap">
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.douyu.com/directory/all">
							<img src={douyuIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">斗鱼直播</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.huya.com/l">
							<img src={huyaIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">虎牙直播</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.bilibili.com/">
							<img src={bilibiliIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">哔哩哔哩</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.youtube.com/">
							<img src={youtubeIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">youtube</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.iqiyi.com/">
							<img src={aiqiyiIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">爱奇艺</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://sports.qq.com/nba">
							<img src={tencentIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">腾讯NBA</span>
						</a>
					</div>
				</div>
				{/* 网购 */}
				<div className="flex px-3 ">
					<span className="flex-none text-gray-500 pr-4 py-2 md:py-5">网购:</span>
					<div className="flex flex-wrap">
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.taobao.com/">
							<img src={taobaoIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">淘 宝</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.jd.com/">
							<img src={jdIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">京 东</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.amazon.cn/">
							<img src={amazonIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">亚马逊</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.alipay.com/">
							<img src={zhifubaoIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">支付宝</span>
						</a>
					</div>
				</div>
				{/* 生活 */}
				<div className="flex px-3 ">
					<span className="flex-none text-gray-500 pr-4 py-2 md:py-5">网购:</span>
					<div className="flex flex-wrap">
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://weibo.com/">
							<img src={weiboIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">微 博</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://map.baidu.com/">
							<img src={baidudituIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">百度地图</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://www.amap.com/">
							<img src={gaodeIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">高德地图</span>
						</a>
						<a className="flex items-center px-2 md:px-5 py-1 md:py-4 w-40 transform hover:scale-110 motion-reduce:transform-none" target="_blank"
							 rel="noopener noreferrer"
							 href="https://pan.baidu.com/">
							<img src={baiduwangpanIcon} alt="logo" className="w-8 mr-2"/>
							<span className="truncate text-gray-700">百度网盘</span>
						</a>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Search
