import { View} from 'react-native'
import React from 'react'

import UniData from '../../Uni_Data/UniData';

const KnustPage = () => {

  const Name = 'Kwame Nkrumah University Of Science And Technology'
  const Region = 'Ashante Region'
  const Town = 'Kumasi'
  const Uni_Image = require('../../../assets/knust.jpeg')
  const LogoImg = require('../../../assets/knust.png')
  const Campuses =  ['Accra','Kumasi']
  const CampusOne =  require('../../../assets/tema.jpeg')
  const CampusTwo =  require('../../../assets/tamale.jpeg')
  

  return (
    <View>

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
    
    </View>

  )
}


export default KnustPage