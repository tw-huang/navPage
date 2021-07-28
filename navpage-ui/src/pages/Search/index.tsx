import React from 'react'
import logo from '../../assets/logo.png'
import bgImg from '../../assets/bg.png'
import './index.css'

const Search: React.FC = () => {
	return (
		<div className="flex flex-col items-center w-full h-full min-h-screen bg-repeat"
				 style={{ backgroundImage: `url(${bgImg})` }}>
			<div className="flex pt-16 md:pt-32 items-center">
				<img src={logo} alt="logo" className="w-16 md:w-24"/>
				<span className="text-3xl md:text-4xl">navpage</span>
			</div>
			<div className="flex my-3 md:my-4">
				<div className="h-10 w-10 md:h-12 md:w-12 search_input">
				</div>
				<input type="text" value="百度一下，你就知道" className="w-60 h-10 md:w-98 md:h-12"/>
				<input type="submit" value="" className="h-10 w-10 md:h-12 md:w-12 search_btn"/>
			</div>
			<div className="my-3 md:my-4 w-72 md:w-100">
				<div className="flex">
					<span className="flex-none pr-2 md:pr-4  py-1 md:py-2">影视:</span>
					<div className="flex flex-wrap">
						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>
						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>
					</div>
				</div>
				<div className="flex">
					<span className="flex-none pr-2 md:pr-4  py-1 md:py-2">影视:</span>
					<div className="flex flex-wrap">
						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>
						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>
					</div>
				</div>
				<div className="flex">
					<span className="flex-none pr-2 md:pr-4  py-1 md:py-2">影视:</span>
					<div className="flex flex-wrap">
						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>
						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>
					</div>
				</div>
				<div className="flex">
					<span className="flex-none pr-2 md:pr-4  py-1 md:py-2">影视:</span>
					<div className="flex flex-wrap">
						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>
						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>
					</div>
				</div>
				<div className="flex">
					<span className="flex-none pr-2 md:pr-4  py-1 md:py-2">影视:</span>
					<div className="flex flex-wrap">
						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>
						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>

						<a className="flex items-center justify-center px-2 md:px-5 py-1 md:py-2" target="_blank"
							 rel="noopener noreferrer"
							 href="http://www.baidu.com">
							<img src={logo} alt="logo" className="w-6 mr-1"/>
							<span>百度</span>
						</a>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Search
