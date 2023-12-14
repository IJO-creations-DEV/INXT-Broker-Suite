import React, { useState } from 'react'
import data from './data'
import CardComponent from '../../components/Cardcomponent'
import "./index.scss"
import GobackComponent from '../GobackComponent'

const NotificationScreen = () => {
  const [notiData, setNotiData] = useState(data)
  return (
    <div className='grid m-0 block__noti__conatiner'>
      <div className="col-12 md:col-12 lg:col-6">
        <GobackComponent />
        <div className="block__heading">
          <h1>Notification</h1>
        </div>
        <div className="noti__date">
        04 Oct 2023
        </div>
       
          {
            notiData.map((item) => {
              return (
                <div className="grid  noti__card mt-2">
                <div className="col-12 md:col-12 lg:col-12 xl:col-12 noti__card__content" >
                  <CardComponent className="notification__card p-3 " backgroundColor={item.isNoti == true ? "#FFFFFF" : "transparent"} borderRadius="15px">
                    <div className="card__contents">
                      <div className='noti__name mt-2'>
                        {item.name}
                      </div>
                      <div className='noti__policy mt-2'>
                        Policy_No : {item.Policy_No}
                      </div>
                      <div className='status__time__view mt-2'>
                        <div className='noti__status'>
                          {item.status}
                        </div>
                        <div >
                          {item.time}
                        </div>
                      </div>
                    </div>
                  </CardComponent>
                </div>
                </div>
              )
            })
          }
        </div>
      </div>
    
  )
}

export default NotificationScreen;
