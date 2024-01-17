import { Card } from 'primereact/card'
import React from 'react'
import SvgRightarrow from '../../assets/agentIcon/SvgRightArrow'
import SvgArrow from '../../assets/agentIcon/SvgArrow'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom'

const PaymentCard = () => {
    const navigate = useNavigate()
    return (
        <Card>
            <div>
                <div>
                    Carson Darrin
                </div>
                <div>
                    Policy No: 123456
                </div>
            </div>
            <div>
                <div>
                    Gross Premium
                </div>
                <div>
                    ₱ 8400
                </div>
            </div>
            <div>

                <div>
                    Client ID
                </div>
                <div>
                    123456
                </div>
            </div>
            <div>

                <div>
                    Date
                </div>
                <div>
                    13/12/24
                </div>
            </div>
            <div>

                <div>
                    PAID
                </div>
            </div>
            <Button
                // label="Sort By"
                outlined
                onClick={() => navigate('/agent/payments/detail/1233')}
                icon={<SvgArrow />}
                className="sorbyfilter_container"
            />

        </Card>)
}

export default PaymentCard