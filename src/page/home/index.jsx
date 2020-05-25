import React from 'react';
import less from './index.less';
export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: [
                'Registered Office Add.:',
                'B906, Nanfang Building, Luofang Rd.',
                'Luohu Dist., Shenzhen, China',
                'Zip Code: 518000',
                'Company Tel.: +86 755 826837760',
            ],
            email: [
                'E-mail:',
                'info@star-an.com',
                'ying@star-an.com',
                'vp@star-an.com',
            ],
        }
    }
    render() {
        return (
            <div class={less.wrap}>
                <ul>
                    <li className={less.left}>
                        {
                             this.state.address.map((item,i)=>{
                                return (
                                    <p key={i}>{item}</p>
                                )
                            })
                        }
                       
                        <br />
                        {
                            this.state.email.map((item,i)=>{
                                return (
                                <p key={i}>{item}</p>
                                )
                            })
                        }
                      
                    </li>
                    <li className={less.right}>
                        <img src='static/image/contact/1.png' />
                    </li>
                </ul>
            </div>
        );
    }
}
