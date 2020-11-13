import React from 'react'
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <>
            <div className="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">

                <div className="c-sidebar-brand d-md-down-none">
                    <a href="/" className="font-weight-bold text-white btn btn-default">SHOPPERR</a>

                </div>

                <ul className="c-sidebar-nav ps ps--active-y">
                    <li className="c-sidebar-nav-item">
                        <Link to="/admin" className="c-sidebar-nav-link">

                            <svg id="cis-speedometer" className="c-sidebar-nav-icon" viewBox="0 0 512 512">
                                <path fill="var(--ci-primary-color, currentColor)" d="M256,104C132.288,104,32,204.288,32,328v72H174a81.935,81.935,0,0,1,100.384-79.9l61.388-127.893,32.456,15.578-61.407,127.93A81.874,81.874,0,0,1,338,400H480V328C480,204.288,379.712,104,256,104ZM120,352H80V312h40Zm48-112H128V200h40Zm112-48H240V152h40ZM432,352H392V312h40Z" className="ci-primary"></path><circle cx="256" cy="400" r="46" fill="var(--ci-primary-color, currentColor)" className="ci-primary"></circle>
                            </svg>

                            Dashboard
                        </Link>
                    </li>

                    <li className="c-sidebar-nav-item">
                        <Link to="/admin/orders" className="c-sidebar-nav-link">
                            <svg id="cis-basket" className="c-sidebar-nav-icon" viewBox="0 0 512 512">
                                <polygon fill="var(--ci-primary-color, currentColor)" points="440.668 184 391.674 16 341.674 16 390.669 184 121.331 184 170.326 16 120.326 16 71.332 184 16 184 16 263.745 48 263.745 48.075 263.745 463.925 263.745 464 263.745 496 263.745 496 184 440.668 184" className="ci-primary"></polygon><polygon fill="var(--ci-primary-color, currentColor)" points="53.822 305.745 21.201 305.745 58.856 496 453.117 496 491.168 305.745 458.534 305.745 53.822 305.745" className="ci-primary"></polygon>
                            </svg>
                            Orders
                        </Link>
                    </li>

                    <li className="c-sidebar-nav-item">
                        <Link to="/admin/products" className="c-sidebar-nav-link">
                            <svg id="cis-basket" className="c-sidebar-nav-icon" viewBox="0 0 512 512">
                                <polygon fill="var(--ci-primary-color, currentColor)" points="440.668 184 391.674 16 341.674 16 390.669 184 121.331 184 170.326 16 120.326 16 71.332 184 16 184 16 263.745 48 263.745 48.075 263.745 463.925 263.745 464 263.745 496 263.745 496 184 440.668 184" className="ci-primary"></polygon><polygon fill="var(--ci-primary-color, currentColor)" points="53.822 305.745 21.201 305.745 58.856 496 453.117 496 491.168 305.745 458.534 305.745 53.822 305.745" className="ci-primary"></polygon>
                            </svg>
                            Products
                        </Link>
                    </li>

                    <li className="c-sidebar-nav-item">

                        <Link to="/admin/categories" className="c-sidebar-nav-link">
                            <svg id="cis-layers" className="c-sidebar-nav-icon" viewBox="0 0 512 512">
                                <path fill="var(--ci-primary-color, currentColor)" d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28Z" className="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M32,320.733v47.6l214.118,114.2a21,21,0,0,0,19.764,0L480,368.333v-47.6L256,440.2Z" className="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M32,232.833v47.933L245.88,398.4a21,21,0,0,0,20.24,0L480,280.766V232.833l-224,123.2Z" className="ci-primary"></path>
                            </svg>
                            Categories
                        </Link>
                    </li>

                    <li className="c-sidebar-nav-item">
                        <Link to="/admin/reviews" className="c-sidebar-nav-link">
                            <svg id="cis-chat-bubble" className="c-sidebar-nav-icon" viewBox="0 0 512 512">
                                <path fill="var(--ci-primary-color, currentColor)" d="M429.2,387.48C460.453,363.493,480,329.338,480,291.429,480,218.843,408.365,160,320,160S160,218.843,160,291.429s71.635,131.428,160,131.428a195.9,195.9,0,0,0,23.82-1.451l15.79,13.684A183.82,183.82,0,0,0,480,480V468.571a213.75,213.75,0,0,1-50.423-80.008Z" className="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M184.012,170.677c36.312-29.828,84.068-46.366,134.607-46.663C308.605,63.024,244.992,16,168,16,84.053,16,16,71.9,16,140.857c0,36.015,18.57,68.461,48.265,91.249l-.363,1.028A203.072,203.072,0,0,1,16,309.143V320a174.63,174.63,0,0,0,108.281-37.624,146.857,146.857,0,0,1,16.286-58.585A168.648,168.648,0,0,1,184.012,170.677Z" className="ci-primary"></path>
                            </svg>
                            Reviews
                        </Link>
                    </li>

                    <li className="c-sidebar-nav-item">
                        <Link to="/admin/customers" className="c-sidebar-nav-link">
                            <svg id="cis-people" viewBox="0 0 512 512" className="c-sidebar-nav-icon">
                                <path fill="var(--ci-primary-color, currentColor)" d="M470.077,312.662l-86.836-54.873,33.406-52.495a62.61,62.61,0,0,0,9.788-33.613V106.435A90.44,90.44,0,0,0,246.861,91.129,127.843,127.843,0,0,1,265.4,106.473a125.608,125.608,0,0,1,37.032,89.4v65.246a98.446,98.446,0,0,1-15.417,52.941L273,336.089l56.306,35.581a91.9,91.9,0,0,1,31.313,33.248c.6,1.084,1.163,2.184,1.715,3.29L496,408V359.708A55.653,55.653,0,0,0,470.077,312.662Z" className="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M310.077,402.1,223.241,347.23l33.406-52.495a62.61,62.61,0,0,0,9.788-33.613V195.876A90.435,90.435,0,0,0,176,105.441h0a90.435,90.435,0,0,0-90.435,90.435v65.246a62.61,62.61,0,0,0,9.788,33.613l33.406,52.5L41.923,402.1A55.653,55.653,0,0,0,16,449.149V496l320-.5V449.149A55.653,55.653,0,0,0,310.077,402.1Z" className="ci-primary"></path>
                            </svg>
                            Customers
                        </Link>
                    </li>
                </ul>



            </div>
        </>
    )
}

export default AdminSidebar
