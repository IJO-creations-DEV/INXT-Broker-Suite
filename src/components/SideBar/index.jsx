// // // // import React, { useState } from 'react';
// // // // import { Sidebar } from 'primereact/sidebar';
// // // // import { Button } from 'primereact/button';
// // // // import { ListBox } from 'primereact/listbox';
// // // // import SvgLogo from '../../assets/icons/SvgLogo';
// // // // import { menuList } from './list';
// // // // import SvgDot from '../../assets/icons/SvgDot';
// // // // import SvgDownArrow from '../../assets/icons/SvgDownArrow';

// // // // function ResponsiveDrawer() {
// // // //   const [visible, setVisible] = useState(true);
// // // //   const [findPath, setPath] = useState(null);
// // // //   const [openSubMenu, setOpenSubMenu] = useState('');

// // // //   const handleNavigation = (navigationPath) => {
// // // //     setPath(navigationPath);
// // // //     setVisible(false);
// // // //   };

// // // //   const handleClick = (name) => {
// // // //     setOpenSubMenu(openSubMenu === name ? '' : name);
// // // //   };

// // // //   return (
// // // //     <div className="card flex justify-content-center" style={{ backgroundColor: '#1C2536' }}>
// // // //       <Sidebar visible={visible} onHide={() => setVisible(false)} style={{ backgroundColor: '#1C2536' }}>
// // // //         <div>
// // // //           <div className="p-listbox-header">
// // // //             <SvgLogo />
// // // //           </div>
// // // //           {/* <ListBox
// // // //             options={menuList.map((data) => ({
// // // //               label: data.name,
// // // //               value: data.name,
// // // //             }))}
// // // //             onChange={(e) => handleClick(e.value)}
// // // //           /> */}
// // // //           {menuList.map((data, index) => (
// // // //             <React.Fragment key={data.name} style={{padding:10}}>
// // // //               <li
// // // //                 className="p-listbox-item"
// // // //                 onClick={() => handleClick(data.name)}
// // // //               >
// // // //                 {/* <span className="p-checkbox">
// // // //                   <SvgDot
// // // //                     color={
// // // //                       data.name === openSubMenu
// // // //                         ? '#6366F1'
// // // //                         : data.name === findPath
// // // //                         ? '#6366F1'
// // // //                         : '#1C2536'
// // // //                     }
// // // //                   />
// // // //                 </span> */}
// // // //                 <span style={{color:'#fff'}} className="p-listbox-item-content">
// // // //                   {data.name}
// // // //                   {/* <div>{index === 0 && <SvgDownArrow />}</div> */}
// // // //                 </span>
// // // //               </li>
// // // //               {openSubMenu === data.name && (
// // // //                 <div style={{ marginLeft: '20px' }}>
// // // //                   {data.submenu.map((subItem, index) => (
// // // //                     <li
// // // //                       key={index}
// // // //                       className="p-listbox-item"
// // // //                       onClick={() => handleNavigation(subItem.path)}
// // // //                     >
// // // //                       <span className="p-checkbox">
// // // //                         {/* <SvgDot
// // // //                           color={
// // // //                             subItem.path === findPath
// // // //                               ? '#6366F1'
// // // //                               : '#1C2536'
// // // //                           }
// // // //                         /> */}
// // // //                       </span>
// // // //                       <span
// // // //                         className="p-listbox-item-content"
// // // //                         style={{
// // // //                           color:
// // // //                             subItem.path === findPath
// // // //                               ? '#FFF'
// // // //                               : '#9DA4AE',
// // // //                         }}
// // // //                       >
// // // //                         {subItem.name}
// // // //                       </span>
// // // //                     </li>
// // // //                   ))}
// // // //                 </div>
// // // //               )}
// // // //             </React.Fragment>
// // // //           ))}
// // // //         </div>
// // // //       </Sidebar>
// // // //       <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default ResponsiveDrawer;
// // // import React, { useState } from 'react';
// // // import { Sidebar } from 'primereact/sidebar';
// // // import SvgLogo from '../../assets/icons/SvgLogo';
// // // import { menuList } from './list';
// // // import SvgDot from '../../assets/icons/SvgDot';
// // // import SvgDownArrow from '../../assets/icons/SvgDownArrow';
// // // import NavBar from '../NavBar';
// // // // import HomeScreen from './HomeScreen'; // Import your home screen component

// // // function ResponsiveDrawer() {
// // //     const [findPath, setPath] = React.useState(null);
// // //     const [openSubMenu, setOpenSubMenu] = React.useState('');
// // //     const [visible, setVisible] = useState(true);

