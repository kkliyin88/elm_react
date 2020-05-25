//home.js
import React from 'react';
import { Link } from 'react-router-dom'
import {hotcity, groupcity} from '../../service/index.js'
export default class Home extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	       groupcity:{},
		   hotcity:[]
	    }
	}
	getCityData(){
		hotcity().then(res => {
			console.log('hotcity',res)
		    this.hotcity = res;
			this.setState({
				hotcity:res
			})
		})
		//获取所有城市
		groupcity().then(res => {
			
			this.sortgroupcity(res);
		})
	}
	sortgroupcity(groupcity){
	    let sortobj = {};
	    for (let i = 65; i <= 90; i++) {
	        if (groupcity[String.fromCharCode(i)]) {
	            sortobj[String.fromCharCode(i)] = groupcity[String.fromCharCode(i)];
	        }
	    }
		this.setState({
			groupcity:sortobj
		})
	   
	}
	componentDidMount(){
		this.getCityData();
	}
	render() {
		
		return (
			<div>
				<section id="hot_city_container">
					<h4 className="city_title">热门城市</h4>
					<ul className="citylistul clear">
						{
							this.state.hotcity.map((item,i)=>{
								return (
								 <li key={i}>
									<Link  to={{ pathname: ' /city/'+item.id }}>
									   <span>{item.name}</span>
									</Link>
								</li>
								)
							})
						}
					</ul>
				</section>
				<section className="group_city_container">
				    <ul className="letter_classify">
					    {
							Object.keys(this.state.groupcity).map((key,i)=>{
								return (
									<li key={i} >
										<h4 className="city_title">
											{key}
										</h4>
										<ul>
											{
												this.state.groupcity[key].map((item,ii)=>{
													return (
													 <li key={ii}>
														<Link  to={{ pathname: ' /city/'+item.id }}>
														   <span>{item.name}</span>
														</Link>
													</li>
													)
												})
											}
										</ul>
									</li>
								)
							})
						}
				    </ul>
				</section>
			</div>
		)
	}
}