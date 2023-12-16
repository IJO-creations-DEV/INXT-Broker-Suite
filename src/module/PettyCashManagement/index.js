
// import React, { useState,useRef } from 'react';
// import "../PettyCashManagement/index.scss";
// import { BreadCrumb } from 'primereact/breadcrumb';
// import SvgDot from '../../assets/icons/SvgDot';
// import InputField from '../../components/InputField';
// import DropDowns from '../../components/DropDowns';
// import SuccessIcon from '../../assets/icons/SuccessIcon';

// import SvgDropdown from '../../assets/icons/SvgDropdown';

// import { Button } from 'primereact/button';
// import { TabMenu } from 'primereact/tabmenu';



// const Pettycashmanagement = () => {
//     const items = [
     
//         { label: 'Accounts', url: '/accounts' },
//         { label: 'Petty Cash Management', url: 'Petty Cash Management' }
//     ];
//     const Initiate = { label: "Dashboard" };
//     const item = [
//       {label: 'Initiate'},
//       {label: 'Request'},
//       {label: 'Disbursement'},
//       {label: 'Disbursement'},
//       {label: 'Replenish'}
//   ];
//   const [visiblePopup, setVisiblePopup] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const popupRef = useRef(null);
  


//     return (
//         <div className="grid pettycash__management m-0">
//             <div className="col-12">
//                 <div className='pettycash__title'>Petty Cash Management</div>
//             </div>
//             <div className="col-12 md:col-2-5 lg-col-2-5 mb-4 sidebar">
//                 <BreadCrumb
//                     model={items}
//                     home={Initiate}
//                     className='breadCrums'
//                     separatorIcon={<SvgDot color={"#000"} />} 
//                     />
//             </div>
//             <div className='col-12 mb-3'>
//             <TabMenu className='p-tabmenu p-component tab-border p-tabmenu-nav p-reset' role='tablist' data-pc-name="tabmenu" data-pc-section="menu" model={item} />
//             </div>
//             <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
//                 <InputField
//                     classNames='input__filed'
//                     label="Date "
//                     placeholder='11/12/2023'
//                     textColor={'#111927'}
//                     textSize={'16'}
//                     textWeight={500}
//                 />
//             </div>
        
//             <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                    
                       
//                         <DropDowns  className='input__filed'
//                     label="Petty cash code"
//                     placeholder="Ho" 
//                     textColor={'#111927'}
//                     textSize={'16'}
//                     textWeight={500}
//                     value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
                
//         dropdownIcon={<SvgDropdown color={"#000"}/>}
//             />
                    
//                     </div>
          
           
//               <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                    
                       
//                     <DropDowns  className='input__filed'
//                 label="Division Code"
//                 placeholder="B023"
//                 textColor={'#111927'}
//                 textSize={'16'}
//                 textWeight={500}
//                 value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
            
//     dropdownIcon={<SvgDropdown color={"#000"}/>}
//         />
                
//                 </div>
//                 <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
           
//                <DropDowns  className='input__filed'
//                 label="Department Code"
//                 placeholder="0123"
//                 textColor={'#111927'}
//                 textSize={'16'}
//                 textWeight={500}
//                 value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
            
//     dropdownIcon={<SvgDropdown color={"#000"}/>}
//         />
//         </div>
          
//               <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
           
//            <DropDowns  className='input__filed'
//             label="Currency"
//             placeholder="PHP"
//             textColor={'#111927'}
//             textSize={'16'}
//             textWeight={500}
//             value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
        
// dropdownIcon={<SvgDropdown color={"#000"}/>}
//     />
//     </div>
           
//                <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
           
//            <DropDowns  className='input__filed'
//             label="Bank A/c"
//             placeholder="ABC-0012344-568"
//             textColor={'#111927'}
//             textSize={'16'}
//             textWeight={500}
//             value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
        
// dropdownIcon={<SvgDropdown color={"#000"}/>}
//     />
//     </div>

           
//               <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
           