// // //     const handleNavigation = (navigationPath) => {
// // //         setPath(navigationPath);
// // //         setOpenSubMenu('');
// // //     };

// // //     const handleClick = (name) => {
// // //         setOpenSubMenu(openSubMenu === name ? '' : name);
// // //     };
// // //     const handleCloseSidebar = () => {
// // //         setVisible(false);
// // //     };


// // //     return (
// // //         <div style={{ display: 'flex', height: '100vh' }}>
// // //             {/* Sidebar */}
// // //             <Sidebar
// // //                 visible={visible} onHide={handleCloseSidebar}
// // //                 style={{ backgroundColor: '#1C2536', width: '240px', overflowY: 'auto' }}
// // //             >
// // //                 <div style={{ padding: '20px' }}>
// // //                     <div style={{ marginBottom: '20px' }}>
// // //                         <SvgLogo />
// // //                     </div>
// // //                     {menuList.map((data, index) => (
// // //                         <React.Fragment key={data.name}>
// // //                             <div
// // //                                 style={{
// // //                                     display: 'flex',
// // //                                     alignItems: 'center',
// // //                                     marginBottom: '10px',
// // //                                     cursor: 'pointer',
// // //                                 }}
// // //                                 onClick={() => handleClick(data.name)}
// // //                             >
// // //                                 <SvgDot
// // //                                     color={
// // //                                         data.name === openSubMenu
// // //                                             ? '#6366F1'
// // //                                             : data.name === findPath
// // //                                                 ? '#6366F1'
// // //                                                 : '#1C2536'
// // //                                     }
// // //                                 />
// // //                                 <span style={{ marginLeft: '10px', color: '#fff' }}>
// // //                                     {data.name}
// // //                                 </span>
// // //                                 {index === 0 && <SvgDownArrow />}
// // //                             </div>
// // //                             {openSubMenu === data.name && (
// // //                                 <div style={{ marginLeft: '20px' }}>
// // //                                     {data.submenu.map((subItem, index) => (
// // //                                         <div
// // //                                             key={index}
// // //                                             style={{
// // //                                                 display: 'flex',
// // //                                                 alignItems: 'center',
// // //                                                 marginBottom: '5px',
// // //                                                 cursor: 'pointer',
// // //                                             }}
// // //                                             onClick={() => handleNavigation(subItem.path)}
// // //                                         >
// // //                                             <SvgDot
// // //                                                 color={
// // //                                                     subItem.path === findPath ? '#6366F1' : '#1C2536'
// // //                                                 }
// // //                                             />
// // //                                             <span
// // //                                                 style={{
// // //                                                     marginLeft: '10px',
// // //                                                     color:
// // //                                                         subItem.path === findPath ? '#FFF' : '#9DA4AE',
// // //                                                 }}
// // //                                             >
// // //                                                 {subItem.name}
// // //                                             </span>
// // //                                         </div>
// // //                                     ))}
// // //                                 </div>
// // //                             )}
// // //                         </React.Fragment>
// // //                     ))}
// // //                 </div>
// // //             </Sidebar>

// // //             {/* Home Screen */}
// // //             <div style={{ flex: '1', overflowY: 'auto', padding: '20px' }}>
// // //                 {/* Render your home screen component */}
// // //                 {/* <HomeScreen path={findPath} /> */}
// // //                 <NavBar/>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default ResponsiveDrawer;
// // import React, { useState } from 'react';
// // import { Sidebar } from 'primereact/sidebar';
// // import SvgLogo from '../../assets/icons/SvgLogo';
// // import { menuList } from './list';
// // import SvgDot from '../../assets/icons/SvgDot';
// // import SvgDownArrow from '../../assets/icons/SvgDownArrow';
// // import NavBar from '../NavBar';

// // function ResponsiveDrawer() {
// //     const [findPath, setPath] = React.useState(null);
// //     const [openSubMenu, setOpenSubMenu] = React.useState('');
// //     const [visible, setVisible] = useState(true);

// //     const handleNavigation = (navigationPath) => {
// //         setPath(navigationPath);
// //         setOpenSubMenu('');
// //     };

// //     const handleClick = (name) => {
// //         setOpenSubMenu(openSubMenu === name ? '' : name);
// //     };
// //     const handleCloseSidebar = () => {
// //         setVisible(false);
// //     };

