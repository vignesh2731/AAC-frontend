import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Categoriespage.css';

function Categoriespage() {
    const navigate = useNavigate(); // Initialize navigate

    return (
        <>
            <div className="container">
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <div className="icons">
                        <img src='/bag.png' alt="Bag" />
                        <img 
                            src='https://www.shutterstock.com/image-vector/icon-notification-logo-design-universal-260nw-1132814402.jpg' 
                            alt="Notification" 
                        />
                        <img 
                            src='/account.png' 
                            alt="Account" 
                            onClick={() => navigate('/app6')} // Navigate to manageaccount
                            style={{ cursor: 'pointer' }} 
                        />
                    </div>
                </div>
                <p>Categories</p>

                <div className="categories">
                    <div className="category-group">
                        <h3>Women</h3>
                        <div className="category-item western-wear">
                            <div className="category-img">
                                <img src="/western wear.png" alt="Western Wear" />
                            </div>
                            <span>Western Wear</span>
                        </div>

                        <div className="category-item ethnic-wear">
                            <div className="category-img">
                                <img src="/ethnic&fusion wear.png" />
                            </div>
                            <span>Ethnic & Fusion Wear</span>
                        </div>
                        <div className="category-item kurthis">
                            <div className="category-img">
                                <img src="/kurthis.png" alt="Kurthis" />
                            </div>
                            <span>Kurthis</span>
                        </div>
                        <div className="category-item kurta-sets">
                            <div className="category-img">
                                <img src="/kurta sets.png" alt="Kurta Sets" />
                            </div>
                            <span>Kurta Sets</span>
                        </div>
                        <div className="category-item sarees">
                            <div className="category-img">
                                <img src="https://5.imimg.com/data5/VM/BR/MY-59702734/mimosa-circle-design-border-cotton-silk-kanjivaram-style-saree-with-blouse-in-color-turquoise-284063-500x500.png" alt="Sarees" />
                            </div>
                            <span>Sarees</span>
                        </div>
                        <div className="category-item bottom-wear">
                            <div className="category-img">
                                <img src="/bottom wear.png" alt="Bottom Wear" />
                            </div>
                            <span>Bottom Wear</span>
                        </div>
                        <div className="category-item party-wear">
                            <div className="category-img">
                                <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/2/T3vioHG0_72e4d57be4d94fe4870a568b74a501a9.jpg" alt="Party Wear" />
                            </div>
                            <span>Party Wear</span>
                        </div>
                        <div className="category-item sports-wear">
                            <div className="category-img">
                                <img src="/sports wear.png" alt="Sports Wear" />
                            </div>
                            <span>Sports Wear</span>
                        </div>
                        <div className="category-item sleep-wear">
                            <div className="category-img">
                                <img src="/sleepwear.png" alt="Sleep Wear" />
                            </div>
                            <span>Sleep Wear</span>
                        </div>
                    </div>

                    <div className="category-group">
                        <h3>Men</h3>
                        <div className="category-item topwear">
                            <div className="category-img">
                                <img src="/top wear.png" alt="Topwear" />
                            </div>
                            <span>Topwear</span>
                        </div>
                        <div className="category-item bottomwear">
                            <div className="category-img">
                                <img src="/bottomwear.png" alt="Bottomwear" />
                            </div>
                            <span>Bottomwear</span>
                        </div>
                        <div className="category-item suits">
                            <div className="category-img">
                                <img src="/suits.png" alt="Suits" />
                            </div>
                            <span>Suits</span>
                        </div>
                        <div className="category-item sports">
                            <div className="category-img">
                                <img src="/sportswear.png" alt="Sportswear" />
                            </div>
                            <span>Sportswear</span>
                        </div>
                        <div className="category-item ethnic">
                            <div className="category-img">
                                <img src="/ethnic.png" alt="Ethnic Wear" />
                            </div>
                            <span>Ethnic Wear</span>
                        </div>
                        <div className="category-item sleepwear">
                            <div className="category-img">
                                <img src="/sleep wear.png" alt="Sleep Wear" />
                            </div>
                            <span>Sleep Wear</span>
                        </div>
                        <div className="category-item winter-wear">
                            <div className="category-img">
                                <img src="/winterwear.png" alt="Winter Wear" />
                            </div>
                            <span>Winter Wear</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categoriespage;
