import React from 'react'
import logo from '../../assets/logo.png'
import './index.style.css'

const Search: React.FC = () => {
	return (

		<div className="flex flex-col pt-52 items-center h-screen w-screen bg-gray-100">
			<div className="flex items-center my-2">
				<img src={logo} alt="logo" className="w-24"/>
				<span className="text-4xl">navpage</span>
			</div>
			<div className="my-2">
				<input type="text" className="w-96 h-10"/>
				<input type="submit" value="search"/>
			</div>
			<div className="flex my-2 mt-12">
				<dd className="mx-2">综合</dd>
				<dd className="mx-2">购物</dd>
				<dd className="mx-2">帖吧</dd>
				<dd className="mx-2">论坛</dd>
				<dd className="mx-2">IT</dd>
				<dd className="mx-2">影音</dd>
			</div>
			<ul className="flex my-2 flex-wrap w-1/2">
				<li className="w-1/4 py-2">
					<a className="flex items-center justify-center" href="http://www.twhuang.top:9000/" target="_blank"
						 rel="noopener noreferrer">
						<img src={logo} alt="logo" className="w-6 mr-1"/>
						<span>淘宝</span>
					</a>
				</li>

				<li className="w-1/4 py-2">
					<a className="flex items-center justify-center" href="http://www.twhuang.top:9000/" target="_blank"
						 rel="noopener noreferrer">
						<img src={logo} alt="logo" className="w-6 mr-1"/>
						<span>淘宝</span>
					</a>
				</li>

				<li className="w-1/4 py-2">
					<a className="flex items-center justify-center" href="http://www.twhuang.top:9000/" target="_blank"
						 rel="noopener noreferrer">
						<img src={logo} alt="logo" className="w-6 mr-1"/>
						<span>淘宝</span>
					</a>
				</li>

				<li className="w-1/4 py-2">
					<a className="flex items-center justify-center" href="http://www.twhuang.top:9000/" target="_blank"
						 rel="noopener noreferrer">
						<img src={logo} alt="logo" className="w-6 mr-1"/>
						<span>淘宝</span>
					</a>
				</li>

			</ul>

		</div>
	)
}

export default Search