// //     return (
// //         <div style={{ display: 'flex', height: '100vh' }}>
// //             {/* Sidebar */}
// //             <Sidebar
// //             visible
// //                 // visible={visible}
// //                 // onHide={handleCloseSidebar}
// //                 showCloseIcon={false}
// //                 style={{ backgroundColor: '#1C2536', width: '240px', overflowY: 'auto' }}
// //             >
// //                 <div style={{ padding: '20px' }}>
// //                     <div style={{ marginBottom: '20px' }}>
// //                         <SvgLogo />
// //                     </div>
// //                     {menuList.map((data, index) => (
// //                         <React.Fragment key={data.name}>
// //                             <div
// //                                 style={{
// //                                     display: 'flex',
// //                                     alignItems: 'center',
// //                                     marginBottom: '10px',
// //                                     cursor: 'pointer',
// //                                 }}
// //                                 onClick={() => handleClick(data.name)}
// //                             >
// //                                 <SvgDot
// //                                     color={
// //                                         data.name === openSubMenu
// //                                             ? '#6366F1'
// //                                             : data.name === findPath
// //                                                 ? '#6366F1'
// //                                                 : '#1C2536'
// //                                     }
// //                                 />
// //                                 <span style={{ marginLeft: '10px', color: '#fff' }}>
// //                                     {data.name}
// //                                 </span>
// //                                 {index === 0 && <SvgDownArrow />}
// //                             </div>
// //                             {openSubMenu === data.name && (
// //                                 <div style={{ marginLeft: '20px' }}>
// //                                     {data.submenu.map((subItem, index) => (
// //                                         <div
// //                                             key={index}
// //                                             style={{
// //                                                 display: 'flex',
// //                                                 alignItems: 'center',
// //                                                 marginBottom: '5px',
// //                                                 cursor: 'pointer',
// //                                             }}
// //                                             onClick={() => handleNavigation(subItem.path)}
// //                                         >
// //                                             <SvgDot
// //                                                 color={
// //                                                     subItem.path === findPath ? '#6366F1' : '#1C2536'
// //                                                 }
// //                                             />
// //                                             <span
// //                                                 style={{
// //                                                     marginLeft: '10px',
// //                                                     color:
// //                                                         subItem.path === findPath ? '#FFF' : '#9DA4AE',
// //                                                 }}
// //                                             >
// //                                                 {subItem.name}
// //                                             </span>
// //                                         </div>
// //                                     ))}
// //                                 </div>
// //                             )}
// //                         </React.Fragment>
// //                     ))}
// //                 </div>
// //             </Sidebar>

// //             {/* Main Content (NavBar) */}
// //             <div style={{ flex: '1', overflowY: 'auto', padding: '20px', backgroundColor: '#f0f0f0' }}>
// //                 <NavBar />
// //             </div>
// //         </div>
// //     );
// // }

// // export default ResponsiveDrawer;

// import React, { useState } from 'react';
// import { Sidebar } from 'primereact/sidebar';
// import SvgLogo from '../../assets/icons/SvgLogo';
// import { menuList } from './list';
// import SvgDot from '../../assets/icons/SvgDot';
// import SvgDownArrow from '../../assets/icons/SvgDownArrow';
// import NavBar from '../NavBar';

// function ResponsiveDrawer() {
//     const [findPath, setPath] = React.useState(null);
//     const [openSubMenu, setOpenSubMenu] = React.useState('');
//     const [visible, setVisible] = useState(true);

//     const handleNavigation = (navigationPath) => {
//         setPath(navigationPath);
//         setOpenSubMenu('');
//     };

//     const handleClick = (name) => {
//         setOpenSubMenu(openSubMenu === name ? '' : name);
//     };

//     return (
//         <div style={{ display: 'flex' }}>