//            <DropDowns  className='input__filed'
//             label="Sub A/c"
//             placeholder="ABC-0012344-568"
//             textColor={'#111927'}
//             textSize={'16'}
//             textWeight={500}
//             value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
        
// dropdownIcon={<SvgDropdown color={"#000"}/>}
//     />
//     </div>
          

//             <div className="col-12  md:col-2-5 lg-col-2-5 input__view">
//                 <InputField
//                     classNames='input__filed'
//                     label="Petty Cash Size"
//                     placeholder='10,000.00'
//                     textColor={'#111927'}
//                     textSize={'16'}
//                     textWeight={500}
//                 />
//             </div>
          
//             <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
//                 <InputField
//                     classNames='input__filed'
//                     label=" Available Cash"
//                     placeholder='10,000.00'
//                     textColor={'#111927'}
//                     textSize={'16'}
//                     textWeight={500}
//                 />
//             </div>
             
//             <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
//                 <InputField
//                     classNames='input__filed'
//                     label="Transaction Limit "
//                     placeholder='5,000.00'
//                     textColor={'#111927'}
//                     textSize={'16'}
//                     textWeight={500}
//                 />
//             </div>
             
//             <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
//                 <InputField
//                     classNames='input__filed'
//                     label="Minimum Cash Box "
//                     placeholder='3,000.00'
//                     textColor={'#111927'}
//                     textSize={'16'}
//                     textWeight={500}
//                 />
//             </div>
//             <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
               
//             </div>
//             <div className="col-12 md:col-12 lg-col-12 button__view__corrections">
//                 <div>
//                     <Button
//                         label='Approve'
//                         className='correction__btn'
//                         onClick={() => setVisiblePopup(true)}
//                     />
                  
//                 </div>
//             </div>
//             <div className="col-12">
//         {visiblePopup && (
//           <div className="grid custom-modal-overlay_create">
//             <div className="col-10 md:col-2 lg:col-2 custommodal_create">
//               <div >
//                 Approved
//               </div>
//             <div style={{marginLeft:15}}>
//             <SuccessIcon />
//             </div>
//             </div>
//           </div>
//         )}
//       </div>


//         </div>
//     );
// }

// export default Pettycashmanagement;
//===============================================

import React, { useState,useRef } from 'react';
import "../PettyCashManagement/index.scss";
import { BreadCrumb } from 'primereact/breadcrumb';
import SvgDot from '../../assets/icons/SvgDot';
import InputField from '../../components/InputField';
import DropDowns from '../../components/DropDowns';
import SuccessIcon from '../../assets/icons/SuccessIcon';

import SvgDropdown from '../../assets/icons/SvgDropdown';

import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';
import { TabView } from 'primereact/tabview';



