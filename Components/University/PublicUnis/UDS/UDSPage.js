import {SafeAreaView} from 'react-native'

import UniData from '../../../Uni_Data/UniData'



const UDSPage = () => {

  const Name = 'University Of Development Studies'
  const Region = 'Greater Accra'
  const Town = 'Winneba'
  const Uni_Image = require('../../../../assets/udscampus.jpeg')
  const LogoImg = require('../../../../assets/UDSLogo.png')
  const Campuses =  ['Ajumaka','Accra']
  const CampusOne =  require('../../../../assets/tema.jpeg')
  const CampusTwo =  require('../../../../assets/tamale.jpeg')

  return (
    <SafeAreaView>
    <UniData 
      name={Name}
      region={Region}
      town={Town}
      uni_image={Uni_Image}
      logo_img={LogoImg}
      campuses={Campuses}
      campus_one={CampusOne}
      campus_two={CampusTwo}
    
    />
</SafeAreaView>

  )
}

export default UDSPage