//             <Sidebar
//                 visible={visible}
//                 style={{
//                     backgroundColor: '#1C2536',
//                     width: '240px',
//                     overflowY: 'auto',
//                     position: 'fixed',
//                     left: 0,
//                     height: '100%',
//                     zIndex: 1000,
//                     boxShadow: 'none', 
//                 }}
//                 onHide={() => setVisible(false)}
//             >
//                 <div style={{ padding: '20px' }}>
//                     <div style={{ marginBottom: '20px' }}>
//                         <SvgLogo />
//                     </div>
//                     {menuList.map((data, index) => (
//                         <React.Fragment key={data.name}>
//                             <div
//                                 style={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     marginBottom: '10px',
//                                     cursor: 'pointer',
//                                 }}
//                                 onClick={() => handleClick(data.name)}
//                             >
//                                 <SvgDot
//                                     color={
//                                         data.name === openSubMenu
//                                             ? '#6366F1'
//                                             : data.name === findPath
//                                                 ? '#6366F1'
//                                                 : '#1C2536'
//                                     }
//                                 />
//                                 <span style={{ marginLeft: '10px', color: '#fff' }}>
//                                     {data.name}
//                                 </span>
//                                 {index === 0 && <SvgDownArrow />}
//                             </div>
//                             {openSubMenu === data.name && (
//                                 <div style={{ marginLeft: '20px' }}>
//                                     {data.submenu.map((subItem, index) => (
//                                         <div
//                                             key={index}
//                                             style={{
//                                                 display: 'flex',
//                                                 alignItems: 'center',
//                                                 marginBottom: '5px',
//                                                 cursor: 'pointer',
//                                             }}
//                                             onClick={() => handleNavigation(subItem.path)}
//                                         >
//                                             <SvgDot
//                                                 color={
//                                                     subItem.path === findPath ? '#6366F1' : '#1C2536'
//                                                 }
//                                             />
//                                             <span
//                                                 style={{
//                                                     marginLeft: '10px',
//                                                     color:
//                                                         subItem.path === findPath ? '#FFF' : '#9DA4AE',
//                                                 }}
//                                             >
//                                                 {subItem.name}
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </Sidebar>


//             {/* <div style={{ marginLeft: '240px', flex: '1', overflowY: 'auto', padding: '20px', backgroundColor: 'red' }}>
//                 <NavBar />
//             </div> */}
//         </div>
//     );
// }

// export default ResponsiveDrawer;


import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import SvgLogo from '../../assets/icons/SvgLogo';
import SvgDot from '../../assets/icons/SvgDot';
import { menuList } from './list';
import "../SideBar/index.scss"
import { Link } from 'react-router-dom';
import SvgAccountIcon from '../../assets/icons/SvgAccountIcon';
import SvgMassterIcon from '../../assets/icons/SvgMassterIcon';
 import SvgReportsIcon from '../../assets/icons/SvgReportsIcon';

const ResponsiveDrawer = () => {
    const [findPath, setPath] = useState(null);
    const [openSubMenu, setOpenSubMenu] = useState('');
    const [visible, setVisible] = useState(true);

    const handleNavigation = (navigationPath) => {
        setPath(navigationPath);
        setOpenSubMenu('');
    };

    const handleClick = (name) => {
        setOpenSubMenu(openSubMenu === name ? '' : name);
    };

    useEffect(() => {
        const handleResize = () => {
            setVisible(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Sidebar
            visible={visible}
            style={{
                backgroundColor: '#1C2536 !important',
                display: visible ? 'block' : 'none',
                // height: '120vh'
            }}
            rootStyles={{
                backgroundColor: '#1C2536 !important',
            }}
            onHide={() => setVisible(false)}
        >
            <div style={{ padding: '20px' }}>
                <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                    <SvgLogo color={'#fff'} />
                </div>
                <Menu style={{ backgroundColor: '#1C2536 !important',border:'none' }}>
                    {menuList.map((data, index) => (
                        <React.Fragment key={data.name}>
                            <SubMenu
                                style={{ color: '#fff', width: '100%',
                                backgroundColor: data.name === openSubMenu || data.submenu.some(subItem => subItem.path === findPath) ? '#36435c' : '#1C2536',
                    }}
                                color="#fff"
                                label={data.name}
                                icon={data.name == 'Accounts' ? <SvgAccountIcon color={data.name === openSubMenu ? '#6366F1' : '#Fff'} /> : data.name == 'Master' ? <SvgMassterIcon color={data.name === openSubMenu ? '#6366F1' : '#Fff'} /> : data.name == 'Reports' ? <SvgReportsIcon color={data.name === openSubMenu ? '#6366F1' : '#Fff'} /> : undefined}
                                onClick={() => handleClick(data.name)}
                            >
                                {data.submenu.map((subItem, subIndex) => (
                                    <MenuItem  className='menu' key={subIndex} component={<Link to={subItem.path} />} onClick={() => handleNavigation(subItem.path)}>
                                        <div  className='menu__list'>
                                        {/* <span > */}
                                        <SvgDot
                                            color={
                                                subItem.path === findPath
                                                    ? '#6366F1'
                                                    : '#1C2536'
                                            }
                                        />
                                        {/* </span> */}
                                        <span style={{ color:subItem.path === findPath?'#fff':'#9DA4AE'}} className='menu__text'>{subItem.name}</span>
                                        </div>
                                    </MenuItem>
                                ))}
                            </SubMenu>
                        </React.Fragment>
                    ))}
                </Menu>
            </div>
        </Sidebar>
    );
};

export default ResponsiveDrawer;