const Pettycashmanagement = () => {
    const items = [
     
        { label: 'Accounts', url: '/accounts' },
        { label: 'Petty Cash Management', url: 'Petty Cash Management' }
    ];
    const Initiate = { label: "Dashboard" };
    const item = [
      {label: 'Initiate'},
      {label: 'Request'},
      {label: 'Disbursement'},
      {label: 'Disbursement'},
      {label: 'Replenish'}
  ];
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const popupRef = useRef(null);
  


    return (
        <div className="grid pettycash__management m-0">
            <div className="col-12">
                <div className='pettycash__title'>Petty Cash Management</div>
            </div>
            <div className="col-12 md:col-2-5 lg-col-2-5 mb-4 sidebar">
                <BreadCrumb
                    model={items}
                    home={Initiate}
                    className='breadCrums'
                    separatorIcon={<SvgDot color={"#000"} />} 
                    />
            </div>
            <div className='col-12 mb-3'>
          
            <TabMenu className='p-tabmenu p-component tab-border p-tabmenu-nav p-reset' role='tablist' data-pc-name="tabmenu" data-pc-section="menu" model={item} />
           
            </div>
            <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                <InputField
                    classNames='input__filed'
                    label="Date "
                    placeholder='11/12/2023'
                    textColor={'#111927'}
                    textSize={'16'}
                    textWeight={500}
                />
            </div>
        
            <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                    
                       
                        <DropDowns  className='input__filed'
                    label="Petty cash code"
                    placeholder="Ho" 
                    textColor={'#111927'}
                    textSize={'16'}
                    textWeight={500}
                    value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
                
        dropdownIcon={<SvgDropdown color={"#000"}/>}
            />
                    
                    </div>
          
           
              <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                    
                       
                    <DropDowns  className='input__filed'
                label="Division Code"
                placeholder="B023"
                textColor={'#111927'}
                textSize={'16'}
                textWeight={500}
                value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
            
    dropdownIcon={<SvgDropdown color={"#000"}/>}
        />
                
                </div>
                <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
           
               <DropDowns  className='input__filed'
                label="Department Code"
                placeholder="0123"
                textColor={'#111927'}
                textSize={'16'}
                textWeight={500}
                value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
            
    dropdownIcon={<SvgDropdown color={"#000"}/>}
        />
        </div>
          
              <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
           
           <DropDowns  className='input__filed'
            label="Currency"
            placeholder="PHP"
            textColor={'#111927'}
            textSize={'16'}
            textWeight={500}
            value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
        
dropdownIcon={<SvgDropdown color={"#000"}/>}
    />
    </div>
           
               <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
           
           <DropDowns  className='input__filed'
            label="Bank A/c"
            placeholder="ABC-0012344-568"
            textColor={'#111927'}
            textSize={'16'}
            textWeight={500}
            value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
        
dropdownIcon={<SvgDropdown color={"#000"}/>}
    />
    </div>

           
              <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
           
           <DropDowns  className='input__filed'
            label="Sub A/c"
            placeholder="ABC-0012344-568"
            textColor={'#111927'}
            textSize={'16'}
            textWeight={500}
            value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={item} optionLabel="name" 
        
dropdownIcon={<SvgDropdown color={"#000"}/>}
    />
    </div>
          

            <div className="col-12  md:col-2-5 lg-col-2-5 input__view">
                <InputField
                    classNames='input__filed'
                    label="Petty Cash Size"
                    placeholder='10,000.00'
                    textColor={'#111927'}
                    textSize={'16'}
                    textWeight={500}
                />
            </div>
          
            <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                <InputField
                    classNames='input__filed'
                    label=" Available Cash"
                    placeholder='10,000.00'
                    textColor={'#111927'}
                    textSize={'16'}
                    textWeight={500}
                />
            </div>
             
            <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                <InputField
                    classNames='input__filed'
                    label="Transaction Limit "
                    placeholder='5,000.00'
                    textColor={'#111927'}
                    textSize={'16'}
                    textWeight={500}
                />
            </div>
             
            <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
                <InputField
                    classNames='input__filed'
                    label="Minimum Cash Box "
                    placeholder='3,000.00'
                    textColor={'#111927'}
                    textSize={'16'}
                    textWeight={500}
                />
            </div>
            <div className="col-12 md:col-2-5 lg-col-2-5 input__view">
               
            </div>
            <div className="col-12 md:col-12 lg-col-12 button__view__corrections">
                <div>
                    <Button
                        label='Approve'
                        className='correction__btn'
                        onClick={() => setVisiblePopup(true)}
                    />
                  
                </div>
            </div>
            <div className="col-12">
        {visiblePopup && (
          <div className="grid custom-modal-overlay_create">
            <div className="col-10 md:col-2 lg:col-2 custommodal_create">
              <div >
                Approved
              </div>
            <div style={{marginLeft:15}}>
            <SuccessIcon />
            </div>
            </div>
          </div>
        )}
      </div>


        </div>
    );
}

export default Pettycashmanagement;

